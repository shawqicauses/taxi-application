import {useLoadScript} from "@react-google-maps/api"
import {collection, getDocs} from "firebase/firestore/lite"
import {NextPage} from "next"
import PropTypes from "prop-types"
import MyGoogleMap from "../components/google-map"
import {database} from "../utils/utils"

export const getStaticProps = async function getStaticProps() {
  const taxiOrdersList: TaxiOrder[] = []
  try {
    const taxiOrdersCollection = collection(database, "orders")
    const taxiOrdersSnapshot = await getDocs(taxiOrdersCollection)
    taxiOrdersSnapshot.docs.forEach((document) => {
      const taxiOrder = document.data() as TaxiOrder
      taxiOrdersList.push(taxiOrder)
    })
  } catch (error) {
    throw new Error("Error while getting documents")
  }

  return {
    props: {
      taxiOrdersList
    }
  }
}

const MyHome: NextPage<{taxiOrdersList: (TaxiOrder | null | undefined)[]}> =
  function MyHome({taxiOrdersList}) {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    const {isLoaded} = useLoadScript({googleMapsApiKey: apiKey || ""})
    if (!isLoaded) return <div>Loading ...</div>
    return <MyGoogleMap taxiOrders={taxiOrdersList} />
  }

MyHome.propTypes = {
  taxiOrdersList: PropTypes.arrayOf(
    PropTypes.exact({
      taxi_id: PropTypes.string.isRequired,
      taxi_name: PropTypes.string.isRequired,
      user_id: PropTypes.string.isRequired,
      user_name: PropTypes.string.isRequired,
      start_location_lat: PropTypes.number.isRequired,
      start_location_lng: PropTypes.number.isRequired,
      end_location_lat: PropTypes.number.isRequired,
      end_location_lng: PropTypes.number.isRequired,
      journey_status: PropTypes.string.isRequired
    })
  ).isRequired
}

export default MyHome
