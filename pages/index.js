import EventList from '../components/events/event-list'
import { getFeaturedEvents } from '../dummy-data'

function HomePage(props) {
  return (
    <div>
      <EventList items={props.events} />
    </div>
  )
}

// Adding Static Site Generation (SSR)
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents()
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  }
}

export default HomePage
