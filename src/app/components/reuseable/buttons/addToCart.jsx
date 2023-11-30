import { useContext, useState, useEffect } from "react";
import { BasketContext } from "@/app/context/basketContext";
import { NotificationContext } from "@/app/context/notificationContext";
import currency from "currency.js";


export default function addToCart({title, productPrice, image, id}){

    const { displayed, setDisplayed } = useContext(NotificationContext);

    const {basket, setBasket} = useContext(BasketContext);

    let [quantity, setQuantity] = useState(1);

    const handleAddToBasket = (id) => {

        const POUND = value => currency(value, { symbol: '', decimal: '.', separator: ',', precision: 0 });


        let productsToAddToLocal = [];

        const itemsRetrievedFromLocalStorage = JSON.parse(localStorage.getItem("basketItems"));


        if(itemsRetrievedFromLocalStorage){

            const itemsForLocal = [...itemsRetrievedFromLocalStorage];

            const itemForLocal = {
                id: id,
                product: title,
                price: productPrice,
                productImage: image,
            };



            for (let i = 0; i < quantity; i++) {
                itemsForLocal.push(itemForLocal);
            };

            localStorage.setItem("basketItems", JSON.stringify(itemsForLocal));


            const newState = [];

            itemsForLocal.map(localItem => {

                var trimTitle = localItem.product.replace(/headphones|speaker|wireless earphones/gi, '');


                const itemInBasket = {
                    id: localItem.id,
                    product: trimTitle,
                    price: localItem.price,
                    productImage: localItem.productImage,
                    quantity: 1
                };


                const existingItem = newState.find(item => item.id === localItem.id);

                if(existingItem){
                    existingItem.quantity++;
                } else {
                    newState.push(itemInBasket);
                }

            });

            let total = 0;
            let totalItems = 0;

            newState.map(item => {

                for (let i = 0; i < item.quantity; i++) {

                    total = currency(total).add(item.price)
                    totalItems = totalItems + 1;

                };
            });

            setBasket({
                items: newState,
                total: POUND(total).format(),
                totalItems: totalItems
            });


        } else {

           
            const itemsForLocal = [];
            const itemsForState = [];

            const itemForLocal = {
                id: id,
                product: title.replace(/headphones|speaker|wireless earphones/gi, ''),
                price: productPrice,
                productImage: image,
            };

            for (let i = 0; i < quantity; i++) {
                itemsForLocal.push(itemForLocal);
            };

            itemForLocal.quantity = 0


            for (let i = 0; i < quantity; i++) {
                itemForLocal.quantity++ 
            };

            console.log(itemForLocal);
            console.log(itemsForLocal);

            itemsForState.push(itemForLocal);

            localStorage.setItem("basketItems", JSON.stringify(itemsForLocal));


            let total = 0;
            let totalItems = 0;

            itemsForState.map(item => {

                for (let i = 0; i < item.quantity; i++) {

                    total = currency(total).add(item.price);
                    totalItems = totalItems + 1;

                };
            });

            setBasket({
                items: itemsForState,
                total: POUND(total).format(),
                totalItems: totalItems
            });

        }

        setDisplayed(true);

    };




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