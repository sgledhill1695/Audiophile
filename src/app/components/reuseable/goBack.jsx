import Link from "next/link";

export default function goBack({link}){

    return(
        <>
            <Link href={{link}}>
                <p className="text-[0.93rem] text-[#000] opacity-50">Go Back</p>
            </Link>
        </>
    )
}