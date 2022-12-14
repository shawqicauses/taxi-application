export {}
/* eslint-disable no-unused-vars */
declare global {
  interface Taxi {
    user_name: string
    lat: number
    lng: number
    compass: number
    is_available: boolean
    is_office: boolean
  }

  interface TaxiOrder {
    taxi_id: string
    taxi_name: string
    user_id: string
    user_name: string
    start_location_lat: number
    start_location_lng: number
    end_location_lat: number
    end_location_lng: number
    journey_status: string
  }
}
