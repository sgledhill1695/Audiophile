import Link from "next/link";
import styles from './category.module.css';


export default function Category({imageSource, url, title}){

    return(
        <>

            <Link href={url} className="grow shrink  w-[100%]">

                <button className={`${styles.category} bg-[#F1F1F1] w-[100%] flex flex-col items-center justify-end relative h-[165px]  rounded-[8px] grow shrink`}>
    
                    <img src={imageSource} className="absolute top-[-40px]" width="138px" ></img>
    
                    <h2 className="manrope-title text-[0.9rem] font-bold tracking-[1px]">{title}</h2>
    
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