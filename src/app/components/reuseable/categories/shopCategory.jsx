import Category from "./category";

export default function ShopCategory(){


    

    return(
        <>

            <div className="flex flex-col md:flex-row items-center mt-[100px] md:mt-[150px] lg:mt-[200px] gap-[68px] md:gap-[10px] lg:gap-[30px] md:justify-center wrap">
    
                <Category 
                    imageSource={"/assets/shared/desktop/image-category-thumbnail-headphones.png"}
                    title={'HEADPHONES'}
                    url={"/category/headphones"}
                />

                <Category
                    imageSource={"/assets/shared/desktop/image-category-thumbnail-speakers.png"}
                    title={'SPEAKERS'}
                    url={"/category/speakers"}
                />

                <Category
                    imageSource={"/assets/shared/desktop/image-category-thumbnail-earphones.png"}
                    title={'EARPHONES'}
                    url={"/category/earphones"}
                />

    
            </div>
        </>
    )
}