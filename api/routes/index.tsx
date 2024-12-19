import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { Movie } from '../models';

const router = express.Router();

// Define type for the movie structure
interface MovieType {
  _id: ObjectId;
  title: string;
  year: number;
  format: string;
  stars: string[];
}

// GET: Fetch all movies
router.get('/movies', async (_req: Request, res: Response): Promise<void> => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching movies', error });
  }
});

// POST: Add a new movie
router.post('/add-movie', async (req: Request, res: Response): Promise<void> => {
  const { title, year, format, stars }: Partial<MovieType> = req.body;

  if (!title || !year || !format || !stars) {
    res.status(400).json({ message: 'All fields are required' });
    return;
  }

  const movie: MovieType = {
    _id: new ObjectId(),
    title,
    year,
    format,
    stars,
  };

  try {
    const result = await Movie.create(movie);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error adding movie', error });
  }
});

// PATCH: Update a movie
router.patch('/movies/:id', async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, year, format, stars }: Partial<MovieType> = req.body;

  try {
    const result = await Movie.findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: { title, year, format, stars } },
      { new: true },
    );

    if (!result) {
      res.status(404).json({ message: 'Movie not found' });
      return;
    }

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error updating movie', error });
  }
});

// DELETE: Remove a movie
router.delete('/movies/:id', async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const result = await Movie.findOneAndDelete({ _id: new ObjectId(id) });

    if (!result) {
      res.status(404).json({ message: 'Movie not found' });
      return;
    }

    res.json({ message: 'Movie deleted', id: result._id });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting movie', error });
  }
});

export default router;
