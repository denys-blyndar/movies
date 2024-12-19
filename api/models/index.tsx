import { Schema, model, Document } from 'mongoose';

interface MovieModel extends Document {
  title: string;
  year: number;
  format: 'DVD' | 'Blu-ray' | '4K' | 'HDR';
  stars: string[];
}

const movieSchema = new Schema<MovieModel>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxLength: 255,
    },
    year: {
      type: Number,
      required: true,
      min: 1850,
      max: new Date().getFullYear(),
    },
    format: {
      type: String,
      required: true,
      enum: ['DVD', 'Blu-ray', '4K', 'HDR'],
    },
    stars: {
      type: [{ type: String, trim: true }],
      required: true,
      validate: {
        validator: (value: string[]) => value && value.length > 0,
        message: 'A movie must contain at least one star',
      },
    },
  },
  { timestamps: true },
);

export const Movie = model<MovieModel>('Movie', movieSchema);
