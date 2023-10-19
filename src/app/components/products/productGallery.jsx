export default function ProductGallery({mainImage, topLeftImage, bottomLeftImage}){

    return(
        <>
            <div className="grid grid-rows-2 grid-cols-6">

                <div className="col-span-2 row-span-1">
                    <img className="rounded-[8px]" src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"/>
                </div>

                <div className="col-span-3 row-span-2">
                    <img className="rounded-[8px] h-[100%]" src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg" />
                </div>




                <div className="col-span-2 row-span-1">
                    <img className="rounded-[8px] w-[445px]" src="/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"/>
                </div>




            </div>



        
        </>
    )


}