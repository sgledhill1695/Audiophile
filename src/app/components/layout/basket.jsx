import OrangeButton from "../reuseable/buttons/orangeButton";
import { useState, useContext, useEffect } from "react";
import { BasketContext } from "@/app/context/basketContext";

export default function Basket({openBasket}){

    const {basket} = useContext(BasketContext);

    const [itemsInBasket, setItemsInBasket] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {

        const itemsInLocalStorage = [];

        basket.map(b => {

            var trimProduct = b.product.replace(/headphones/gi, '');

            const itemInBasket = {
                id: b.id,
                product: trimProduct,
                price: b.price,
                productImage: b.productImage,
                quantity: 1
            };

            const existingItem = itemsInLocalStorage.find(item => item.id === b.id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                itemsInLocalStorage.push(itemInBasket);
            }
        });

        //console.log(itemsInLocalStorage)
        setItemsInBasket(itemsInLocalStorage);
        console.log(itemsInBasket)


    },[basket]);




    const handleDecrease = (id) => {

        const basketItems =[...itemsInBasket]


        basketItems.map(item => {

            if(item.id ===  id){

                if(item.quantity > 1){

                    item.quantity = item.quantity - 1

                };

            };
        });

        setItemsInBasket(basketItems);
    };


    const handleIncrease = (id) => {

        const basketItems = [...itemsInBasket]

        basketItems.map(item => {

            if (item.id === id) {

                item.quantity = item.quantity + 1;

            };
        });

        setItemsInBasket(basketItems);
    }


    //Calculate basket total
    useEffect(() => {

        let basketTotal = 0

        itemsInBasket.map(item => {

            if(item.quantity <= 1){

                basketTotal = basketTotal + item.price;

            } else if(item.quantity > 1){

                for(let i = 0; i < item.quantity; i++) {
                    basketTotal = basketTotal + item.price
                };
            };
            
            setTotal(basketTotal)

        });


    },[itemsInBasket])

    const handleRemoveAll = () => {

        localStorage.removeItem('basketItems');
        setItemsInBasket([]);
        setTotal(0)
    }


    return(
        <>
            <div className={`${openBasket ? 'block' : 'hidden'} fixed h-[100%] w-[100%] bg-[#00000071] overflow-hidden z-50`}>

                <div className='max-w-[1440px] m-auto'>
                    <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]">

                        <div className="relative">

                            <div className="bg-[white] w-[100%] sm:w-[377px] absolute right-0 top-5 flex flex-col p-[32px] rounded-[8px]">

                                <div className="flex justify-between">
                                    <p className="text-[#000] text-[1.12rem] tracking-[1.2px] font-bold">CART({itemsInBasket.length})</p>

                                    <button onClick={() => handleRemoveAll()} className="font-bold opacity-50 text-[0.93rem] underline hover:text-[#D87D4A]">Remove all</button>

                                </div>

                                <div className="mt-[31px]">

                                    <ul>
                                        {itemsInBasket.map(item => (
                                            <li className="flex justify-between mb-[24px] items-center">

                                                <div className="flex gap-[16px] items-center">
                                                    <img src={item.productImage} className="w-[64px] rounded-[8px]" />
                                                    <div className="flex flex-col">
                                                        <p className="text-[0.93rem] font-bold">{item.product}</p>
                                                        <p className="text-[0.87rem] font-bold opacity-50">£ {item.price}</p>
                                                    </div>
                                                </div>

                                                <div className="flex justify-between items-center h-[32px] w-[96px] bg-[#F1F1F1]">

                                                    <button onClick={() => handleDecrease(item.id)} className="addToBasket font-bold ps-[15px] pe-[15px] h-[100%] w-[1/3]">
                                                        <span className="opacity-50">-</span>
                                                    </button>

                                                    <div className="manrope font-bold justify-center items-center w-[1/3] ">
                                                        {item.quantity}
                                                    </div>

                                                    <button onClick={() => handleIncrease(item.id)} className="addToBasket font-bold pe-[15px] ps-[15px] h-[100%] w-[1/3]">
                                                        <span className="opacity-50">+</span>
                                                    </button>


                                                </div>

                                            </li>
                                        ))}
                                    </ul>

                                </div>




                                <div className="mt-[8px] flex justify-between">

                                    <p className=" text-[0.93rem] font-bold opacity-50">TOTAL</p>

                                    <p className="text-[1.12rem] font-bold">£ {total}</p>

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