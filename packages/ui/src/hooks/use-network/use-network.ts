"use client"

import { useEffect, useState } from "react"

interface NetworkInformation extends EventTarget {
  downlink?: number
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g"
  rtt?: number
  saveData?: boolean
  onchange?: EventListener
}

interface NavigatorWithNetworkInformation extends Navigator {
  connection?: NetworkInformation
}

interface NetworkState {
  /**
   * The downlink attribute represents the effective bandwidth estimate in megabits per second, rounded to the nearest multiple of 25 kilobits per second.
   */
  downlink?: number | null

  /**
   * The effectiveType attribute represents the effective type of the connection meaning one of 'slow-2g', '2g', '3g', or '4g'.
   */
  effectiveType?: "slow-2g" | "2g" | "3g" | "4g" | null
  /**
   * The rtt attribute represents the effective round-trip time estimate in milliseconds.
   */
  rtt?: number | null
  /**
   * The saveData attribute is a boolean that is true if the user has requested a reduced data usage mode from the user agent.
   */
  saveData?: boolean | null
  /**
   * The isOnline attribute is a boolean that is true if the user is connected to the internet.
   */
  isOnline: boolean
}

function useNetwork(): NetworkState {
  const [networkState, setNetworkState] = useState<NetworkState>({
    downlink: null,
    effectiveType: null,
    rtt: null,
    saveData: null,
    isOnline: false, // Default to false; updated correctly on the client-side
  })

  useEffect(() => {
    // Ensure we are in the browser environment
    if (typeof window === "undefined") {
      return
    }

    const nav = navigator as NavigatorWithNetworkInformation

    if (!nav.connection) {
      setNetworkState((prevState) => ({
        ...prevState,
        downlink: null,
        effectiveType: null,
        rtt: null,
        saveData: null,
        isOnline: navigator.onLine, // Update online status in the browser
      }))
      return
    }

    const updateNetworkInfo = () => {
      const { downlink, effectiveType, rtt, saveData } = nav.connection ?? {}

      setNetworkState((prevState) => ({
        ...prevState,
        downlink,
        effectiveType,
        rtt,
        saveData,
        isOnline: navigator.onLine,
      }))
    }

    updateNetworkInfo()
    nav.connection.addEventListener("change", updateNetworkInfo)
    window.addEventListener("online", () => {
      setNetworkState((prevState) => ({ ...prevState, isOnline: true }))
    })
    window.addEventListener("offline", () => {
      setNetworkState((prevState) => ({ ...prevState, isOnline: false }))
    })

    return () => {
      if (nav.connection) {
        nav.connection.removeEventListener("change", updateNetworkInfo)
      }
      window.removeEventListener("online", () => {
        setNetworkState((prevState) => ({ ...prevState, isOnline: true }))
      })
      window.removeEventListener("offline", () => {
        setNetworkState((prevState) => ({ ...prevState, isOnline: false }))
      })
    }
  }, [])

  return networkState
}

export {
  useNetwork,
  type NetworkState,
  type NetworkInformation,
  type NavigatorWithNetworkInformation,
}
