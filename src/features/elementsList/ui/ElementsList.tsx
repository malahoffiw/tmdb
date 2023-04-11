import { Link } from 'react-router-dom';

import { isMovie, getImagePath } from '../lib';
import { MovieShort } from 'entities/movie';
import { PersonShort } from 'entities/person';
import { List } from 'shared/ui';

type ElementsListProps = {
  items: MovieShort[] | PersonShort[];
};

type ElementProps = {
  item: MovieShort | PersonShort;
};

export const Table = ({ items }: ElementsListProps) => (
  <List.Vertical>
    {items.map((item) => (
      <Element item={item} key={item.id} />
    ))}
  </List.Vertical>
);

export const Slider = ({ items }: ElementsListProps) => (
  <List.Horizontal>
    {items.map((item) => (
      <Element item={item} key={item.id} />
    ))}
  </List.Horizontal>
);

const Element = ({ item }: ElementProps) => {
  const label = isMovie(item) ? item.title : item.name;
  const image = getImagePath(item);
  const path = isMovie(item) ? `/movies/${item.id}` : `/people/${item.id}`;

  return (
    <Link to={path}>
      <List.Card title={label} imageSrc={image} />
    </Link>
  );
};
