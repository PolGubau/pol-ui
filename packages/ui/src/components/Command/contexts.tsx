"use client"

import React from "react"

import type { Context } from "./types"

// @ts-expect-error sync external store
export const CommandContext = React.createContext<Context>(undefined)
export const useCommand = () => React.useContext(CommandContext)
// @ts-expect-error sync external store
export const StoreContext = React.createContext<Store>(undefined)
export const useStore = () => React.useContext(StoreContext)
// @ts-expect-error sync external store
export const GroupContext = React.createContext<Group>(undefined)
