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


export default function yx1WirelessEarphones() {

    return (
        <>
            <Layout>

                <div className='max-w-[1440px] m-auto mb-[120px] sm:mb-[96px] lg:mb-[200px]'>
                    <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]">

                        <div className="mt-[16px] mb-[16px] sm:mt-[33px] sm:mb-[33px] lg:mt-[79px] lg:mb-[56px]">
                            <Link href="/category/earphones" className="text-[0.93rem] text-[#000] opacity-50">Go Back</Link>
                        </div>

                        <div>
                            <ProductDetail
                                desktopImage={'/assets/product-yx1-earphones/desktop/image-product.jpg'}
                                tabletImage={'/assets/product-yx1-earphones/tablet/image-product.jpg'}
                                newProduct={true}
                                title={'YX1 WIRELESS EARPHONES'}
                                description={'Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.'}
                                href={'/'}
                                productPrice={599}
                                id={4}
                            />
                        </div>


                        <div className="mt-[88px] sm:mt-[120px] lg:mt-[160px] flex flex-col lg:flex-row lg:gap-[50px]">


                            <div className="lg:w-1/2 xl:w-2/3 xl:max-w-[650px]">

                                <Features
                                    features=
                                    {<>
                                        <p>
                                            Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.
                                        </p>

                                        <p className="mt-6">
                                            The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.
                                        </p>
                                    </>
                                    }
                                />

                            </div>


                            <div className="mt-[88px] sm:mt-[120px] lg:mt-0">

                                <InTheBox
                                    items={
                                        [
                                            { item: 'Earphone Unit', quantity: '2' },
                                            { item: 'Multi-size Earplugs', quantity: '6' },
                                            { item: 'User Manual', quantity: '1' },
                                            { item: 'USB-C Charging Cable', quantity: '1' },
                                            { item: 'Travel Pouch', quantity: '1' },

                                        ]
                                    }
                                />

                            </div>


                        </div>


                        <div className="mt-[88px] sm:mt-[120px] lg:mt-[160px]">

                            <div className="grid grid-col-1 sm:grid-rows-2 sm:grid-cols-3 gap-[20px]">

                                <div className={`col-span-1 row-span-1 h-[175px] sm:h-auto bg-[url('/assets/product-yx1-earphones/desktop/image-gallery-1.jpg')] bg-no-repeat bg-center bg-cover rounded-[8px]`}>
                                </div>

                                <div className={`hidden sm:flex col-span-1 sm:col-span-2 row-span-2 h-[368px] sm:h-[592px] bg-[url('/assets/product-yx1-earphones/desktop/image-gallery-3.jpg')] bg-no-repeat bg-center bg-cover rounded-[8px]`}>
                                </div>


                                <div className={`col-span-1 h-[175px] sm:h-auto row-span-1 bg-[url('/assets/product-yx1-earphones/desktop/image-gallery-2.jpg')] bg-no-repeat bg-center bg-cover rounded-[8px]`}>
                                </div>

                                <div className={`sm:hidden col-span-1 sm:col-span-2 row-span-2 h-[368px] sm:h-[592px] bg-[url('/assets/product-yx1-earphones/desktop/image-gallery-3.jpg')] bg-no-repeat bg-center bg-cover rounded-[8px]`}>
                                </div>

                            </div>

                        </div>

                        <div className="mt-[88px] sm:mt-[120px] lg:mt-[160px]">

                            <h3 className="mb-[40px] flex justify-center text-[1.5rem] sm:text-[2rem] font-bold">YOU MAY ALSO LIKE</h3>

                            <div className="flex flex-col md:flex-row justify-between sm:gap-[10px] lg:gap-[30px]">



                                <div>

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

                                <div className="mt-[56px] md:mt-[0px]">

                                    <YouMayAlsoLike
                                        mobileImage={'/assets/shared/mobile/image-zx9-speaker.jpg'}
                                        tabletImage={'/assets/shared/tablet/image-zx9-speaker.jpg'}
                                        desktopImage={'/assets/shared/desktop/image-zx9-speaker.jpg'}
                                        productTitle={'ZX9 SPEAKER'}
                                        productUrl={'/product/zx9-speaker'}
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