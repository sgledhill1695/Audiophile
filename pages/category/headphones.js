import Layout from "../layout";
import PageHeader from "@/app/components/reuseable/pageHeader";
import Product from "@/app/components/reuseable/prodouct";

export default function HeadphonesCategory(){

    return(
        <>
            <Layout>

                <PageHeader
                    title={'HEADPHONES'}
                />

                <div className='max-w-[1440px] m-auto '>
                    <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]">

                        <Product/>

                    </div>
                </div>



            </Layout>
        
        </>
    )
}