import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      imdb_id: null,
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
      results: null
    };

  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    let imdb_id = null;
    let results = null;
    
    try {
      if (isMovie) {
        ({ data: result, data:{imdb_id}} = await moviesApi.movieDetail(parsedId));
        ({videos: {results}} = result);
        results = results[0].key;

      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
      }
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result,results,imdb_id });
    }
    
  }

  render() {
    const { result, error, loading,results, imdb_id } = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} results={results} imdb_id={imdb_id} />;
  }
}