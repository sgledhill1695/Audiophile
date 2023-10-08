import Link from "next/link";
import styles from './category.module.css';


export default function Category({imageSource, url}){

    return(
        <>

            <Link href={url}>

                <button className={`${styles.category} bg-[#F1F1F1] w-[327px] md:w-[223px] md:min-w-[223px] lg:w-[350px] lg:max-w-[350px] h-[165px] flex flex-col items-center justify-end relative  rounded-[8px]`}>
    
                    <img src={imageSource} className="absolute top-[-40px]" width="138px" ></img>
    
                    <h2 className="manrope-title text-[0.9rem] font-bold tracking-[1px]">HEADPHONES</h2>
    
                    <div className="text-center manrope-title text-[0.8rem] font-bold tracking-[1px] opacity-50 flex justify-center items-center gap-3 mt-[17px] mb-[22px]">
    
                        <p className={styles.shopLink}> SHOP </p>
    
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
                            <path d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" strokeWidth="2" />
                        </svg>
    
                    </div>
    
                </button>

            </Link>
        
        </>
    )
}