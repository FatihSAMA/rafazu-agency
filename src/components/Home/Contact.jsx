export default function Contact(){
    return(
        <section id="contact" className="w-full bg-dark">
            <div className="wrapper min-h-screen flex items-center ">
                <div className="text-light text-2xl flex-1 w-full h-full flex flex-col gap-12 items-center justify-center">

                    <a href="tel:+905444670977" className="bg-gradient-to-r from-dark via-[rgba(32,84,170,0.3)] to-dark py-6 w-[80%] block text-center hover:text-[#A7C8FF]">+90 (544) 467 09 77</a>

                    <a href="mailto:info@rafazu.com" className="bg-gradient-to-r from-dark via-[rgba(32,84,170,0.3)] to-dark py-6 w-[80%] block text-center hover:text-[#A7C8FF]">info@rafazu.com</a>
                </div>

                <div className="flex-1">
                    <h2 className="subheader text-light mb-12">Bizimle İletişime Geçin</h2>
                    <form action="https://formsubmit.co/info@rafazu.com" method="POST" className="flex flex-col gap-8 justify-center items-center    ">
                        <input type="text" id="name" name="name" placeholder="Adınız" required className="input placeholder:italic focus:outline focus:outline-2 focus:outline-main" />
                        
                        <div className="flex gap-8 w-full">
                            <input type="text" id="firma" name="firma" placeholder="Firma Adı *" className="input placeholder:italic focus:outline focus:outline-2 focus:outline-main" />
                            
                            <input type="tel" id="number" name="number" placeholder="Telefon Numaranız *" required className="input placeholder:italic focus:outline focus:outline-2 focus:outline-main"/>
                        </div>
                        
                        
                        <input type="email" id="mail" name="mail" placeholder="Mail Adresiniz" className="input placeholder:italic focus:outline focus:outline-2 focus:outline-main" />
                        
                        <textarea type="" id="number" name="number" placeholder="Mesajınız" className="input placeholder:italic focus:outline focus:outline-2 focus:outline-main" > 
                        </textarea>

                        <button type="submit" className=" bg-light text-dark font-bold py-4 px-10 rounded-full text-xl drop-shadow-button hover:scale-105 hover:drop-shadow-light-glow  transition-all ">
                            Gönder
                        </button>

                    </form>
                </div>

            </div>
        </section>
    )
}