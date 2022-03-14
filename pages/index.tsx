// my-domain.de
import { NextPage } from 'next';
import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

interface Props {
  meetups: {
    id: string;
    title: string;
    image: string;
    address: string;
    description: string;
  }[];
}

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

// Recommended Approach: pages remains lean, normal reusable components builds these pages
const Home: NextPage<Props> = ({ meetups }) => {
  // V1: WITHOUT Pre-rendering: normal process to fetch additional data from server
  // const [loadedMeetups, setLoadedMeetups] = useState<Props[]>([]);

  // useEffect(() => {
  //   // normally: send HTTP Request and fetch data
  //   // problem: useEffect with data fetching is executed after component fn is executed,
  //   // so first loadedMeetups is empty [], this causes problem with SEO
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return <MeetupList meetups={meetups} />;
};

// V2: WITH Pre-rendering with Static Site Generation (SSG): if you need to fetch also additional data from server,
// use getStaticProps() to prepare props for a certain page;
// fn only works in pages folder and fn allows to execute code that normally only runs on server side (-> access file system, securely connect to database);
// code will NEVER reach client side since it's executed during build process;
// if Next finds this fn, it will execute it during pre-rendering process, i.e. BEFORE execution of component fn;
// use it with async and Next waits until Promise is resolved (-> until data is loaded) and return props for component fn
export const getStaticProps = () => {
  // fetch data from an API or database
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
};

export default Home;
