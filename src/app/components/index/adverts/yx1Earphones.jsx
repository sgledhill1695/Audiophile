import OutlineButton from "../../reuseable/buttons/outlineButton"

export default function Yx1Earphones(){

    return(
        <>
            <div className="flex flex-col sm:flex-row items-center  mt-[55px] gap-[55px] sm:gap-[15px]">

                <img className="h-[320px] w-[100%] bg-[url(/assets/home/mobile/image-earphones-yx1.jpg)] sm:bg-[url(/assets/home/tablet/image-earphones-yx1.jpg)] lg:bg-[url(/assets/home/desktop/image-earphones-yx1.jpg)] bg-center bg-cover bg-no-repeat rounded-[8px]"></img>



                <div className="h-[320px] w-[100%] rounded-[8px] bg-[#F1F1F1]  flex flex-col justify-center gap-[32px] ps-[24px]">

                    <h3 className='manrope-title text-[1.75rem] font-bold'>YX1 EARPHONES</h3>

                    <OutlineButton
                        href={'product/yx1-wireless-earphones'}
                        title={'SEE PRODUCT'}
                    />

                </div>

            </div>
        </>
    )
}