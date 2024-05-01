'use client'

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import './lines.css'
interface LinesProps {
  children: React.ReactNode
}
const Lines = ({ children }: LinesProps) => {
  return (
    <main className="flex gap-4 w-full bg-primary overflow-hidden ">
      {children}
      <div className="flex flex-col h-screen sticky top-0">
        {Array.from({ length: 50 }).map((_, index) => (
          <label key={index} className="line">
            <div />
          </label>
        ))}
      </div>
    </main>
  )
}

export default Lines
