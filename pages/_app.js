import { BasketProvider } from "@/app/context/basketContext";
import { NotificationProvider } from "@/app/context/notificationContext";

export default function MyApp({ Component, pageProps }) {

    return(

        <BasketProvider>
            <NotificationProvider>

                <Component {...pageProps} />

            </NotificationProvider>
        </BasketProvider>
    )
}