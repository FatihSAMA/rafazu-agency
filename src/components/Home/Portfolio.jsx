import PortfolioSlider from "../PortfolioSlider";


export default function Portfolio(){



    return(
        <section id="portfolio" className="w-full py-32 bg-dark">
            <div className="wrapper h-full flex flex-col gap-12">
                <h2 className="subheader text-light">Portfolyomuz</h2>

                <PortfolioSlider />
             
            </div>
        </section>
    )
}