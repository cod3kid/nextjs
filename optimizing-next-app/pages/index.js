import Head from "next/head";
import Image from "next/image";
import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

function HomePage(props) {
  return (
    <div>
      Yoyo
      <Image src="/images/introvert-event.jpg" width={50} height={50} />
      <Head>
        <title>Hello Chuppu</title>
        <meta name="Dummy App" content="this app does nothing" />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
