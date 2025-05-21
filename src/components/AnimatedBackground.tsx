import MaskedShape from './MaskedShape'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-white overflow-hidden">
      <MaskedShape 
        className="absolute w-[90px] h-[90px] md:w-[300px] md:h-[300px] left-[0%] top-[5%] animate-float-1"
        maskImage="/images/dots/rilakkuma_mask_1.svg"
      />
      <MaskedShape 
        className="absolute w-[75px] h-[75px] md:w-[250px] md:h-[250px] right-[1%] top-[8%] animate-float-2"
        maskImage="/images/dots/me01.svg"
      />
      <MaskedShape 
        className="absolute w-[60px] h-[60px] md:w-[200px] md:h-[200px] left-[1%] bottom-[10%] animate-float-3"
        maskImage="/images/dots/me03.svg"
      />
      <MaskedShape 
        className="absolute w-[60px] h-[60px] md:w-[200px] md:h-[200px] left-[45%] bottom-[15%] animate-float-3"
        maskImage="/images/dots/priestess.svg"
      />
      <MaskedShape 
        className="absolute w-[60px] h-[60px] md:w-[200px] md:h-[200px] right-[25%] bottom-[5%] animate-float-3"
        maskImage="/images/dots/madolche.svg"
      />
      <MaskedShape 
        className="absolute w-[60px] h-[60px] md:w-[200px] md:h-[200px] left-[15%] bottom-[5%] animate-float-3"
        maskImage="/images/dots/chalice.svg"
      />
      <MaskedShape 
        className="absolute w-[84px] h-[84px] md:w-[280px] md:h-[280px] right-[1%] bottom-[5%] animate-float-4"
        maskImage="/images/dots/rilakkuma_mask_2.svg"
      />
    </div>
  )
}