import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function onAddMeetupSave(meetupData) {

  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetupSave={onAddMeetupSave} />
    </section>
  );
}

export default NewMeetupPage;
