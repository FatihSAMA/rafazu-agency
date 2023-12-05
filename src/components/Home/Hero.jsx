import { images } from "~/constants/images";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion"


export default function Hero(){

    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target : ref,
        offset : ["start start", "end start"]
    })

    const yGiraffe = useTransform(scrollYProgress, [0, 1], ["0%", "-500%"])
    const xText = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
    const yTable = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

    return(
        <section 
        className="h-screen w-screen relative overflow-hidden"
        ref={ref}
        >
            {/* BG */}
            <div className="w-full h-full absolute z-[-5]"
            style={{
                bacground : "rgba(32, 84, 170, 1)",
                background: "linear-gradient(0deg, rgba(0, 0, 25, 1) 0%, rgba(32, 84, 170, 1) 100%)"
            }}>

            </div>
            
            {/* Header */}
            <div className=" absolute w-full h-[100px] bg-white top-0 z-[-3] "
            style={{
                 background: "linear-gradient(180deg, rgba(247, 247, 247, 1) 0%, rgba(209, 215, 246, 0) 100%)"
            }}></div>
            <img src={images.clouds} alt="clouds" className="absolute w-full z-[-1]" />

            {/* Overlay */}
            <img src={images.overlay} alt="overlay" className="absolute w-full h-full object-cover z-[-3] top-0 left-0" />
            <img src={images.overlay} alt="overlay" className="absolute w-full h-full object-cover z-[-3] top-0 left-0" />

            {/* Content */}
            <div
            className="wrapper h-full flex max-md:flex-col-reverse" >

                <motion.div
                initial={{
                    x : -100,
                    opacity : 0,
                }}
                whileInView={{
                    x : 0,
                    opacity : 100,
                    transition : {
                        duration : .4
                    }
                }}  
                viewport={{once : true}}
                style={{x : xText}}
                className="mt-[100px] flex-1 flex flex-col justify-center items-start max-xl:mx-8 text-light gap-8 px-auto ">
                    
                    <h1 className=" font-bakbak text-7xl drop-shadow-lg ">
                        Birlikte <br />
                        En İyisine Uzanalım
                    </h1>

                    <p className=" text-xl max-w-[600px] ">
                        Müşterilerimizin ihtiyaçlarını özenle dinliyor, marka kimliğini aşkla ve titizlikle planlıyor, sizi en iyi şekilde yansıtan stratejik çözümler sunuyoruz.
                    </p>

                    <button className=" bg-light text-main font-bold py-4 px-10 rounded-full text-xl ">
                        Teklif Al
                    </button>
                
                </motion.div>

               <div className="md:flex-1 relative mr-10 z-[-2]">

                    <motion.img 
                    style={{y : yGiraffe}}  
                    src={images.giraffe} alt="Giraffe" className="h-[550px] min-h-[550px] min-w-[220px] absolute top-0 right-0 " />

                    <motion.img
                    style={{y : yTable}}
                    src={images.table} alt="Table" className="h-[350px] min-h-[350px] min-w-[530.19px] absolute top-[400px] right-[80px] " />

               </div>

            </div>



        </section>
    )
}