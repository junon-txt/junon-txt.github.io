import { useEffect, useRef } from 'react'

const MaskedShape = ({ 
  className = "", 
  maskImage = "/rilakkuma_mask.png"
}: {
  className?: string
  maskImage?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    console.log('Loading SVG:', maskImage, 'with className:', className)
    
    fetch(maskImage)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load SVG: ${response.status} ${response.statusText}`)
        }
        return response.text()
      })
      .then(svgContent => {
        container.innerHTML = svgContent
        console.log('SVG loaded successfully:', maskImage)
      })
      .catch(error => {
        console.error(`Error loading SVG ${maskImage}:`, error)
      })
  }, [maskImage, className])

  return (
    <div 
      ref={containerRef}
      className={className}
    />
  )
}

export default MaskedShape