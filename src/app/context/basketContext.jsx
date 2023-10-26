import { useState, createContext, useEffect } from "react";

export const BasketContext = createContext([]);


export function BasketProvider({children}){

    const [basket, setBasket] = useState([]);

    useEffect(() => {

        if (localStorage.getItem("basketItems")) {

            setBasket([JSON.parse(localStorage.getItem("basketItems"))]);

        }

    }, []);



    return(
        <>
            <BasketContext.Provider value={{basket, setBasket}}>

                {children}

            </BasketContext.Provider>
        
        </>
    )
}

