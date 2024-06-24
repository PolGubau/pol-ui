"use client"

import { useEffect, useState } from "react"

interface LocationOptions {
  enableHighAccuracy?: boolean
  timeout?: number
  maximumAge?: number
}

interface LocationState {
  coords: {
    latitude: number | null
    longitude: number | null
    accuracy: number | null
    altitude: number | null
    altitudeAccuracy: number | null
    heading: number | null
    speed: number | null
  }
  locatedAt: number | null
  error: string | null
}

const useLocation = (options: LocationOptions = {}) => {
  const [location, setLocation] = useState<LocationState>({
    coords: {
      latitude: null,
      longitude: null,
      accuracy: null,
      altitude: null,
      altitudeAccuracy: null,
      heading: null,
      speed: null,
    },
    locatedAt: null,
    error: null,
  })

  useEffect(() => {
    // Ensuring this runs only in a client-side environment
    if (typeof window === "undefined" || !("geolocation" in navigator)) {
      setLocation((prevState) => ({
        ...prevState,
        error:
          "Geolocation is not supported by your browser or not available in the current environment",
      }))
      return
    }

    const handleSuccess = (position: GeolocationPosition) => {
      setLocation({
        coords: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          altitude: position.coords.altitude,
          altitudeAccuracy: position.coords.altitudeAccuracy,
          heading: position.coords.heading,
          speed: position.coords.speed,
        },
        locatedAt: position.timestamp,
        error: null,
      })
    }

    const handleError = (error: GeolocationPositionError) => {
      setLocation((prevState) => ({
        ...prevState,
        error: error.message,
      }))
    }

    const geoOptions = {
      enableHighAccuracy: options.enableHighAccuracy ?? false,
      timeout: options.timeout ?? Infinity,
      maximumAge: options.maximumAge ?? 0,
    }

    const watcher = navigator.geolocation.watchPosition(
      handleSuccess,
      handleError,
      geoOptions
    )

    return () => {
      navigator.geolocation.clearWatch(watcher)
    }
  }, [options.enableHighAccuracy, options.timeout, options.maximumAge])

  return location
}

export { useLocation, type LocationState, type LocationOptions }
