import { BsBoxArrowUpRight } from 'react-icons/bs';

type IMDBLinkProps = {
  id: string;
};

export const IMDBLink = ({ id }: IMDBLinkProps) => (
  <a
    href={`https://www.imdb.com/title/${id}`}
    target="_blank"
    rel="noreferrer"
    className="flex items-center gap-3 px-4 py-2 rounded bg-neutral-300
            dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
  >
    <p className="text-sm">IMDB</p>
    <BsBoxArrowUpRight />
  </a>
);
