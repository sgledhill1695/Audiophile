import { useContext, useState } from "react";
import { BasketContext } from "@/app/context/basketContext";


export default function addToCart({title, productPrice, image}){

    const basket = useContext(BasketContext);

    const handleAddToBasket = () => {

        let productsToAdd = [];


        if(localStorage.getItem("basketItems")){

            productsToAdd = JSON.parse(localStorage.getItem("basketItems"))


        }

        console.log(productsToAdd);


        productsToAdd.push({
            product: title,
            price: productPrice,
            quantity: 1,
            productImage: image
        });

        console.log(productsToAdd);

        localStorage.setItem("basketItems", JSON.stringify(productsToAdd));

        basket.setBasket(productsToAdd);

        
    }

    return(
        <>

            <div className="flex gap-[16px]">

                <div className="flex justify-between items-center h-[55px] w-[120px] bg-[#F1F1F1]">

                    <button className="ps-[15px] pe-[15px] h-[100%] w-[1/3]">
                        <span className="opacity-50">-</span>
                    </button>

                   <div className="manrope justify-center items-center w-[1/3] ">
                        1
                    </div>

                   <button className="pe-[15px] ps-[15px] h-[100%] w-[1/3]">
                       <span className="opacity-50">+</span>
                    </button>


                </div>


                <button onClick={() => handleAddToBasket()} className='px-[31.5px] py-[15px]  brand-orange-background hover:bg-[#FBAF85] text-white manrope-semibold text-[0.8rems]'>ADD TO CART</button>

             </div>

             <div>
                


             </div>
             </>
    )
}