import OrangeButton from "../reuseable/buttons/orangeButton";
import { useState, useContext } from "react";
import { BasketContext } from "@/app/context/basketContext";

export default function Basket({openBasket}){

    const {basket} = useContext(BasketContext);

    console.log(basket)




    return(
        <>
            <div className={`${openBasket ? 'block' : 'hidden'} fixed h-[100%] w-[100%] bg-[#00000071] overflow-hidden z-50`}>

                <div className='max-w-[1440px] m-auto'>
                    <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]">

                        <div className="relative">

                            <div className="bg-[white] w-[377px] absolute right-0 top-5 flex flex-col p-[32px] rounded-[8px]">

                                <div className="flex justify-between">
                                    <p className="text-[#000] text-[1.12rem] tracking-[1.2px] font-bold">CART({basket.length})</p>

                                    <p className="font-bold opacity-50 text-[0.93rem]">Remove all</p>

                                </div>

                                <p className="mt-[43px]">PRODUCTS HERE</p>



                                <div className="mt-[32px] flex justify-between">

                                    <p className=" text-[0.93rem] font-bold opacity-50">TOTAL</p>

                                    <p className="text-[1.12rem] font-bold">£ PRICE</p>



                                </div>

                                <div className="mt-[24px]">

                                    <button className="bg-[#D87D4A] hover:bg-[#FBAF85] py-[15px] w-[100%] text-white">CHECKOUT</button>


                                </div>





                            </div>

                        </div>

                    </div>   
                </div>    

            </div>
        
        </>
    )
}