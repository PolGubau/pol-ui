import { useEffect, useState } from "react"
import type { Meta } from "@storybook/react"
import {
  TbChevronLeft,
  TbChevronRight,
  TbChevronUp,
  TbReload,
} from "react-icons/tb"

import { useStep } from "../../hooks"
import { Button } from "../Button"
import { IconButton } from "../IconButton"
import AnimatedNumber from "./AnimatedNumber"

export default {
  title: "Components/AnimatedNumber",
  component: AnimatedNumber,
  tags: ["autodocs"],
} as Meta

export const Default = () => {
  const [value, setValue] = useState(45132)
  const handleShuffle = () => {
    const random = Math.floor(Math.random() * 99999)
    // const suff = ["$", "€", "£", ""]
    // const suffRandom = suff[Math.floor(Math.random() * suff.length)]

    // const pre = ["+", "-", ""]
    // const preRandom = pre[Math.floor(Math.random() * pre.length)]

    setValue(random)
  }

  return (
    <div className="justify-center flex flex-col gap-4 items-center">
      <AnimatedNumber
        className="text-6xl"
        value={value}
        locales="en-US" // Intl.NumberFormat() locales
      />

      <Button onClick={handleShuffle}>
        <TbReload size={15} />
        Shuffle
      </Button>
    </div>
  )
}

export const Compact = () => {
  const [value, setValue] = useState(45132)
  const handleShuffle = () => {
    const random = Math.floor(Math.random() * 99999)
    // const suff = ["$", "€", "£", ""]
    // const suffRandom = suff[Math.floor(Math.random() * suff.length)]

    // const pre = ["+", "-", ""]
    // const preRandom = pre[Math.floor(Math.random() * pre.length)]

    setValue(random)
  }

  return (
    <div className="justify-center flex flex-col gap-4 items-center">
      <AnimatedNumber
        className="text-6xl"
        value={value}
        format={{ notation: "compact" }} // Intl.NumberFormat() options
        locales="en-US" // Intl.NumberFormat() locales
      />

      <Button onClick={handleShuffle}>
        <TbReload size={15} />
        Shuffle
      </Button>
    </div>
  )
}

export const Spanish = () => {
  const [value, setValue] = useState(45132)
  const handleShuffle = () => {
    const random = Math.floor(Math.random() * 99999)
    // const suff = ["$", "€", "£", ""]
    // const suffRandom = suff[Math.floor(Math.random() * suff.length)]

    // const pre = ["+", "-", ""]
    // const preRandom = pre[Math.floor(Math.random() * pre.length)]

    setValue(random)
  }

  return (
    <div className="justify-center flex flex-col gap-4 items-center">
      <AnimatedNumber
        className="text-6xl"
        value={value}
        locales="es-ES" // Intl.NumberFormat() locales
      />

      <Button onClick={handleShuffle}>
        <TbReload size={15} />
        Shuffle
      </Button>
    </div>
  )
}

export const Grouped = () => {
  const addOne = (value: number) => {
    return value + 1
  }

  const subsOne = (value: number) => {
    return value - 1
  }

  const [value, setValue] = useState(11.3)
  const [prev, setPrev] = useState(8)

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(value)
      const addOrSubs = Math.random() > 0.7 ? addOne : subsOne

      const random = addOrSubs(value)
      setValue(random)
    }, 2000)

    return () => clearInterval(interval)
  }, [value])

  const diffPercent = ((value - prev) / prev) * 100

  return (
    <div className="justify-center flex flex-col gap-4 items-center">
      <p>Last month: {Math.round(prev)}€</p>
      <AnimatedNumber
        value={value}
        className="text-6xl flex gap-2 items-center"
        format={{ style: "currency", currency: "EUR" }}
        after={() => (
          <AnimatedNumber
            value={Math.floor(diffPercent)}
            format={{ style: "percent", maximumFractionDigits: 0 }}
            animate={{
              backgroundColor: diffPercent > 0 ? "#34d399" : "#ef4444",
            }}
            className="px-2 py-1 rounded-md"
            first={() => <TbChevronUp />}
          />
        )}
      />
    </div>
  )
}

export const Pagination = () => {
  const MAX = 20
  const MIN = 1
  const [step, { goToNextStep, goToPrevStep }] = useStep(MAX, MIN)
  return (
    <div className="justify-center flex gap-2 w-fit h-fit items-center border rounded-full p-1">
      <AnimatedNumber
        className="text-xl font-bold w-[30px] justify-end"
        value={step}
      />

      <IconButton onClick={goToPrevStep} size={"sm"} disabled={step <= MIN}>
        <TbChevronLeft size={18} />
      </IconButton>
      {/*  */}
      <IconButton onClick={goToNextStep} size={"sm"} disabled={step >= MAX}>
        <TbChevronRight size={18} />
      </IconButton>
    </div>
  )
}
