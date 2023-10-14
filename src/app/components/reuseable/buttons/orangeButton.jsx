import Link from "next/link";

export default function orangeButton({href, title}){

    return(
        <>
            <Link href={href}>
                <button className='px-[31.5px] py-[15px] brand-orange-background hover:bg-[#FBAF85] text-white manrope-semibold text-[0.8rems]'>{title}</button>
            </Link>
        </>
    )
}