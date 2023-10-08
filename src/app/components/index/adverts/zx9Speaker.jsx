import styles from '../index.module.css';
import BlackButton from '../../reuseable/buttons/blackButton';

export default function Zx9Speaker(){

    return(
        <>
            {/* ZX9 */}



                <div className="bg-[#D87D4A] rounded-[8px] mt-[120px] md:mt-[96px] lg:mt-[168px] mb-[50px] overflow-hidden  h-[600px] md:h-[720px] lg:h-[560px]">
    
                    <div className={`${styles.circles} flex flex-col items-center lg:flex-row lg:justify-center lg:pt-[96px] lg:gap-[20px] xl:gap-[138px]`}>
    
                        {/* Small image */}
                        <img src='/assets/home/tablet/image-speaker-zx9.png' className='mt-[55px] md:mt-[52px] w-[120px] md:w-[200px] lg:hidden'></img>
    
                        {/* Lrg image */}
                        <img src='/assets/home/desktop/image-speaker-zx9.png' className='w-[410px] hidden lg:flex '></img>
    
                        <div className='flex flex-col items-center lg:items-start'>
    
                            <h3 className='manrope-title text-white text-[36px] md:text-[56px] leading-[40px] md:leading-[58px] max-w-[230px] text-center mt-[35px] md:mt-[64px] lg:mt-[0px] lg:text-start'>ZX9 SPEAKER</h3>
    
                            <p className='manrope-reg text-white text-center text-[15px] mt-[24px] max-w-[349px] lg:text-start'>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>

                            <BlackButton
                                href={'/'}
                                title={'SEE PRODUCT'}
                            />
    
                        </div>
    
                    </div>
    
                </div>



        </>
    )
}