import { useParams } from 'react-router-dom';

import { Elements } from 'features';
import { useExactPerson, getAgeData } from 'entities/person';
import { ExactPage, ErrorPage, LoadingPage } from 'shared/ui';

export const ExactPerson = () => {
  const { id } = useParams();
  if (!id) throw new Error('Person not found');

  const { person, isLoading, error } = useExactPerson(+id);

  if (error) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  if (!person) throw new Error('Person not found');
  const hasBioBlock = () => person.birthday.length > 0 || person.deathday.length > 0 || person.bio.length > 0;
  const ageData = getAgeData(person.birthday, person.deathday);

  return (
    <ExactPage.Container>
      <ExactPage.SectionScrolling>
        <ExactPage.Heading title={person.name} sub={person.placeOfBirth} />
        {hasBioBlock() && (
          <ExactPage.Callout>
            {person.birthday.length > 0 && (
              <ExactPage.Label text="Date of birth">
                {ageData.isAlive ? (
                  <ExactPage.DateWithAge date={ageData.birthday} age={ageData.ageAlive} />
                ) : (
                  <ExactPage.Date date={ageData.birthday} />
                )}
              </ExactPage.Label>
            )}
            {!ageData.isAlive && (
              <ExactPage.Label text="Date of death">
                <ExactPage.DateWithAge date={ageData.deathday} age={ageData.ageDead} />
              </ExactPage.Label>
            )}
            {person.bio.length > 0 && (
              <ExactPage.Label text="Biography">
                <p>{person.bio}</p>
              </ExactPage.Label>
            )}
          </ExactPage.Callout>
        )}
        {person.credits.length > 0 && (
          <>
            <ExactPage.Paragraph>Movies</ExactPage.Paragraph>
            <Elements.Slider items={person.credits} />
          </>
        )}
      </ExactPage.SectionScrolling>
      <ExactPage.SectionSticky imageSrc={person.imagePath} imageAlt={person.name} />
    </ExactPage.Container>
  );
};
