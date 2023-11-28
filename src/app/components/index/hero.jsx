import styles from './index.module.css';
import OrangeButton from '../reuseable/buttons/orangeButton';
import 'animate.css';


export default function Hero(){

    return(
        <>

            <div className={`${styles.hero}`}>
    
                <div className='max-w-[1440px] m-auto'>
        
                    <div className='ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]'>
        
                        <div className={`h-[510px] sm:h-[833px] flex flex-col items-center lg:items-start justify-center animate__animated animate__fadeIn`}>


                            <div className={`${styles.heroNew} manrope-reg text-[#FFF] opacity-100 lg:opacity-50`}>NEW PRODUCT</div>

                            <h1 className='manrope-title text-white text-[36px] sm:text-[56px] lg:text-[56px] leading-[40px] sm:leading-[58px] mt-[24px] font-bold text-center lg:text-left max-w-[328px] sm:max-w-[396px]'>XX99 MARK II HEADPHONES</h1>

                            <p className='mt-[24px] text-white manrope-reg leading-[25px] font-medium text-[9rems] opacity-75 text-center lg:text-start max-w-[328px] sm:max-w-[389px] mb-[28px] sm:mb-[40px]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

                            <OrangeButton
                                href="product/xx9-mark-ii-headphones"
                                title="SEE PRODUCT"
                            />

                        </div>
        
                    </div>
        
                </div>  
    
            </div>

        </>
    )
}