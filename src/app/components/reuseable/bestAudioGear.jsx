export default function BestAudioGear(){

    return(
        <>
            <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-[120px] lg:gap-[20px]">
    
                <img className="bg-[url(/assets/shared/mobile/image-best-gear.jpg)] sm:bg-[url(/assets/shared/tablet/image-best-gear.jpg)] lg:sm:bg-[url(/assets/shared/desktop/image-best-gear.jpg)] bg-center bg-cover bg-no-repeat h-[300px] lg:h-[588px] w-[100%] lg:w-[540px] rounded-[8px] lg:order-2"></img>

                <div className="flex flex-col mt-[50px] w-[327px] sm:w-[580px] lg:w-[480px] lg:order-1">
    
                    <h3 className='manrope-title text-[1.75rem] sm:text-[2.5rem] sm:leading-[44px] font-bold text-center lg:text-start '>BRINGING YOU THE <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR</h3>

                    <p className="text-center lg:text-start mt-[32px] text-[#000] opacity-50 text-[0.93]">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
    
                </div>
            </div>
        
        </>
    )
}