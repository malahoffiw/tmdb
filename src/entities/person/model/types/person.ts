import { MovieShort } from 'entities/movie';

export interface Person {
  id: number;
  name: string;
  imagePath: string;
  bio: string;
  placeOfBirth: string;
  birthday: string;
  deathday: string;
  credits: MovieShort[];
}

export type PersonShort = Pick<Person, 'id' | 'name' | 'imagePath'>;
