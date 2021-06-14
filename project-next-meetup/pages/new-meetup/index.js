import MeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetup() {
  function addMeetupHandler(meetup) {
    console.log(meetup);
  }
  return <MeetupForm onAddMeetup={addMeetupHandler} />;
}

export default NewMeetup;
