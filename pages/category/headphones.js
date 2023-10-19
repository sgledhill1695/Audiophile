import Layout from "../layout";
import PageHeader from "@/app/components/reuseable/pageHeader";
import Product from "@/app/components/reuseable/product";
import ShopCategory from "@/app/components/reuseable/categories/shopCategory";
import BestAudioGear from "@/app/components/reuseable/bestAudioGear";

export default function HeadphonesCategory(){

    return(
        <>
            <Layout>

                <PageHeader
                    title={'HEADPHONES'}
                />

                <div className='max-w-[1440px] m-auto '>
                    <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]">

                        <div className="sm:hidden mt-[16px] mb-[24px]">
                            <GoBack />
                        </div>

                        <div>
                            <Product
                                alignRight={false}
                                image={'/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg'}
                                newProduct={true}
                                title={'XX99 MARK II HEADPHONES'}
                                description={'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.'}
                                href={'/'}
                            />
                        </div>

                        <div className="mt-[120px] lg:mt-[160px]">
                            <Product
                                alignRight={true}
                                image={'/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg'}
                                newProduct={false}
                                title={'XX99 MARK I HEADPHONES'}
                                description={'As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.'}
                                href={'/'}
                            />
                        </div>

                        <div className="mt-[120px] lg:mt-[160px]">
                            <Product
                                alignRight={false}
                                image={'/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg'}
                                newProduct={false}
                                title={'XX59 HEADPHONES'}
                                description={'Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.'}
                                href={'/'}
                            />
                        </div>

                        <ShopCategory/>

                        <BestAudioGear/>




                    </div>
                </div>



            </Layout>
        
        </>
    )
}