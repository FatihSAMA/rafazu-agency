import { images } from "~/constants/images"
import { motion } from "framer-motion"

export default function About(){
    return(
        <section id="about" className=" w-full  ">
            <motion.div
            initial={{
                opacity : 0,
                x : '-100%'
            }}
            whileInView={{
                opacity : 1,
                x : 0,
                transition : {
                    duration : 1
                }
            }}
            className="wrapper min-h-screen flex flex-col justify-center items-center text-center gap-14">
                <h2 className="subheader text-dark">
                    Biz Kimiz
                    <img src={images.icon} className="inline h-20 -translate-y-6" />
                </h2>
                <p
                className="max-w-[900px] text-dark-blue text-xl font-light leading-relaxed relative 
                    after:w-full after:absolute after:-bottom-4 after:left-0 after:h-full
                    after:bg-gradient-to-t from-light
                "
                >
                    Merhaba! Biz Rafazu Tasarım Ajansı olarak, yaratıcılığı ve tutkuyu bir
                    araya getirerek markanızın büyümesine ve gelişmesine destek sağlamak
                    için buradayız. Maskotumuz olan zürafa, uzun boyu ve yüksek bakış
                    açısıyla, müşterilerimize sunduğumuz hizmetlerde vizyoner ve özgün
                    yaklaşımlarımızı temsil ediyor.
                </p>
                <button className=" bg-light text-dark font-bold py-4 px-10 rounded-full text-xl drop-shadow-button hover:scale-105  transition-all ">
                    Daha Fazla
                </button>

            </motion.div>
        </section>
    )
}