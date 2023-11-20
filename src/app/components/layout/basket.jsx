import OrangeButton from "../reuseable/buttons/orangeButton";
import { useState, useContext, useEffect, useRef } from "react";
import { BasketContext } from "@/app/context/basketContext";
import { useRouter } from "next/router";

export default function Basket({openBasket, setOpenBasket}){

    const router = useRouter();

    const {basket, setBasket} = useContext(BasketContext);

    const [itemsInBasket, setItemsInBasket] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {

        if(basket.length > 0) {

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

        };

    },[basket]);




    const handleDecrease = (id) => {

        const basketItems = [...itemsInBasket];

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

        const basketItems = [...itemsInBasket];

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


    },[itemsInBasket]);

    const handleRemoveAll = () => {

        localStorage.removeItem('basketItems');
        setBasket([]);
        setItemsInBasket([]);
        setTotal(0);
    };

    const handleCheckout = () => {

        const itemsForLocalStorage = [];

        itemsInBasket.map(basketItem => {

            for(let i = 0; i < basketItem.quantity; i++ ){

                const itemToAddToLocalStorage = {
                    id: basketItem.id,
                    product: basketItem.product,
                    price: basketItem.price,
                    productImage: basketItem.productImage
                };

                itemsForLocalStorage.push(itemToAddToLocalStorage);
               
            };


        });

        localStorage.removeItem("basketItems");
        localStorage.setItem("basketItems", JSON.stringify(itemsForLocalStorage));
        document.body.classList.remove('overflow-hidden');

        if (router.pathname === '/checkout') {

            router.reload();

        } else {

            router.push('/checkout');

        };    
    };









    //Handle closing the basket depending on where the user clicks
    const basketRef = useRef(null);

    useEffect(() => {

        const handler = (e) => {

            if(basketRef.current){

                if (!basketRef.current.contains(e.target)) {
                    setOpenBasket(false);
                    document.body.classList.remove('overflow-hidden');
                }

            }

        };

        document.addEventListener("mousedown", handler);

    }, [basket]);

    const openMain = {
        visibility: "visible",
        opacity: "1",
        backgroundColor: "#00000071",
        transition: "visibility 0s, background-color 0.2s linear"
    };

    const closeMain = {
        visibility: "hidden",
        opacity: 0,
        transition: "visibility 0s, background-color 0.2s ease-out"
    };

    const openBask = {
        opacity: "1",
        transition: "opacity 0.2s ease-in 0.1s",
    };

    const closeBask = {
        opacity: "0",
        transition: "opacity 0.2s",
    };




    return(
        <>
            <div className={`fixed h-[100%] w-[100%]  overflow-hidden z-50`} style={openBasket ? openMain : closeMain}>

                <div className='max-w-[1440px] m-auto'>
                    <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px]">

                        <div className="relative">

                            <div className="bg-[white] w-[100%] sm:w-[377px] absolute right-0 top-5 flex flex-col p-[32px] rounded-[8px]" ref={basketRef} style={openBasket ? openBask : closeBask}>

                                {basket.length > 0 ? (
                                    <>
                                    
                                        <div className="flex justify-between">
                                            <p className="text-[#000] text-[1.12rem] tracking-[1.2px] font-bold">CART({basket.length})</p>
                                    
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
                                                
                                            <button onClick={handleCheckout} className="bg-[#D87D4A] hover:bg-[#FBAF85] py-[15px] w-[100%] text-white">CHECKOUT</button>
                                                
                                        </div>

                                    </>

                                ) : (

                                        <>
                                            <div className="flex flex-col justify-center items-center gap-[10px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-[#D87D4A]" height="3em" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32h-411C111 12.8 91.6 0 69.5 0H24zM131.1 80H520.7L482.4 222.2c-2.8 10.5-12.3 17.8-23.2 17.8H161.6L131.1 80zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" /></svg>  
                                                <p className="text-[0.9rem]">Your cart is currently empty</p>
                                            </div>
                                        </>
                                )}

                            

                            </div>

                        </div>

                    </div>   
                </div>    

            </div>
        
        </>
    )
}