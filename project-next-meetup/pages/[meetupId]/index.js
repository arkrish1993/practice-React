import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return <MeetupDetail meetup={props.meetup} />;
}

/**
 * This function tells Next.js for which values, the pages must be pre-generated.
 */
export async function getStaticPaths() {
  /**
   * In normal cases this list will not be hardcoded
   * and will need to be fetched from some database.
   */
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetup: {
        id: "m1",
        title: "A First Meetup",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        address: "Some address 5, 12345 Some City",
        description: "This is a first meetup!",
      },
    },
  };
}

export default MeetupDetails;
