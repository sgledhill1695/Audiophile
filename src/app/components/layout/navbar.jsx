import styles from './navbar.module.css';
import Logo from './logo';
import Link from 'next/link';
import BasketIcon from './basketIcon';
import HamburgerIcon from './hamburgerIcon';


export default function Navbar({handleOpenBasket}){

    const navigation = [
        {title: 'HOME', href: '/'},
        {title: 'HEADPHONES', href: '/category/headphones' },
        {title: 'SPEAKERS', href: '/category/speakers' },
        {title: 'EARPHONES', href: '/category/earphones' },
    ];


    return(
        <> 

        <div className='brand-black'>

            <div className='max-w-[1440px] m-auto'>

                    <div className='ps-[24px] pe-[24px] md:ps-[5vw] md:pe-[5vw] lg:ps-[10vw] lg:pe-[10vw] xl:ps-[165px] xl:pe-[165px] pt-[35px] '>
    
                        <div className='flex justify-between border-b-[1px] border-[#ffffff59] pb-[36px]'>
        
        
                            <div className='flex items-center sm:gap-[42px] lg:hidden'>
            
                                <HamburgerIcon />
                
                                <div className='hidden sm:flex xl:hidden'>
                                    <Logo />
                                </div>
            
                            </div>
        
            
                            <div className='sm:hidden lg:flex'>
        
                                <Logo />
        
                            </div>
                            
            
                            <nav className='hidden lg:flex gap-[42px]'>
            
                                {navigation.map((nav, index) => (
            
                                    <Link key={index} className='manrope-reg text-white text-[13px] tracking-[1.2px] hover:text-[#D87D4A]' href={nav.href}>{nav.title}</Link>
            
                                ))}
        
                            </nav>
        
            
        
                            <BasketIcon handleOpenBasket={handleOpenBasket}/>
        
             
                        </div>
    
                    </div>

            </div>

        </div>

        </>
    )
}