import { useEffect, useRef } from 'react'

const MaskedShape = ({ 
  className = "", 
  size = 8,
  radius = 1,
  maskImage = "/rilakkuma_mask.png"
}: {
  className?: string
  size?: number
  radius?: number
  maskImage?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const img = new Image()
    img.src = maskImage
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const bounds = container.getBoundingClientRect()
      
      // Calculate aspect ratio preserving dimensions
      const aspectRatio = img.width / img.height
      let drawWidth, drawHeight
      
      if (bounds.width / bounds.height > aspectRatio) {
        drawHeight = bounds.height
        drawWidth = bounds.height * aspectRatio
      } else {
        drawWidth = bounds.width
        drawHeight = bounds.width / aspectRatio
      }

      // Set canvas size to match the drawing dimensions
      canvas.width = drawWidth
      canvas.height = drawHeight

      // Clear canvas and draw image
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(img, 0, 0, drawWidth, drawHeight)
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svg.setAttribute("width", "100%")
      svg.setAttribute("height", "100%")
      svg.setAttribute("viewBox", `0 0 ${drawWidth} ${drawHeight}`)
      svg.style.aspectRatio = aspectRatio.toString()

      for (let y = 0; y < drawHeight; y += size) {
        for (let x = 0; x < drawWidth; x += size) {
          // Check center pixel alpha to avoid border artifacts
          const centerX = Math.floor(x)
          const centerY = Math.floor(y)
          const centerPixelIndex = (centerY * canvas.width + centerX) * 4
          const centerAlpha = data[centerPixelIndex + 3] / 255
          
          if (centerAlpha <= 0.1) continue

          let totalAlpha = 0
          let totalGrayscale = 0
          let samples = 0

          for (let sy = -1; sy <= 1; sy++) {
            for (let sx = -1; sx <= 1; sx++) {
              const sampleX = Math.floor(x + (sx * size / 4))
              const sampleY = Math.floor(y + (sy * size / 4))

              if (sampleX >= 0 && sampleX < drawWidth && sampleY >= 0 && sampleY < drawHeight) {
                const pixelIndex = (sampleY * canvas.width + sampleX) * 4
                const r = data[pixelIndex]
                const g = data[pixelIndex + 1]
                const b = data[pixelIndex + 2]
                const a = data[pixelIndex + 3] / 255

                samples++

                if (a > 0) {
                  totalAlpha += a
                  totalGrayscale += (r + g + b) / 3
                } else {
                  // Treat fully transparent pixels as white for grayscale purposes
                  totalGrayscale += 255
                }
              }
            }
          }

          if (samples > 0) {
            const meanAlpha = totalAlpha / samples
            const avgGrayscale = totalGrayscale / samples

            if (meanAlpha > 0.1 && avgGrayscale < 255) {
              const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
              circle.setAttribute("cx", x.toString())
              circle.setAttribute("cy", y.toString())
              circle.setAttribute("r", radius.toString())

              const opacity = Math.max(0.2, 1 - avgGrayscale / 255) * meanAlpha
              circle.setAttribute("fill", `rgba(0,0,0,${opacity})`)
              svg.appendChild(circle)
            }
          }
        }
      }

      // Clear and update container
      container.innerHTML = ''
      container.appendChild(svg)
    }
  }, [maskImage, size, radius])

  return (
    <div 
      ref={containerRef}
      className={`${className} flex items-center justify-center`}
      style={{ aspectRatio: 'auto' }}
    />
  )
}

export default MaskedShape