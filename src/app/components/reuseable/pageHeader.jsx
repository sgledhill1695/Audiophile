export default function PageHeader({title}){
    return(
        <>
            <div className="bg-[#141414] h-[110px] sm:h-[210px] lg:h-[196px] flex items-center justify-center sm:mb-[120px] lg:mb-[160px]">

                <h1 className="page-headers">{title}</h1>


            </div>
        
        </>
    )
}