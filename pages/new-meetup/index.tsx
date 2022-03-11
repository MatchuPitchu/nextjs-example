// my-domain.de/new-meetup
import type { MeetupData } from '../../components/meetups/NewMeetupForm';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {
  const addMeetupHandler = (enteredMeetupData: MeetupData) => {
    console.log(enteredMeetupData);
  };

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
