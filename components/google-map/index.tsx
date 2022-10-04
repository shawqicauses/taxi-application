import {GoogleMap, MarkerF} from "@react-google-maps/api"
import {FC, useMemo} from "react"

const MyGoogleMap: FC<{taxis: (Taxi | null | undefined)[]}> =
  function MyGoogleMap({taxis}) {
    const center = useMemo(() => ({lat: 31.5, lng: 34}), [])
    return (
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="w-screen h-screen">
        {taxis.map((taxi, index) => {
          if (!taxi) return null
          const key = `${taxi.lat}-${index}`
          const position = {lat: taxi.lat, lng: taxi.lng}
          return <MarkerF key={key} position={position} />
        })}
      </GoogleMap>
    )
  }

export default MyGoogleMap
