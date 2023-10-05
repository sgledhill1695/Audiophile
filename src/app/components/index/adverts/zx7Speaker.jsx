import styles from '../index.module.css';

export default function Zx7Speaker(){

    return(
        <>
            <div className={`bg-[url(/assets/home/mobile/image-speaker-zx7.jpg)] md:bg-[url(/assets/home/tablet/image-speaker-zx7.jpg)] lg:bg-[url(/assets/home/desktop/image-speaker-zx7.jpg)] bg-center bg-cover bg-no-repeat h-[320px] flex flex-col justify-center gap-[32px] ps-[25px] md:ps-[62px] rounded-[8px]`}>

                <h3 className='manrope-title text-[1.75rem] font-bold'>ZX7 SPEAKER</h3>

                <button className='border-[1px] border-[black] inline-block w-[160px] py-[15px] text-[0.83rem] font-bold tracking-[1px]'>SEE PRODUCT</button>


            </div>
        </>
    )
}