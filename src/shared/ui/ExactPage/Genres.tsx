type GenresProps = {
  genres: {
    id: number;
    name: string;
  }[];
};

export const Genres = ({ genres }: GenresProps) => (
  <div className="flex gap-2 flex-wrap">
    {genres.map((genre) => (
      <p className="px-2 py-1 border rounded border-pink-900 dark:border-pink-100" key={genre.id}>
        {genre.name}
      </p>
    ))}
  </div>
);
