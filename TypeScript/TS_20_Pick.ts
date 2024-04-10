interface Movie {
  title: string;
  duration: number;
  director: string;
  budget: number;
}

type YoutubeVideo = Pick<Movie, 'title' | 'duration'>;

// type YoutubeVideo = {
//   title: string;
//   duration: number;
// };
