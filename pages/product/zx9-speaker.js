import Layout from "../layout";
import GoBack from "@/app/components/reuseable/goBack";
import ProductDetail from "@/app/components/reuseable/productDetail";
import Features from "@/app/components/products/features";
import InTheBox from "@/app/components/products/inTheBox";
import ProductGallery from "@/app/components/products/productGallery";
import YouMayAlsoLike from "@/app/components/reuseable/youMayAlsoLike";
import ShopCategory from "@/app/components/reuseable/categories/shopCategory";
import BestAudioGear from "@/app/components/reuseable/bestAudioGear";
import Link from "next/link";


export default function zx9Speakers() {

    return (
        <>
            <Layout>

                <div className='max-w-[1440px] m-auto mb-[120px] sm:mb-[96px] lg:mb-[200px]'>
                    <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]">

                        <div className="mt-[16px] mb-[16px] sm:mt-[33px] sm:mb-[33px] lg:mt-[79px] lg:mb-[56px]">
                            <Link href="/category/speakers" className="text-[0.93rem] text-[#000] opacity-50">Go Back</Link>
                        </div>

                        <div>
                            <ProductDetail
                                desktopImage={'/assets/product-zx9-speaker/desktop/image-product.jpg'}
                                tabletImage={'/assets/product-zx9-speaker/tablet/image-product.jpg'}
                                newProduct={true}
                                title="ZX9 SPEAKER"
                                description={'Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.'}
                                href={'/'}
                                productPrice={4500}
                                id={6}
                            />
                        </div>


                        <div className="mt-[88px] sm:mt-[120px] lg:mt-[160px] flex flex-col lg:flex-row lg:gap-[50px]">


                            <div className="lg:w-1/2 xl:w-2/3 xl:max-w-[650px]">

                                <Features
                                    features=
                                    {<>
                                        <p>
                                            Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).
                                        </p>

                                        <p className="mt-6">
                                            Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.
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
                                            { item: '3.5mm 10m Audio Cable', quantity: '1' },
                                            { item: '10m Optical Cable', quantity: '1' },

                                        ]
                                    }
                                />

                            </div>


                        </div>


                        <div className="mt-[88px] sm:mt-[120px] lg:mt-[160px]">

                            <div className="grid grid-col-1 sm:grid-rows-2 sm:grid-cols-3 gap-[20px]">

                                <div className={`col-span-1 row-span-1 h-[175px] sm:h-auto bg-[url('/assets/product-zx9-speaker/desktop/image-gallery-1.jpg')] bg-no-repeat bg-center bg-cover rounded-[8px]`}>
                                </div>

                                <div className={`hidden sm:flex col-span-1 sm:col-span-2 row-span-2 h-[368px] sm:h-[592px] bg-[url('/assets/product-zx9-speaker/desktop/image-gallery-3.jpg')] bg-no-repeat bg-center bg-cover rounded-[8px]`}>
                                </div>


                                <div className={`col-span-1 h-[175px] sm:h-auto row-span-1 bg-[url('/assets/product-zx9-speaker/desktop/image-gallery-2.jpg')] bg-no-repeat bg-center bg-cover rounded-[8px]`}>
                                </div>

                                <div className={`sm:hidden col-span-1 sm:col-span-2 row-span-2 h-[368px] sm:h-[592px] bg-[url('/assets/product-zx9-speaker/desktop/image-gallery-3.jpg')] bg-no-repeat bg-center bg-cover rounded-[8px]`}>
                                </div>

                            </div>

                        </div>

                        <div className="mt-[88px] sm:mt-[120px] lg:mt-[160px]">

                            <h3 className="mb-[40px] flex justify-center text-[1.5rem] sm:text-[2rem] font-bold">YOU MAY ALSO LIKE</h3>

                            <div className="flex flex-col md:flex-row justify-between sm:gap-[10px] lg:gap-[30px]">



                                <div>

                                    <YouMayAlsoLike
                                        mobileImage={'/assets/shared/mobile/image-zx7-speaker.jpg'}
                                        tabletImage={'/assets/shared/tablet/image-zx7-speaker.jpg'}
                                        desktopImage={'/assets/shared/desktop/image-zx7-speaker.jpg'}
                                        productTitle={'ZX7 SPEAKER'}
                                        productUrl={'/product/zx7-speaker'}
                                    />

                                </div>

                                <div className="mt-[56px] md:mt-[0px]">

                                    <YouMayAlsoLike
                                        mobileImage={'/assets/shared/mobile/image-xx99-mark-one-headphones.jpg'}
                                        tabletImage={'/assets/shared/tablet/image-xx99-mark-one-headphones.jpg'}
                                        desktopImage={'/assets/shared/desktop/image-xx99-mark-one-headphones.jpg'}
                                        productTitle={'XX99 MARK I'}
                                        productUrl={'/product/xx9-mark-i-headphones'}
                                    />

                                </div>

                                <div className="mt-[56px] md:mt-[0px]">

                                    <YouMayAlsoLike
                                        mobileImage={'/assets/shared/mobile/image-xx59-headphones.jpg'}
                                        tabletImage={'/assets/shared/tablet/image-xx59-headphones.jpg'}
                                        desktopImage={'/assets/shared/desktop/image-xx59-headphones.jpg'}
                                        productTitle={'XX59'}
                                        productUrl={'/product/xx59-headphones'}
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