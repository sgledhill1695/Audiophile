import { useState, createContext, useEffect } from "react";
import currency from "currency.js";


export const BasketContext = createContext([]);


export function BasketProvider({children}){

    const POUND = value => currency(value, { symbol: '', decimal: '.', separator: ',', precision: 0 });


    const [basket, setBasket] = useState({
        items: [],
        total: 0,
        totalItems: 0
    });

    const [localStore, setLocalStore] = useState([]);


    useEffect(() => {

        if (localStorage.getItem("basketItems")) {

            const itemsInLocalStorage = JSON.parse(localStorage.getItem("basketItems"));

            setLocalStore(itemsInLocalStorage);

        };

    }, []);


    
    useEffect(() => {

        if(localStore.length > 0){


            const itemsForBasket = [];

            localStore.map(localItem => {

                var trimTitle = localItem.product.replace(/headphones|speaker|wireless earphones/gi, '');

                const itemInBasket = {
                    id: localItem.id,
                    product: trimTitle,
                    price: localItem.price,
                    productImage: localItem.productImage,
                    quantity: 1
                };

                const existingItem = itemsForBasket.find(item => item.id === localItem.id);

                if (existingItem) {

                    existingItem.quantity++;

                } else {

                    itemsForBasket.push(itemInBasket);

                };

            });

            let total = 0;
            let totalItems = 0;

            itemsForBasket.map(item => {

                for(let i = 0; i < item.quantity; i++){

                    total = currency(total).add(item.price)
                    totalItems = totalItems + 1;

                };
            });

            setBasket({
                items: itemsForBasket,
                total: POUND(total).format({
                    pattern: `#`,
                    precision: 0,
                }),
                totalItems: totalItems
            });

        }


    },[localStore]);




    return(
        <>
            <BasketContext.Provider value={{basket, setBasket}}>

                {children}

            </BasketContext.Provider>
        
        </>
    )
}

