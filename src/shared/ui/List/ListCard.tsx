import { Image } from '../Image';

type CardProps = {
  title: string;
  imageSrc: string;
};

export const ListCard = ({ imageSrc, title }: CardProps) => (
  <li className="group cursor-pointer">
    <Image src={imageSrc} alt={`${title}`} />
    <p className="mt-2 text-sm sm:text-base">{title}</p>
  </li>
);
