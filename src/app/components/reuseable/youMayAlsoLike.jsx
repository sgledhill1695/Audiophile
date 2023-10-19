import OrangeButton from "./buttons/orangeButton"

export default function YouMayAlsoLike({mobileImage, tabletImage, desktopImage, productTitle, productUrl}){

    return(
        <>
            <div className="flex flex-col items-center">

                <img className="rounded-[8px] md:hidden w-[100%] " src={mobileImage}></img>

                <img className="rounded-[8px] hidden md:flex lg:hidden w-[100%] max-w-[232px]" src={tabletImage}></img>

                <img className="rounded-[8px] hidden lg:flex w-[100%] max-w-[350px]" src={desktopImage}></img>

                <h4 className="mt-[40px] text-[1.5rem] text-center font-bold tracking-[1.7px]">{productTitle}</h4>

                <div className="mt-[32px]">

                    <OrangeButton
                        title={'SEE PRODUCT'}
                        href={productUrl}
                    />

                </div>


            </div>



        </>
    )
}