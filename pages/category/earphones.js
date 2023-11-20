import Layout from "../layout";
import PageHeader from "@/app/components/reuseable/pageHeader";
import Product from "@/app/components/reuseable/product";
import ShopCategory from "@/app/components/reuseable/categories/shopCategory";
import BestAudioGear from "@/app/components/reuseable/bestAudioGear";
import GoBack from "@/app/components/reuseable/goBack";

export default function SpeakersCategory() {

    return (
        <>
            <Layout>

                <PageHeader
                    title={'EARPHONES'}
                /> 

                <div className='max-w-[1440px] m-auto mb-[120px] sm:mb-[96px] lg:mb-[200px]'>
                    <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]">

                        <div className="sm:hidden mt-[16px] mb-[24px]">
                            <GoBack />
                        </div>

                        <div>
                            <Product
                                alignRight={false}
                                image={'/assets/product-yx1-earphones/desktop/image-category-page-preview.jpg'}
                                newProduct={true}
                                title={
                                    <>
                                        YX1 WIRELESS
                                        <p>
                                            EARPHONES
                                        </p>
                                    </>
                                }
                                description={'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'}
                                href={'/product/yx1-wireless-earphones'}
                            />
                        </div>


                        <ShopCategory />

                        <BestAudioGear />




                    </div>
                </div>



            </Layout>

        </>
    )
}