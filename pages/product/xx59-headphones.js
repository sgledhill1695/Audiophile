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


export default function xx59Headphones() {

    return (
        <>
            <Layout>

                <div className='max-w-[1440px] m-auto mb-[120px] sm:mb-[96px] lg:mb-[200px]'>
                    <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]">

                        <div className="mt-[16px] mb-[16px] sm:mt-[33px] sm:mb-[33px] lg:mt-[79px] lg:mb-[56px]">
                            <Link href="/category/headphones" className="text-[0.93rem] text-[#000] opacity-50">Go Back</Link>
                        </div>

                        <div>
                            <ProductDetail
                                desktopImage={'/assets/product-xx59-headphones/desktop/image-product.jpg'}
                                tabletImage={'/assets/product-xx59-headphones/tablet/image-product.jpg'}
                                newProduct={false}
                                title={'XX59 HEADPHONES'}
                                description={'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'}
                                href={'/'}
                                productPrice={899}
                                id={3}

                            />
                        </div>


                        <div className="mt-[88px] sm:mt-[120px] lg:mt-[160px] flex flex-col lg:flex-row lg:gap-[50px]">


                            <div className="lg:w-1/2 xl:w-2/3 xl:max-w-[650px]">

                                <Features
                                    features=
                                    {<>
                                        <p>
                                            These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.
                                        </p>

                                        <p className="mt-6">
                                            More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C. 
                                       </p>
                                    </>
                                    }
                                />

                            </div>


                            <div className="mt-[88px] sm:mt-[120px] lg:mt-0">

                                <InTheBox
                                    items={
                                        [
                                            { item: 'Headphone Unit', quantity: '1' },
                                            { item: 'Replacement Earcups', quantity: '2' },
                                            { item: 'User Manual', quantity: '1' },
                                            { item: '5.5mm 5m Audio Cable', quantity: '1' },
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
                                        mobileImage={'/assets/shared/mobile/image-xx99-mark-two-headphones.jpg'}
                                        tabletImage={'/assets/shared/tablet/image-xx99-mark-two-headphones.jpg'}
                                        desktopImage={'/assets/shared/desktop/image-xx99-mark-two-headphones.jpg'}
                                        productTitle={'XX99 MARK II'}
                                        productUrl={'/product/xx9-mark-ii-headphones'}
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