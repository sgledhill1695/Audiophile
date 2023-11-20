import Layout from "./layout";
import Hero from "@/app/components/index/hero";
import ShopCategory from "@/app/components/reuseable/categories/shopCategory";
import Adverts from "@/app/components/index/adverts/adverts";
import BestAudioGear from "@/app/components/reuseable/bestAudioGear";

export default function Index() {

    return(
        <>
            <Layout>
    
                
                <Hero/>

                <div className='max-w-[1440px] m-auto mb-[120px] sm:mb-[96px] lg:mb-[200px]'>
                    <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]">
    
                        <ShopCategory />
    
                        <Adverts/>


                        <BestAudioGear />


    
                    </div>
                </div>
    
    
    
    
    
    
            </Layout>
        </>
    )
}