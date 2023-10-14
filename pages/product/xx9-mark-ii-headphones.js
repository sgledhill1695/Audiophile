import Layout from "../layout";
import GoBack from "@/app/components/reuseable/goBack";
import ProductDetail from "@/app/components/reuseable/productDetail";


export default function xx99MarkIiHeadphones(){
    
    return(
        <>
            <Layout>

                <div className='max-w-[1440px] m-auto '>
                    <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]">

                        <div className="mt-[79px] mb-[56px]">
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
                                productPrice={'2,999'}
                            />
                        </div>



                    </div>
                </div>    



            </Layout>
        </>
    )
}