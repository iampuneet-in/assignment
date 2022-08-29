const genres = ["Action", "Drama", "Comedy", "Thriller", "Romance"];

export const useGroupByGenre = (shows) => {
    return genres.map((genre) => {
      return {
        genre,
        shows: shows.filter((show) => show.genres.includes(genre)),
      };
    });
};
  

export const useSortByRating = (shows) => {
  return shows.sort((a, b) => b.rating.average - a.rating.average).slice(0, 20);
};
