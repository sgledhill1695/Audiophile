import Navbar from "./navbar";
import Footer from "./footer";
import Basket from "./basket";
import { useState } from "react";

export default function Layout({children}) {

    const [openBasket, setOpenBasket] = useState(false);

    const handleOpenBasket = () => {

        openBasket ? setOpenBasket(false) : setOpenBasket(true);
    }


    return(
        <>
            <Navbar handleOpenBasket={handleOpenBasket}/>

                <Basket openBasket={openBasket}/>
    
                    {children}

    

    
            <Footer/>
        </>
    )
}