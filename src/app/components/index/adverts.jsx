import styles from './index.module.css'

export default function Adverts(){

    return(
        <>
           {/* ZX9 */}
            <div className="bg-[#D87D4A] rounded-[8px] mt-[120px] mb-[50px] overflow-hidden lg:h-[560px] ">

                

                <div className={`${styles.circles} flex flex-col items-center lg:flex-row lg:justify-center lg:pt-[96px] lg:gap-[20px] xl:gap-[138px]`}>

                    {/* Small image */}
                    <img src='/assets/home/tablet/image-speaker-zx9.png'  className='mt-[55px] w-[120px] md:w-[200px] lg:hidden'></img>
                    
                    {/* Lrg image */}
                    <img src='/assets/home/desktop/image-speaker-zx9.png' className='w-[410px] hidden lg:flex '></img>









                    <div className='flex flex-col items-center lg:items-start'>

                        <h3 className='manrope-title text-white text-[36px] md:text-[56px] leading-[40px] md:leading-[58px] max-w-[230px] text-center mt-[32px] lg:text-start'>ZX9 SPEAKER</h3>
    
                        <p className='manrope-reg text-white text-center text-[15px] mt-[24px] max-w-[349px] lg:text-start'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
    
                        <button className='mt-[24px] manrope-reg text-white bg-black px-[31px] py-[15px] text-[13px] tracking-[1px] font-bold mb-[55px]'>SEE PRODUCT</button>

                    </div>
    
                </div>





           </div>
        
        </>
    )
}