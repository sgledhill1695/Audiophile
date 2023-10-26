import '../src/app/globals.css';
import LayoutComponent from '@/app/components/layout/layoutComponent';
import { BasketProvider } from '@/app/context/basketContext';

export default function Layout({children}){

    return(
        <>
            <BasketProvider>

                <LayoutComponent>

                    {children}

                </LayoutComponent>

            </BasketProvider>
        
        </>
    )
}