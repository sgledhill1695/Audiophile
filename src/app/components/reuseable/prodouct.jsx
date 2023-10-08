import OrangeButton from "./buttons/orangeButton"

export default function Product({img, newProduct, title, description, href}){

    return(
        <>
            <div className="flex flex-col lg:flex-row items-center lg:gap-[125px]">

                <img src="/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg" className="rounded-[8px] w-[100%]"></img>

                <div className="flex flex-col items-center lg:items-start gap-[24px] mt-[32px] ">

                    <p className="manrope-reg text-[#D87D4A] lg:text-start text-[0.875rem] tracking-[10px]">NEW PRODUCT</p>

                    <h2 className="product-title text-center lg:text-start w-[327px] sm:w-[527px]">XX99 MARK II HEADPHONES</h2>

                    <p className="text-center lg:text-start opacity-50 w-[327px] sm:w-[527px]">The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>

                    <OrangeButton
                       href={'/'}
                       title={'SEE PRODUCT'}
                    />

                </div>






            </div>
        
        </>
    )
}