import { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { func, array } from 'prop-types';
import { Toaster } from 'react-hot-toast';
import { connect } from 'react-redux';

import Layout from '../components/layout';
import Home from '../components/home';
import AddMovie from '../components/add-movie';
import NotFound from '../shared/not-found';
import License from '../shared/footer/license';
import history from '../history';
import { getMovies } from '../store/actions';

class App extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    return (
      <Router history={history}>
        <Layout>
          <Switch>
            <Route path="/" exact component={() => <Home movies={this.props.movies} />} />
            <Route path="/add-movie" component={AddMovie} />
            <Route path="/license-agreement" component={License} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
        <Toaster position="top-center" />
      </Router>
    );
  }
}

App.propTypes = {
  getMovies: func,
  movies: array,
};

const mapStateToProps = ({ movies }) => movies;

export default connect(mapStateToProps, { getMovies })(App);
