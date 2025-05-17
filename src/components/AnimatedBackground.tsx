import MaskedShape from './MaskedShape'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-white overflow-hidden">
      <MaskedShape 
        className="absolute w-[300px] h-[300px] left-[0%] top-[5%] animate-float-1"
        size={10}
        radius={1.2}
        maskImage="/images/bg/rilakkuma_mask.png"
      />
      <MaskedShape 
        className="absolute w-[250px] h-[250px] right-[1%] top-[8%] animate-float-2"
        size={5}
        radius={1.2}
        maskImage="/images/bg/me01.png"
      />
      <MaskedShape 
        className="absolute w-[200px] h-[200px] left-[1%] bottom-[10%] animate-float-3"
        size={5}
        radius={1}
        maskImage="/images/bg/me03.png"
      />
      <MaskedShape 
        className="absolute w-[200px] h-[200px] left-[45%] bottom-[15%] animate-float-3"
        size={5}
        radius={1}
        maskImage="/images/bg/priestess.png"
      />
      <MaskedShape 
        className="absolute w-[200px] h-[200px] right-[25%] bottom-[5%] animate-float-3"
        size={5}
        radius={1}
        maskImage="/images/bg/madolche.png"
      />
      <MaskedShape 
        className="absolute w-[200px] h-[200px] left-[15%] bottom-[5%] animate-float-3"
        size={5}
        radius={1}
        maskImage="/images/bg/chalice.png"
      />
      <MaskedShape 
        className="absolute w-[280px] h-[280px] right-[1%] bottom-[5%] animate-float-4"
        size={8}
        radius={1.2}
        maskImage="/images/bg/rilakkuma_mask.png"
      />
    </div>
  )
} 