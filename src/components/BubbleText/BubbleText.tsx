import React, { useEffect } from 'react'

const Example = () => {
  return (
    <div className="grid h-screen place-content-center bg-black">
      <BubbleText />
    </div>
  )
}

const BubbleText = () => {
  useEffect(() => {
    const spans = document.querySelectorAll('.hover-text span')

    if (!spans) return

    spans.forEach(span => {
      span.addEventListener('mouseenter', function (this: typeof span) {
        span.style.fontWeight = '900'
        span.style.color = 'rgb(238, 242, 255)'

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = '500'
          leftNeighbor.style.color = 'rgb(199, 210, 254)'
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = '500'
          rightNeighbor.style.color = 'rgb(199, 210, 254)'
        }
      })

      span.addEventListener('mouseleave', function (this: typeof span) {
        this.style.fontWeight = '100'
        this.style.color = 'rgb(165, 180, 252)'

        const leftNeighbor = this.previousElementSibling as HTMLSpanElement
        const rightNeighbor = this.nextElementSibling as HTMLSpanElement

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = '100'
          leftNeighbor.style.color = 'rgb(165, 180, 252)'
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = '100'
          rightNeighbor.style.color = 'rgb(165, 180, 252)'
        }
      })
    })
  }, [])

  return (
    <h2 className="hover-text text-center text-5xl font-thin text-indigo-300">
      <Text>Bubbbbbbbble text</Text>
    </h2>
  )
}

const Text = ({ children }: { children: string }) => {
  return (
    <>
      {children.split('').map((child, idx) => (
        <span
          style={{
            transition: '0.35s font-weight, 0.35s color',
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  )
}

export default Example
