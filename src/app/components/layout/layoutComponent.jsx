import Navbar from "./navbar";
import Footer from "./footer";
import Basket from "./basket";
import { NotificationContext } from "@/app/context/notificationContext";
import Notification from "../reuseable/notification";
import { useState, useContext } from "react";

export default function Layout({children}) {

    const [openBasket, setOpenBasket] = useState(false);

    const handleOpenBasket = () => {

        openBasket ? setOpenBasket(false) : setOpenBasket(true);
    }

    const {displayed} = useContext(NotificationContext);


    return(
        <>
            <Navbar handleOpenBasket={handleOpenBasket}/>

                <Basket 
                    setOpenBasket={setOpenBasket}
                    openBasket={openBasket}
                />


                <Notification/>

    
                    {children}

    

    
            <Footer/>
        </>
    )
}