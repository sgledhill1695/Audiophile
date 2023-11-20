import { useEffect, useState, useContext } from "react";
import { BasketContext } from "@/app/context/basketContext";
import currency from "currency.js";
import Link from "next/link";

export default function OrderConfirmation({formComplete}){

    //Set up formatting from currency.js
    const POUND = value => currency(value, { symbol: '', decimal: ',', separator: ',' });

    const [open, setOpen] = useState(false);

    const [grandTotal, setGrandTotal] = useState(0);

    const handleOpen = () => {

        open ? setOpen(false) : setOpen(true);

    };

    useEffect(() => {
        console.log(open)
    }, [open])

    const {basket} = useContext(BasketContext);

    const [itemsInBasket, setItemsInBasket] = useState([]);
    const [featuredItem, setFeaturedItem] = useState([]);
    const [otherItems, setOtherItems] = useState([]);

    useEffect(() => {

        if (basket.length > 0) {

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

                };
            });


            setItemsInBasket(itemsInLocalStorage);
            setFeaturedItem([itemsInLocalStorage[0]]);

            if(itemsInLocalStorage.length > 1){
                setOtherItems(itemsInLocalStorage.slice(1));
            };

        };


    }, [basket]);


    //Calculate checkout totals
    useEffect(() => {

        let basketTotal = 0;
        let vatAmount = 0;
        let vatTotal = 0;


        const vatSubtract = 80;

        itemsInBasket.map(item => {


            if (item.quantity <= 1) {


                basketTotal = basketTotal + item.price;

                const vat = item.price - (item.price * (vatSubtract / 100));

                vatAmount = vatTotal + vat;

            } else if (item.quantity > 1) {


                for (let i = 0; i < item.quantity; i++) {

                    basketTotal = basketTotal + item.price;
                    const vat = item.price - (item.price * (vatSubtract / 100));
                    vatAmount += vat;

                };

            };

            const calcGrandTotal = currency(basketTotal).add(vatAmount).add(50);

            setGrandTotal(POUND(calcGrandTotal).format());


        });


    }, [itemsInBasket])



    const closeList = {
        maxHeight: '0px',
        overflow: 'hidden',
        opacity: 0,
        transition: 'max-height 0.5s, opacity 0.3s'
    }

    const openList = {
        maxHeight: '700px',
        opacity: 1,
        transition: 'max-height 1s, opacity 1s'
    }


    

    return(
        <div className={`${formComplete ? 'block' : 'hidden'} fixed top-0 h-[100%] w-[100%] bg-[#00000071] overflow-hidden z-50 flex justify-center`}>

            <div className='max-w-[1440px] m-auto'>
                <div className="ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px] ">

                    <div className="max-w-[540px] lg:min-w-[540px] rounded-[8px] p-[48px] bg-[white]">

                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <circle cx="32" cy="32" r="32" fill="#D87D4A" />
                            <path d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812" stroke="white" stroke-width="4" />
                        </svg>

                        <h2 className="text-[1.5rem] sm:text-[2rem] font-bold leading-[36px] tracking-[1.1px] mt-[33px] max-w-[284px]">
                            THANK YOU
                            <br></br> 
                            FOR YOUR ORDER
                        </h2>

                        <p className="text-[0.9] opacity-50 mt-[24px]">You will receive an email confirmation shortly.</p>

                        <div className="mt-[33px] flex flex-col sm:flex-row">

                           
                           
                           
                           
                            <div className="bg-[#F1F1F1] ps-[35px] pt-[33px] pe-[24px] pb-[25px] rounded-tl-[8px] rounded-tr-[8px] sm:rounded-tr-[0px] sm:rounded-bl-[8px] lg:w-[60%]">

                                <div className="border-b-[1px] border-[#0000001b] ">

                                    <div className="flex justify-between gap-[20px]">
                                        {featuredItem.map(item => (
                                            <>

                                                <img src={item.productImage}  className="max-w-[50px]"/>
        
                                                <div className="flex flex-col items-start pe-[50px] sm:pe-[10px]">
        
                                                    <p className="font-bold text-[0.9rem]">{item.product}</p>
        
                                                    <p className="text-[0.87rem] font-bold opacity-50">{item.price}</p>
        
                                                </div>
        
                                                <div className="opacity-50 text-[0.93rem] font-bold">x{item.quantity}</div>

                                            </>

                                        ))}
                                    </div>

                                    <div className="pt-[16px] max-h-[0px]" style={open ? openList : closeList}>
                                        {otherItems.map(item => (

                                            <div className="flex justify-between ">

                                                <img src={item.productImage}  className="max-w-[50px]"/>
        
                                                <div className="flex flex-col items-start pe-[50px] sm:pe-[10px]">
        
                                                    <p className="font-bold text-[0.9rem]">{item.product}</p>
        
                                                    <p className="text-[0.87rem] font-bold opacity-50">{item.price}</p>
        
                                                </div>
        
                                                <div className="opacity-50 text-[0.93rem] font-bold">x{item.quantity}</div>

                                            </div>
                                        ))}
                                    </div>

                                </div>

                                {otherItems.length > 0 && open ? (

                                    <p onClick={() => handleOpen()} className="text-[0.75rem] opacity-50 flex justify-center pt-4 cursor-pointer">View less</p>
                            
                                ) : (

                                    <p onClick={() => handleOpen()} className="text-[0.75rem] opacity-50 flex justify-center pt-4 cursor-pointer">and {otherItems.length} other item(s)</p>
 
                                )}

                            </div>






                            <div className="bg-[black] rounded-br-[8px] rounded-bl-[8px] sm:rounded-bl-[0px] sm:rounded-tr-[8px]  ps-[32px] pe-[32px]  pt-[15px] pb-[20px] sm:pb-[40px]  flex flex-col justify-end sm:w-[40%]">

                                <p className="text-[0.93rem] text-[#ffffff80]">GRAND TOTAL</p>

                                <p className="text-[white] text-[1.1rem] font-bold pt-[8px] sm:pt-[0px]">£ {grandTotal}</p>

                            </div>

                        </div>


                        <Link href="/">
                             <button type="submit" className="bg-[#D87D4A] hover:bg-[#FBAF85] py-[15px] text-[white] w-[100%] mt-[47px] text-[0.81rem] font-bold tracking-[1px]">
                                 BACK TO HOME
                             </button>
                        </Link>


                    </div>


                
                </div>
            </div>



        </div>
    )
}