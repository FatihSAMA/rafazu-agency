import { services } from "~/constants/services";
import Benek from "../Benek";
import {motion} from 'framer-motion'

export default function Services(){
    return(
        <section id="services" className=" w-full  ">
            <div className="wrapper min-h-screen flex flex-col justify-center gap-20 "> 
                <motion.h2
                initial={{
                    x : -100,
                    opacity : 0,
                }}
                whileInView={{
                    x : 0,
                    opacity : 100,
                }}
                className=" subheader ">Hizmetlerimiz</motion.h2>

                <div className="flex items-center justify-center gap-12 flex-wrap w-full" >
                    {services.map((service, index) => (
                        <Benek key={index} service={service} index={index} />
                    ))}
                </div>  

            </div>

        </section>
    )
}