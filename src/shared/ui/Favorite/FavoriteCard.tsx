import { Image } from '../Image';
import { BsStar, BsStarFill } from 'react-icons/bs';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { favoriteStarAnimation } from '../../lib/favoriteStarAnimation';
import { MouseEvent } from 'react';

type CardProps = {
  title: string;
  imageSrc: string;
  isFavorite: boolean;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
};

export const FavoriteCard = ({ title, imageSrc, isFavorite, onClick }: CardProps) => {
  const [animationParent] = useAutoAnimate<HTMLDivElement>(favoriteStarAnimation);

  return (
    <li className="cursor-pointer grid grid-cols-[70px_1fr_50px] items-center gap-x-4">
      <Image src={imageSrc} alt={`${title}`} />
      <p className="text-sm sm:text-base">{title}</p>
      <div
        onClick={onClick}
        className="group flex justify-center p-2 rounded bg-neutral-300 dark:bg-neutral-700"
        ref={animationParent}
      >
        {isFavorite ? (
          <BsStarFill className="cursor-pointer text-yellow" size={20} />
        ) : (
          <BsStar className="cursor-pointer md:group-hover:text-yellow transition-colors" size={20} />
        )}
      </div>
    </li>
  );
};
