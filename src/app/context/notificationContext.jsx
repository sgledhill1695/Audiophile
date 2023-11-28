import { createContext, useState, useEffect } from "react";

export const NotificationContext = createContext(false);

export function NotificationProvider({children}){

    const [displayed, setDisplayed] = useState(false);


    useEffect(() => {

        if(displayed){

            setTimeout(() => {
                setDisplayed(false);
            }, 3500);
           
        };

    },[displayed]);


    return (
        <NotificationContext.Provider value={{displayed, setDisplayed}}>

            {children}

        </NotificationContext.Provider>
    )


}


