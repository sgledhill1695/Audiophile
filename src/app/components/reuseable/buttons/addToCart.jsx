import { useContext, useState, useEffect } from "react";
import { BasketContext } from "@/app/context/basketContext";


export default function addToCart({title, productPrice, image, id}){

    const basket = useContext(BasketContext);

    let [quantity, setQuantity] = useState(1);

    const handleAddToBasket = (id) => {

        let productsToAdd = [];

        //If any items already in basket add to new array
        if(basket.basket.length > 0){

            basket.basket.map(basket => {

                productsToAdd.push(basket);

            });
        }

        //Loop through qunaity added
        for(let i = 0; i < quantity; i++){

            productsToAdd.push({

                id: id,
                product: title,
                price: productPrice,
                productImage: image

            });

        }

        setQuantity(1);

        localStorage.setItem("basketItems", JSON.stringify(productsToAdd));

        basket.setBasket(productsToAdd);
    }

    const handleDecrease = () => {

        quantity === 1 ? setQuantity(1) : setQuantity(quantity -1);

    }

    return(
        <>

            <div className="flex gap-[16px]">

                <div className="flex justify-between items-center h-[55px] w-[120px] bg-[#F1F1F1]">

                    <button onClick={() => handleDecrease()} className="addToBasket font-bold ps-[15px] pe-[15px] h-[100%] w-[1/3]">
                        <span className="opacity-50">-</span>
                    </button>

                   <div className="manrope font-bold justify-center items-center w-[1/3] ">
                        {quantity}
                    </div>

                    <button onClick={() => setQuantity(quantity + 1)} className="addToBasket font-bold pe-[15px] ps-[15px] h-[100%] w-[1/3]">
                       <span className="opacity-50">+</span>
                    </button>


                </div>


                <button onClick={() => handleAddToBasket(id)} className='px-[31.5px] py-[15px]  brand-orange-background hover:bg-[#FBAF85] text-white manrope-semibold text-[0.8rems]'>ADD TO CART</button>

             </div>

             <div>
                


             </div>
             </>
    )
}