import OrangeButton from "./buttons/orangeButton"

export default function Product({alignRight, image, newProduct, title, description, href}){

    return(
        <>
            <div className="flex flex-col lg:flex-row items-center lg:gap-[30px] xl:gap-[60px] 2xl:gap-[125px]">

                <img src={image} className={`${alignRight ? 'lg:order-2' : ''} rounded-[8px] sm:max-w-[70%] lg:w-1/2 lg:min-w-[350px]`}></img>

                <div className="flex flex-col items-center lg:items-start gap-[24px] mt-[32px] ">

                    {newProduct && (
                        <p className="manrope-reg text-[#D87D4A] lg:text-start text-[0.875rem] tracking-[10px]">NEW PRODUCT</p>
                    )}


                    <h2 className="product-title text-center lg:text-start w-[285px] sm:w-[400px] lg:w-[300px] sm:leading-[44px]">{title}</h2>

                    <p className="text-center lg:text-start opacity-50  max-w-[527px]">{description}</p>

                    <OrangeButton
                       href={href}
                       title={'SEE PRODUCT'}
                    />

                </div>

            </div>
        
        </>
    )
}