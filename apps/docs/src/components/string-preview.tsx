// components/RenderFromString.tsx
"use client"

// Only client-side components can evaluate JavaScript
import React, { useEffect, useState } from "react"

interface RenderFromStringProps {
  code: string
  props: any
}

const RenderFromString: React.FC<RenderFromStringProps> = ({ code, props }) => {
  const [Component, setComponent] = useState<React.FC | null>(null)

  useEffect(() => {
    try {
      // Use eval or Function to execute the code string
      const DynamicComponent = eval(code) // Potential security risks here; sanitize input
      setComponent(() => DynamicComponent) // Set the evaluated component
    } catch (error) {
      console.error("Error evaluating the component:", error)
    }
  }, [code])

  if (!Component) {
    return <div>Loading component...</div>
  }

  return <Component {...props} />
}

export default RenderFromString
