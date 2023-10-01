import '../src/app/globals.css';
import LayoutComponent from '@/app/components/layout/layoutComponent';

export default function Layout({children}){

    return(
        <>
        <LayoutComponent>

                {children}
            
        </LayoutComponent>
        
        </>
    )
}