export default function ProductGallery({image}){

    console.log(image)

    return(
        <>
            <div className="grid grid-col-1 sm:grid-rows-2 sm:grid-cols-3 gap-[20px]">

                <div className={`col-span-1 row-span-1 h-[175px] sm:h-auto bg-[url('/assets/${image}/desktop/image-gallery-1.jpg')] bg-no-repeat bg-center bg-cover rounded-[8px]`}>
                </div>

                <div className={`hidden sm:flex col-span-1 sm:col-span-2 row-span-2 h-[368px] sm:h-[592px] bg-[url('/assets/${image}/desktop/image-gallery-3.jpg')] bg-no-repeat bg-center bg-cover rounded-[8px]`}>
                </div>


                <div className={`col-span-1 h-[175px] sm:h-auto row-span-1 bg-[url('/assets/${image}/desktop/image-gallery-2.jpg')] bg-no-repeat bg-center bg-cover rounded-[8px]`}>
                </div>

                <div className={`sm:hidden col-span-1 sm:col-span-2 row-span-2 h-[368px] sm:h-[592px] bg-[url('/assets/${image}/desktop/image-gallery-3.jpg')] bg-no-repeat bg-center bg-cover rounded-[8px]`}>
                </div>

            </div>



        
        </>
    )


}