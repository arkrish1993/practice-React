import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

/**
 * To be used when data to be fetched depends on request parameters.
 * Always run in the server side.

export function getServerSideProps(context) {
  const req = context.req; //Req params, similar to Node.js
  const res = context.res; //Res data, similar to Node.js
  console.log(req, res);
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}
 */

/**
 * To be used when data doesn't change frequently,
 * like, fetching a list to be displayed on the homepage.
 * Fetch data from API if needed
 * Next.js will run this before executing the HomePage code.
 * Promises can also be returned here.
 * In that case Next.js will wait for the promise to finish before executing the main code.
 */
export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 3600,
  };
}

export default HomePage;
