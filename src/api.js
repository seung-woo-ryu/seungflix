import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export const moviesApi = {
    nowPlaying: () => api.get("movie/now_playing",{params:{api_key: "123d2102ba3f07ba30fffeceeef1616c",language: "en-US"}}),
    upcoming: () => api.get("movie/upcoming",{params:{api_key: "123d2102ba3f07ba30fffeceeef1616c",language: "en-US"}}),
    popular: () => api.get("movie/popular",{params:{api_key: "123d2102ba3f07ba30fffeceeef1616c",language: "en-US"}}),
    movieDetail: id =>
      api.get(`movie/${id}`, {
        params: {
          api_key: "123d2102ba3f07ba30fffeceeef1616c",
          append_to_response: "videos"
        }
      }),
    search: term =>
      api.get("search/movie", {
        params: {
          api_key: "123d2102ba3f07ba30fffeceeef1616c",
          query: encodeURIComponent(term)
        }
      })
  };
 
export const tvApi = {
  topRated: () => api.get("tv/top_rated",{params:{api_key: "123d2102ba3f07ba30fffeceeef1616c",language: "en-US"}}),
  popular: () => api.get("tv/popular",{params:{api_key: "123d2102ba3f07ba30fffeceeef1616c",language: "en-US"}}),
  airingToday: () => api.get("tv/airing_today",{params:{api_key: "123d2102ba3f07ba30fffeceeef1616c",language: "en-US"}}),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        api_key: "123d2102ba3f07ba30fffeceeef1616c",
        language: "en-US",
        append_to_response: "videos"
      }
    }),
  search: term =>
    api.get("search/tv", {
      params: {
        api_key: "123d2102ba3f07ba30fffeceeef1616c",
        language: "en-US",
        query: encodeURIComponent(term)
      }
    })
};