import Category from "./category";

export default function ShopCategory(){

    return(
        <>

            <div className="flex flex-col md:flex-row items-center mt-[100px] md:mt-[150px] lg:mt-[200px] gap-[68px] md:gap-[10px] lg:gap-[30px] md:justify-center">
    
                <Category 
                    imageSource={"/assets/shared/desktop/image-category-thumbnail-headphones.png"} 
                    url={"/"}
                />

                <Category
                    imageSource={"/assets/shared/desktop/image-category-thumbnail-speakers.png"}
                    url={"/"}
                />

                <Category
                    imageSource={"/assets/shared/desktop/image-category-thumbnail-earphones.png"}
                    url={"/"}
                />

    
            </div>











                {/* HEADPHONES */}
{/*                 <div className="flex flex-col items-center  mt-[90px] md:mb-[40px] bg-[#F1F1F1] ps-[109px] pe-[109px] pt-[88px] pb-[22px] rounded-[8px] relative grow shrink w-[327px] md:w[223px] lg:max-w-[350px] h-[165px]">
        
                    <img src="/assets/shared/desktop/image-category-thumbnail-headphones.png" className="absolute top-[-55px]" width="138px" ></img>
        
        
                    <div className="flex flex-col justify-center">
        
                        <h2 className="manrope-title text-[15px] font-bold tracking-[1px]">HEADPHONES</h2>
        
                        <div className="text-center manrope-title text-[13px] font-bold tracking-[1px] opacity-50 flex justify-center items-center gap-3 mt-[17px]">
        
                            SHOP
        
                            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                                <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" strokeWidth="2" />
                            </svg>
        
                        </div>
        
                    </div>
        
                </div>
    
 */}    
            {/* SPEAKERS */}
    
    
            {/* EARPHONES */}

        </>
    )
}