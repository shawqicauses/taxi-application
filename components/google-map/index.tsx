import {GoogleMap, MarkerF} from "@react-google-maps/api"
import {FC, Fragment, useMemo} from "react"

const MyGoogleMap: FC<{taxiOrders: (TaxiOrder | null | undefined)[]}> =
  function MyGoogleMap({taxiOrders}) {
    const center = useMemo(() => ({lat: 31.5, lng: 34}), [])
    return (
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="w-screen h-screen">
        {taxiOrders.map((taxiOrder, index) => {
          if (!taxiOrder) return null
          const location = {
            start: {
              lat: Number(taxiOrder.start_location_lat),
              lng: Number(taxiOrder.start_location_lng)
            },
            end: {
              lat: Number(taxiOrder.end_location_lat),
              lng: Number(taxiOrder.end_location_lng)
            }
          }

          const key = `${location.start.lat}-${index}`
          return (
            <Fragment key={key}>
              <MarkerF position={location.start} />
              <MarkerF position={location.end} />
            </Fragment>
          )
        })}
      </GoogleMap>
    )
  }

export default MyGoogleMap
