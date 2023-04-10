import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const getAgeData = (bday: string, dday: string) => {
  const birthday = dayjs(bday).format('MMMM Do, YYYY');
  const deathday = dayjs(dday).format('MMMM Do, YYYY');
  const ageAlive = dayjs(bday).fromNow(true);
  const ageDead = dayjs(bday).from(dayjs(dday), true);
  const isAlive = dday.length === 0;

  return {
    birthday,
    deathday,
    ageAlive,
    ageDead,
    isAlive,
  };
};
