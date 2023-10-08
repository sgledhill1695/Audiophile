import Link from "next/link";

export default function outlineButton({href, title}){

    return(
        <>
            <Link href={href}>
                <button className='border-[1px] border-[black] hover:bg-[black] hover:text-white inline-block w-[160px] py-[15px] text-[0.83rem] font-bold tracking-[1px]'>{title}</button>
            </Link>
        </>
    )
}