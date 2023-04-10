import { useAutoAnimate } from '@formkit/auto-animate/react';
import { BsStar, BsStarFill } from 'react-icons/bs';

import { favoriteStarAnimation } from 'shared/lib';

type MovieFooterProps = {
  rating: string;
  isFavorite: boolean;
  toggleFavorite: () => void;
};

export const MovieFooter = ({ rating, isFavorite, toggleFavorite }: MovieFooterProps) => {
  const [animationParent] = useAutoAnimate<HTMLButtonElement>(favoriteStarAnimation);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1 text-sm">
        <p>Rating:</p>
        <h1>{rating}</h1>
      </div>
      <button
        ref={animationParent}
        className="group flex items-center gap-2 px-4 py-2 rounded bg-neutral-300
                  dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
        onClick={toggleFavorite}
      >
        <p>Favorite</p>
        {isFavorite ? (
          <BsStarFill className="cursor-pointer text-yellow" size={20} />
        ) : (
          <BsStar className="cursor-pointer md:group-hover:text-yellow transition-colors" size={20} />
        )}
      </button>
    </div>
  );
};
