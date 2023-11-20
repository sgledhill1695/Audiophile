import Layout from "../layout";
import GoBack from "@/app/components/reuseable/goBack";
import ProductDetail from "@/app/components/reuseable/productDetail";
import Features from "@/app/components/products/features";
import InTheBox from "@/app/components/products/inTheBox";
import ProductGallery from "@/app/components/products/productGallery";
import YouMayAlsoLike from "@/app/components/reuseable/youMayAlsoLike";
import ShopCategory from "@/app/components/reuseable/categories/shopCategory";
import BestAudioGear from "@/app/components/reuseable/bestAudioGear";


export default function zx7Speakers() {

    return (
        <>
            <Layout>

                <div className='max-w-[1440px] m-auto mb-[120px] sm:mb-[96px] lg:mb-[200px]'>
                    <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]">

                        <div className="mt-[16px] mb-[16px] sm:mt-[33px] sm:mb-[33px] lg:mt-[79px] lg:mb-[56px]">
                            <GoBack />
                        </div>

                        <div>
                            <ProductDetail
                                desktopImage={'/assets/product-zx7-speaker/desktop/image-product.jpg'}
                                tabletImage={'/assets/product-zx7-speaker/tablet/image-product.jpg'}
                                newProduct={false}
                                title={
                                    <>
                                        <p>ZX7</p>
                                        <p>SPEAKER</p>
                                    </>
                                }
                                description={'Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.'}
                                href={'/'}
                                productPrice={3500}
                                id={5}

                            />
                        </div>


                        <div className="mt-[88px] sm:mt-[120px] lg:mt-[160px] flex flex-col lg:flex-row lg:gap-[50px]">


                            <div className="lg:w-1/2 xl:w-2/3 xl:max-w-[650px]">

                                <Features
                                    features=
                                    {<>
                                        <p>
                                            Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.
                                        </p>

                                        <p className="mt-6">
                                            The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.
                                        </p>
                                    </>
                                    }
                                />

                            </div>


                            <div className="mt-[88px] sm:mt-[120px] lg:mt-0">

                                <InTheBox
                                    items={
                                        [
                                            { item: 'Speaker Unit', quantity: '2' },
                                            { item: 'Speaker Cloth Panel', quantity: '2' },
                                            { item: 'User Manual', quantity: '1' },
                                            { item: '3.5mm 7.5m Audio Cable', quantity: '1' },
                                            { item: '7.5m Optical Cable', quantity: '1' },

                                        ]
                                    }
                                />

                            </div>


                        </div>


                        <div className="mt-[88px] sm:mt-[120px] lg:mt-[160px]">

                            <ProductGallery />

                        </div>

                        <div className="mt-[88px] sm:mt-[120px] lg:mt-[160px]">

                            <h3 className="mb-[40px] flex justify-center text-[1.5rem] sm:text-[2rem] font-bold">YOU MAY ALSO LIKE</h3>

                            <div className="flex flex-col md:flex-row justify-between sm:gap-[10px] lg:gap-[30px]">



                                <div>

                                    <YouMayAlsoLike
                                        mobileImage={'/assets/shared/mobile/image-zx9-speaker.jpg'}
                                        tabletImage={'/assets/shared/tablet/image-zx9-speaker.jpg'}
                                        desktopImage={'/assets/shared/desktop/image-zx9-speaker.jpg'}
                                        productTitle={'ZX9 SPEAKER'}
                                        productUrl={'/'}
                                    />

                                </div>

                                <div className="mt-[56px] md:mt-[0px]">

                                    <YouMayAlsoLike
                                        mobileImage={'/assets/shared/mobile/image-xx99-mark-one-headphones.jpg'}
                                        tabletImage={'/assets/shared/tablet/image-xx99-mark-one-headphones.jpg'}
                                        desktopImage={'/assets/shared/desktop/image-xx99-mark-one-headphones.jpg'}
                                        productTitle={'XX99 MARK I'}
                                        productUrl={'/'}
                                    />

                                </div>

                                <div className="mt-[56px] md:mt-[0px]">

                                    <YouMayAlsoLike
                                        mobileImage={'/assets/shared/mobile/image-xx59-headphones.jpg'}
                                        tabletImage={'/assets/shared/tablet/image-xx59-headphones.jpg'}
                                        desktopImage={'/assets/shared/desktop/image-xx59-headphones.jpg'}
                                        productTitle={'XX59'}
                                        productUrl={'/'}
                                    />

                                </div>


                            </div>

                            <ShopCategory />

                            <BestAudioGear />





                        </div>






                    </div>
                </div>

            </Layout>
        </>
    )
}