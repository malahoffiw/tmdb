import { MdMovieCreation } from 'react-icons/md';

import { Heading, Container } from 'shared/ui';

type EmptyPageProps = {
  title: string;
};

export const EmptyPage = ({ title }: EmptyPageProps) => (
  <Container.Auto>
    <Heading>{title}</Heading>
    <MdMovieCreation className="mt-16 mb-2 mx-auto text-neutral-600 dark:text-neutral-400" size={32} />
    <p className="text-center text-neutral-600 dark:text-neutral-400 text-sm">Nothing here yet</p>
  </Container.Auto>
);
