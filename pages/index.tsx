// my-domain.de
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1024px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Somme address 5, 12345 City',
    description: 'This is a first meetup.',
  },
  {
    id: 'm2',
    title: 'Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/d/df/Skyline_von_der_Siegess%C3%A4ule_aus.jpg',
    address: 'Somme address 10, 12345 City',
    description: 'This is a second meetup.',
  },
];

const Home = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default Home;
