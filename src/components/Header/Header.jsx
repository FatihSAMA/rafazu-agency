import {images} from "~/constants/images";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import {motion, useScroll, useMotionValueEvent} from "framer-motion"
import { useState } from "react";

const variants = {
  visible : {
    y : 0,
  },
  hidden : {
    y : "-100%"
  }
}

export default function Header() {

  const {scrollY} = useScroll()

  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()

    if((previous - latest) > 20){
      setHidden(false)
    }
    else if(latest > previous && latest > 80){
      setHidden(true)
      
    }

  })

  return (
    <motion.header
    variants={variants}
    animate={hidden ? "hidden" : "visible"}
    transition={{duration : .35, ease : "easeInOut"}}
    className="h-[100px] w-full text-main flex justify-center fixed z-50">
        <div className=" wrapper flex items-center justify-between">

            <Link to="/" className="h-[50px] cursor-pointer mb-4">
                <img src={images.logo} alt="Rafazu Logo" className=" h-full" />
            </Link>

            <Navbar />

        </div>

    </motion.header>
  )
}
