import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetupList, setMeetupList] = useState([]);
  useEffect(() => {
    fetch("https://udemy-meetup-app-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => response.json())
      .then((data) => {
        let meetups = [];
        for (const key in data) {
          meetups.push({
            id: key,
            ...data[key],
          });
        }
        setIsLoading(false);
        setMeetupList(meetups);
      });
  }, []);
  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetupList} />
    </section>
  );
}

export default AllMeetupsPage;
