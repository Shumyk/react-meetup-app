import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
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
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetupSave={onAddMeetupSave} />
    </section>
  );
}

export default NewMeetupPage;
