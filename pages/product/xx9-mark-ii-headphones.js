import Layout from "../layout";
import GoBack from "@/app/components/reuseable/goBack";
import ProductDetail from "@/app/components/reuseable/productDetail";
import Features from "@/app/components/products/features";
import InTheBox from "@/app/components/products/inTheBox";
import ProductGallery from "@/app/components/products/productGallery";
import YouMayAlsoLike from "@/app/components/reuseable/youMayAlsoLike";
import ShopCategory from "@/app/components/reuseable/categories/shopCategory";
import BestAudioGear from "@/app/components/reuseable/bestAudioGear";


export default function xx99MarkIiHeadphones(){
    
    return(
        <>
            <Layout>

                <div className='max-w-[1440px] m-auto mb-[120px] sm:mb-[96px] lg:mb-[200px]'>
                    <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]">

                        <div className="mt-[16px] mb-[16px] sm:mt-[33px] sm:mb-[33px] lg:mt-[79px] lg:mb-[56px]">
                            <GoBack />
                        </div>

                        <div>
                            <ProductDetail
                                alignRight={false}
                                desktopImage={'/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg'}
                                tabletImage={'/assets/product-xx99-mark-two-headphones/tablet/image-product.jpg'}
                                newProduct={true}
                                title={'XX99 MARK II HEADPHONES'}
                                description={'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'}
                                href={'/'}
                                productPrice={2999}
                                id={2}
                            />
                        </div>

                        
                        <div className="mt-[88px] sm:mt-[120px] lg:mt-[160px] flex flex-col lg:flex-row lg:gap-[50px]">


                            <div className="lg:w-1/2 xl:w-2/3 xl:max-w-[650px]">

                                <Features
                                    features=
                                    {<>
                                        <p>
                                            Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.
                                        </p>

                                        <p className="mt-6">
                                            The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.
                                        </p>
                                    </>
                                    }
                                />

                            </div>

                            
                            <div className="mt-[88px] sm:mt-[120px] lg:mt-0">

                                <InTheBox 
                                    items={
                                        [
                                            {item: 'Headphone Unit', quantity: '1'},
                                            {item: 'Replacement Earcups', quantity: '2' },
                                            {item: 'User Manual', quantity: '1' },
                                            {item: '3.5mm 5m Audio Cable', quantity: '1' },
                                            {item: 'Travel Bag', quantity: '1' },

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

                            <ShopCategory/>

                            <BestAudioGear/>





                        </div>
 





                    </div>
                </div>   

            </Layout>
        </>
    )
}