import React from 'react'

interface AnnouncementProps {
  children: React.ReactNode
}
const Announcement = ({ children }: AnnouncementProps) => {
  return (
    <div className="inline-flex items-center rounded-lg bg-secondary-300 dark:bg-secondary-800 text-secondary-900 dark:text-secondary-50 px-3 py-1 text-sm font-medium">
      {children}
    </div>
  )
}

export { Announcement, type AnnouncementProps }
