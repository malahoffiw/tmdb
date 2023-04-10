import { ComponentPropsWithoutRef, useState } from 'react';
import { BsFileEarmarkImage } from 'react-icons/bs';

export const Image = ({ src, alt, className = '' }: ComponentPropsWithoutRef<'img'>) => {
  const [error, setError] = useState(false);

  return (
    <div
      className={`${className} aspect-[2/3] max-w-[500px] rounded bg-gradient-to-b from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900`}
    >
      {error ? (
        <div className="w-full h-full text-center grid place-items-center">
          <BsFileEarmarkImage size={28} />
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className={`rounded group-hover:scale-105 transition-transform`}
        />
      )}
    </div>
  );
};
