import { MovieShort } from '../../../movie/model/types';

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
