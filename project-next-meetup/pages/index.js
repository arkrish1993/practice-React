import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { Fragment } from "react";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="React meetups." />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
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
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://puffin:bullet@cluster0.sqbuy.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
