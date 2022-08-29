const genres = ["Action", "Drama", "Comedy", "Thriller", "Romance"];

export const useGroupByGenre = (shows) => {
    console.log(shows);
    return genres.map((genre) => {
      return {
        genre,
        shows: shows.filter((show) => show.genres.includes(genre)),
      };
    });
};
  