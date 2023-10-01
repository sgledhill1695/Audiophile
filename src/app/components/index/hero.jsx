import styles from './index.module.css';

export default function Hero(){

    return(
        <>
            <div className={`${styles.hero}`}>

                <div className='ps-[11%] pe-[11%] pt-[35px] pb-[36px] h-[90vh] lg:h-[90vh] xl:h-[90vh] 2xl:h-[95vh]  flex items-center justify-center lg:justify-start'>

                <div className='flex flex-col items-center lg:items-start  lg:pt-[171px] lg:pb-[158px] sm:max-w-[380px]  lg:max-w-[398px]'>

                    <div className={`${styles.heroNew} manrope-reg text-[#FFF] opacity-100 lg:opacity-50`}>NEW PRODUCT</div>

                    <h1 className='manrope-title text-white text-[46px] sm:text-[56px] lg:text-[56px] leading-[40px] sm:leading-[58px] mt-[24px] font-bold text-center lg:text-left'>XX99 MARK II HEADPHONES</h1>

                    <p className='mt-[24px] text-white manrope-reg leading-[25px] font-medium text-[15px] opacity-75 text-center lg:text-start max-w-[349px]'>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>

                    <button className='mt-[24px] px-[31.5px] py-[15px] brand-orange-background text-white manrope-semibold text-[13px]'>SEE PRODUCT</button>

                </div>

            </div>

        </div>
        
        </>
    )
}