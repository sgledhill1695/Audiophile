import Link from "next/link";

export default function BlackButton({href, title}){

    return(
        <>
            <Link href={href}>
                <button className='mt-[24px] md:mt-[55px] manrope-reg text-white bg-black hover:bg-[#4C4C4C] px-[31px] py-[15px] text-[13px] tracking-[1px] font-bold mb-[55px]'>{title}</button>
            </Link>
        </>
    )
}