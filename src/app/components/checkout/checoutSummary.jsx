import { useContext } from "react";
import { BasketContext } from "@/app/context/basketContext";

export default function checkoutSummary(){

    const {basket} = useContext(BasketContext);

    return(
        <>
            <div className="bg-[white] px-[32px] py-[32px] rounded-[8px] mb-[141px] text-[1.2rem]">

                <h5 className="font-bold tracking-[1.2px]">SUMMARY</h5>

                <ul className="flex flex-col">
                    {basket.map(item => (
                        <li key={item.id}>
                            {item.product}


                        </li>
                        
                    ))}


                </ul>

            </div>
        </>
    )
}