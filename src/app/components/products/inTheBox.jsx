export default function InTheBox({items}){

    return(
        <>

            <div className="flex flex-col sm:flex-row lg:flex-col sm:gap-[35%]">

                <h2 className="manrope-semibold text-[1.5rem] sm:text-[2rem] tracking-[1.1px]">IN THE BOX</h2>

                <ul className="mt-[24px] sm:mt-[0px] lg:mt-[32px] sm:self-start">
                    {items.map((item, index) => (
                        <>
                            <li key={index} className="flex gap-[24px] pb-[8px]">

                                <span className="text-[#D87D4A] font-bold ">
                                    {item.quantity}x
                                </span>

                                <span className="opacity-50">
                                    {item.item}
                                </span>
                                
                            </li>
                        </>
                    ))}



                </ul>


            </div>

        
        </>
    )
}