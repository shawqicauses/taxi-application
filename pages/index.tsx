import {useLoadScript} from "@react-google-maps/api"
import {collection, onSnapshot} from "firebase/firestore"
import {NextPage} from "next"
import {useEffect, useState} from "react"
import MyGoogleMap from "../components/google-map"
import {database} from "../utils/utils"

const MyHome: NextPage = function MyHome() {
  const [taxis, setTaxis] = useState<Taxi[]>([])
  useEffect(
    () =>
      onSnapshot(collection(database, "taxi"), (snapshot) => {
        let taxisList: Taxi[] = []
        taxisList = snapshot.docs.map((doc) => doc.data() as Taxi)
        setTaxis(taxisList)
      }),
    []
  )

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  const {isLoaded} = useLoadScript({googleMapsApiKey: apiKey || ""})
  if (!isLoaded) return <div>Loading ...</div>
  return <MyGoogleMap taxis={taxis} />
}

export default MyHome
