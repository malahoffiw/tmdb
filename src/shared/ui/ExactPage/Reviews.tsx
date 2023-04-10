import dayjs from 'dayjs';

import { ExactPage } from 'shared/ui';

type ReviewsProps = {
  reviews: { id: number; author: string; content: string; createdAt: string }[];
};

export const Reviews = ({ reviews }: ReviewsProps) => (
  <div className="flex flex-col gap-2">
    {reviews.map((review) => (
      <ExactPage.Callout key={review.id}>
        <div className="flex justify-between items-baseline">
          <p>{review.author}</p>
          <p className="text-xs">{dayjs(review.createdAt).format('MMMM Do, YYYY')}</p>
        </div>
        <p className="text-sm">{review.content}</p>
      </ExactPage.Callout>
    ))}
  </div>
);
