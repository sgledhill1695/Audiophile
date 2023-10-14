import OrangeButton from "./buttons/orangeButton";
import AddToCart from "./buttons/addToCart";

export default function ProductDetail({desktopImage, tabletImage, newProduct, title, description, href, productPrice }) {

    return (
        <>
            <div className="flex flex-col sm:flex-row items-center lg:gap-[30px] xl:gap-[60px] 2xl:gap-[125px]">


               
                {/* DESKTOP IMAGE */}
                <img src={desktopImage} className={`flex sm:hidden lg:flex rounded-[8px] lg:w-1/2 lg:min-w-[350px]`}></img>

                {/* TABLET IMAGE */}
                <img src={tabletImage} className={`hidden sm:flex lg:hidden rounded-[8px] w-1/2 lg:min-w-[350px]`}></img>




                <div className="flex flex-col  lg:items-start gap-[24px] mt-[32px] ">

                    {newProduct && (
                        <p className="manrope-reg text-[#D87D4A] text-start text-[0.875rem] tracking-[10px]">NEW PRODUCT</p>
                    )}


                    <h2 className="product-title text-start w-[285px] sm:w-[400px] lg:w-[300px] sm:leading-[44px]">{title}</h2>

                    <p className="text-start opacity-50  max-w-[527px]">{description}</p>

                    <p className="manrope-semibold font-bold text-[1.12rem] tracking-[1.2px]">£ {productPrice}</p>

                    <div>

                        

                        <AddToCart/>


                    </div>


                </div>

            </div>

        </>
    )
}