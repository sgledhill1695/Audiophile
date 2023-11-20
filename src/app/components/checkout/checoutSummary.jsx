import { useContext } from "react";
import { BasketContext } from "@/app/context/basketContext";
import { useState, useEffect } from "react";
import OrangeButton from "../reuseable/buttons/orangeButton";
import currency from "currency.js";


export default function checkoutSummary(){

    const { basket } = useContext(BasketContext);

    //Set up formatting from currency.js
    const POUND = value => currency(value, { symbol: '', decimal: ',', separator: ',' });

    const [itemsInBasket, setItemsInBasket] = useState([]);
    const [total, setTotal] = useState(0);
    const [vatTotal , setVatTotal] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0);

    useEffect(() => {

        if(basket.length > 0 ){

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

        };


    }, [basket]);


    //Calculate checkout totals
    useEffect(() => {

        let basketTotal = 0;
        let vatAmount = 0;
        

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

            setTotal(basketTotal);
            setVatTotal(POUND(vatAmount).format());
            setGrandTotal(POUND(calcGrandTotal).format());
            

        });


    }, [itemsInBasket])


    return(
        <>
            <div className="bg-[white] px-[32px] py-[32px] rounded-[8px] mb-[116px] xl:mb-[141px] text-[1.2rem]">

                <h5 className="font-bold tracking-[1.2px]">SUMMARY</h5>

                <ul className="flex flex-col gap-[24px] pt-[31px]">
                    {itemsInBasket.map(item => (
                        <li key={item.id}>

                            <div className="flex justify-between items-center">

                                <div className="flex gap-[16px] items-center">
                                    <img src={item.productImage} className="w-[64px] rounded-[8px]" />
                                    <div className="flex flex-col gap-[2px]">
                                        <p className="text-[0.93rem] font-bold">{item.product}</p>
                                        <p className="text-[0.87rem] font-bold opacity-50">£ {item.price}</p>
                                    </div>
                                </div>

                                <p className="opacity-50 text-[0.93rem] font-bold">x{item.quantity}</p>

                            </div>

                        </li>
                        
                    ))}


                </ul>

                <div className="flex flex-col mt-[32px] gap-[8px]">

                    <div className="flex justify-between ">
                        <p className="opacity-50 text-[0.93rem]">TOTAL</p>
                        <p className="text-[1.12rem] font-bold">£{total}</p>
                    </div>


                    <div className="flex justify-between ">
                        <p className="opacity-50 text-[0.93rem]">SHIPPING</p>
                        <p className="text-[1.12rem] font-bold">£50</p>
                    </div>


                    <div className="flex justify-between">
                        <p className="opacity-50 text-[0.93rem]">VAT (INCLUDED)</p>
                        <p className="text-[1.12rem] font-bold">£{vatTotal}</p>
                    </div>

                </div>

                <div className="flex justify-between mt-[24px] ">
                    <p className="opacity-50 text-[0.93rem]">GRAND TOTAL</p>
                    <p className="text-[1.12rem] font-bold text-[#D87D4A]">£{grandTotal}</p>
                </div>

                <button type="submit" className="bg-[#D87D4A] hover:bg-[#FBAF85] py-[15px] text-[white] w-[100%] mt-[47px] text-[0.81rem] font-bold tracking-[1px]">
                    CONTINUE & PAY
                </button>




            </div>
        </>
    )
}