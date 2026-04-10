import React from "react"

interface StarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const StarButton = ({ text = "Button", ...props }: StarButtonProps) => {
  return (
    <button
      {...props}
      className="
        group relative px-[50px] py-[18px] 
        text-[20px] font-accent font-bold uppercase tracking-widest
        text-black 
        bg-[#d4af37] 
        border-[3px] border-[#d4af37] 
        rounded-full 
        shadow-[0_0_0_#d4af378c] 
        transition-all duration-300 ease-in-out 
        cursor-pointer
        hover:bg-transparent hover:text-[#d4af37] hover:shadow-[0_0_35px_#d4af378c]
        active:scale-95
      "
    >
      {text}

      {/* Star 1 */}
      <div
        className="
          absolute top-[20%] left-[20%] w-[30px] z-[-5] 
          transition-all duration-[1000ms] ease-[cubic-bezier(0.05,0.83,0.43,0.96)] 
          drop-shadow-[0_0_0_#d4af37] 
          group-hover:top-[-100%] group-hover:left-[-40%] 
          group-hover:drop-shadow-[0_0_15px_#d4af37] group-hover:z-[2]
        "
      >
        <Star />
      </div>

      {/* Star 2 */}
      <div
        className="
          absolute top-[45%] left-[45%] w-[20px] z-[-5] 
          transition-all duration-[1000ms] ease-[cubic-bezier(0,0.4,0,1.01)] 
          drop-shadow-[0_0_0_#d4af37] 
          group-hover:top-[-40%] group-hover:left-[15%] 
          group-hover:drop-shadow-[0_0_15px_#d4af37] group-hover:z-[2]
        "
      >
        <Star />
      </div>

      {/* Star 3 */}
      <div
        className="
          absolute top-[40%] left-[40%] w-[10px] z-[-5] 
          transition-all duration-[1000ms] ease-[cubic-bezier(0,0.4,0,1.01)] 
          drop-shadow-[0_0_0_#d4af37] 
          group-hover:top-[65%] group-hover:left-[20%] 
          group-hover:drop-shadow-[0_0_15px_#d4af37] group-hover:z-[2]
        "
      >
        <Star />
      </div>

      {/* Star 4 */}
      <div
        className="
          absolute top-[20%] left-[40%] w-[12px] z-[-5] 
          transition-all duration-[800ms] ease-[cubic-bezier(0,0.4,0,1.01)] 
          drop-shadow-[0_0_0_#d4af37] 
          group-hover:top-[40%] group-hover:left-[90%] 
          group-hover:drop-shadow-[0_0_15px_#d4af37] group-hover:z-[2]
        "
      >
        <Star />
      </div>

      {/* Star 5 */}
      <div
        className="
          absolute top-[25%] left-[45%] w-[20px] z-[-5] 
          transition-all duration-[600ms] ease-[cubic-bezier(0,0.4,0,1.01)] 
          drop-shadow-[0_0_0_#d4af37] 
          group-hover:top-[30%] group-hover:left-[125%] 
          group-hover:drop-shadow-[0_0_15px_#d4af37] group-hover:z-[2]
        "
      >
        <Star />
      </div>

      {/* Star 6 */}
      <div
        className="
          absolute top-[5%] left-[50%] w-[10px] z-[-5] 
          transition-all duration-[800ms] ease-in-out 
          drop-shadow-[0_0_0_#d4af37] 
          group-hover:top-[0%] group-hover:left-[70%] 
          group-hover:drop-shadow-[0_0_15px_#d4af37] group-hover:z-[2]
        "
      >
        <Star />
      </div>
    </button>
  )
}

const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 784.11 815.53"
    className="
      w-full h-auto 
      fill-[#d4af37]
    "
  >
    <path d="M392.05 0c-20.9,210.08-184.06,378.41-392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93-210.06 184.09-378.37 392.05-407.74-207.98-29.38-371.16-197.69-392.06-407.78z" />
  </svg>
)

export default StarButton
