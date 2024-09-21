"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, MotionConfig, motion } from "framer-motion"
import { TbFolder, TbMessageCircle, TbUser, TbWallet } from "react-icons/tb"

import { cn } from "../../helpers"
import { useMeasure } from "../../hooks"
import { useClickOutside } from "../../hooks/use-click-outside"

const transition = {
  type: "spring",
  bounce: 0.1,
  duration: 0.25,
}

const ITEMS = [
  {
    id: 1,
    label: "User",
    title: <TbUser className="h-5 w-5" />,
    content: (
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1 text-zinc-700">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-400" />
          <span>Ibelick</span>
        </div>
        <button
          className="relative h-8 w-full scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
          type="button"
        >
          Edit Profile
        </button>
      </div>
    ),
  },
  {
    id: 2,
    label: "Messages",
    title: <TbMessageCircle className="h-5 w-5" />,
    content: (
      <div className="flex flex-col space-y-4">
        <div className="text-zinc-700">You have 3 new messages.</div>
        <button
          className="relative h-8 w-full scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
          type="button"
        >
          View more
        </button>
      </div>
    ),
  },
  {
    id: 3,
    label: "Documents",
    title: <TbFolder className="h-5 w-5" />,
    content: (
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col text-zinc-700">
          <div className="space-y-1">
            <div>Project_Proposal.pdf</div>
            <div>Meeting_Notes.docx</div>
            <div>Financial_Report.xls</div>
          </div>
        </div>
        <button
          className="relative h-8 w-full scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
          type="button"
        >
          Manage documents
        </button>
      </div>
    ),
  },
  {
    id: 4,
    label: "Wallet",
    title: <TbWallet className="h-5 w-5" />,
    content: (
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col text-zinc-700">
          <span>Current Balance</span>
          <span>$1,250.32</span>
        </div>
        <button
          className="relative h-8 w-full scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]"
          type="button"
        >
          View Transactions
        </button>
      </div>
    ),
  },
]

export default function ToolbarExpandable() {
  const [active, setActive] = useState<number | null>(null)
  const { ref, bounds } = useMeasure<HTMLDivElement>()

  const [isOpen, setIsOpen] = useState(false)
  const [maxWidth, setMaxWidth] = useState(0)

  useClickOutside(ref, () => {
    setIsOpen(false)
    setActive(null)
  })

  useEffect(() => {
    if (!bounds.width || maxWidth > 0) return

    setMaxWidth(bounds.width)
  }, [bounds.width, maxWidth])

  return (
    <MotionConfig transition={transition}>
      <div className="absolute bottom-8" ref={ref}>
        <div className="h-full w-full rounded-xl border border-zinc-950/10 bg-white">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} mode="sync">
              {isOpen ? (
                <motion.div
                  key="content"
                  initial={{ height: 0 }}
                  animate={{ height: bounds.height || 0 }}
                  exit={{ height: 0 }}
                  style={{
                    width: maxWidth,
                  }}
                >
                  <div ref={ref} className="p-2">
                    {ITEMS.map((item) => {
                      const isSelected = active === item.id

                      return (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isSelected ? 1 : 0 }}
                          exit={{ opacity: 0 }}
                        >
                          <div
                            className={cn(
                              "px-2 pt-2 text-sm",
                              isSelected ? "block" : "hidden"
                            )}
                          >
                            {item.content}
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
          <div className="flex space-x-2 p-2" ref={ref}>
            {ITEMS.map((item) => (
              <button
                key={item.id}
                aria-label={item.label}
                className={cn(
                  "relative flex h-9 w-9 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98]",
                  active === item.id ? "bg-zinc-100 text-zinc-800" : ""
                )}
                type="button"
                onClick={() => {
                  if (!isOpen) setIsOpen(true)
                  if (active === item.id) {
                    setIsOpen(false)
                    setActive(null)
                    return
                  }

                  setActive(item.id)
                }}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </MotionConfig>
  )
}
