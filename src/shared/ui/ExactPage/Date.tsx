import { RxDotFilled } from 'react-icons/rx';

type DateProps = {
  date: string;
};

export const Date = ({ date }: DateProps) => <div className="flex items-center gap-1">{date}</div>;

type DateWithAgeProps = {
  date: string;
  age: string;
};

export const DateWithAge = ({ date, age }: DateWithAgeProps) => (
  <div className="flex items-center gap-1">
    {date}
    <div className="flex items-center gap-1">
      <RxDotFilled />
      {age}
    </div>
  </div>
);
