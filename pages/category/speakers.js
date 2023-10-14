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
                    title={'SPEAKERS'}
                />

                <div className='max-w-[1440px] m-auto '>
                    <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]">

                        <div className="sm:hidden mt-[16px] mb-[24px]">
                            <GoBack/>
                        </div>

                        <div>
                            <Product
                                alignRight={false}
                                image={'/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg'}
                                newProduct={true}
                                title={
                                    <>
                                        ZX9
                                        <p>
                                            SPEAKER
                                        </p>
                                    </>
                                }
                                description={'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'}
                                href={'/'}
                            />
                        </div>

                        <div className="mt-[120px] lg:mt-[160px]">
                            <Product
                                alignRight={true}
                                image={'/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg'}
                                newProduct={false}
                                title={
                                    <>
                                        ZX7
                                    <p>
                                         SPEAKER
                                    </p>
                                    </>
                                }
                                description={'Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'}
                                href={'/'}
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