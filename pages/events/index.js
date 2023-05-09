import { useRouter } from 'next/router'
import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/event-search'

function EventsPage(props) {
  const router = useRouter()
  const { events } = props
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  )
}

export async function getStaticProps() {
  const events = await getAllEvents()

  return {
    props: {
      events,
    },
    revalidate: 60,
  }
}

export default EventsPage
