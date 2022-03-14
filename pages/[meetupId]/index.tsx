// my-domain.de/:meetupId
import MeetupDetail from '../../components/meetups/MeetupDetail';

const index = () => {
  return (
    <MeetupDetail
      image='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg'
      alt='First Meetup'
      title='First Meetup'
      address='Somme address 5, 12345 City'
      description='Somme description'
    />
  );
};

export default index;
