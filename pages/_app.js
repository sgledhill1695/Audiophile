import { BasketProvider } from "@/app/context/basketContext";

export default function MyApp({ Component, pageProps }) {

    return(

        <BasketProvider>
    
            <Component {...pageProps} />
    
        </BasketProvider>
    )
}