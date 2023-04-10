type NotFoundPageProps = {
  item: string;
};

export const NotFoundPage = ({ item }: NotFoundPageProps) => (
  <div className="w-full h-80 text-center grid place-items-center">
    <p>{item} not found</p>
  </div>
);
