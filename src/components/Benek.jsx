import { Link } from "react-router-dom"
import {motion} from "framer-motion"


const variants = {
    initial : {
        opacity : 0,
        y : 100,
    },
    animate : (index) => (
        {
            opacity : 1,
            y : 0,
            transition : {
                delay : 0.2 * index
            }
        }
    )
}

export default function Benek({service, index}){
    
    const {icon, title, shape, url} = service

    const styles = {
        borderRadius: shape,
        background: "linear-gradient(120deg, rgba(4,4,72,1) 20%, rgba(0,0,25,1) 100%)"
    }

    
    return(        

        <motion.div 
        variants={variants}
        initial="initial"
        whileInView="animate"
        custom={index}
        whileHover={{
            scale : 1.1
        }}
        className="flex-grow flex-shrink-0 basis-[300px] flex flex-col justify-center items-center text-center text-light  drop-shadow-benek relative max-w-[280px] h-[280px] gap-4 " style={ styles }>

            <div>
                <img src={icon} alt={title} className="object-cover h-[70px]" />
            </div>

            <h4 className="text-xl font-medium max-w-[200px]" >
                {title}
            </h4>

            <Link to={url} className=" bg-light text-dark rounded-full px-3 py-1 text-lg font-bold hover:drop-shadow-light-glow border-4 border-blue-200">Daha Fazla</Link>


            <div className="absolute -top-2 -left-2 opacity-20 w-full h-full -z-10" style={{borderRadius: shape, border: "5px solid #F7F7F7", boxShadow: "-4px -4px 5px black "}} ></div>

        </motion.div>

    )

}