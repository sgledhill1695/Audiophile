import Layout from "./layout";
import Hero from "@/app/components/index/hero";
import ShopCategory from "@/app/components/index/shopCategory";
import Adverts from "@/app/components/index/adverts";

export default function Index() {

    return(
        <>
        <Layout>

            
            <Hero/>

            <div className="ps-[11%] pe-[11%]">
                <ShopCategory />
            </div>

            <div className="ps-[11%] pe-[11%]">
                <Adverts />
            </div>





        </Layout>
        </>
    )
}