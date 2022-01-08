import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function onAddMeetupSave(meetupData) {
    fetch(
      "https://react-meetup-app-a62f6-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => history.replace('/'));
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetupSave={onAddMeetupSave} />
    </section>
  );
}

export default NewMeetupPage;
