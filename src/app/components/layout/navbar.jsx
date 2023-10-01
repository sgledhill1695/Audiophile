import styles from './navbar.module.css';
import Logo from './logo';
import Link from 'next/link';
import BasketIcon from './basketIcon';
import HamburgerIcon from './hamburgerIcon';


export default function Navbar(){

    const navigation = [
        {title: 'HOME', href: '/'},
        {title: 'HEADPHONES', href: '/' },
        {title: 'SPEAKERS', href: '/' },
        {title: 'EARPHONES', href: '/' },
    ];


    return(
        <> 

        <div className='brand-black'>

            <div className='md:ps-[11%] md:pe-[11%] pt-[35px] '>

                <div className='flex justify-between border-b-[1px] border-[#ffffff59] pb-[36px]'>


                    <div className='flex items-center sm:gap-[42px] lg:hidden ps-[11%] md:ps-0'>
    
                        <HamburgerIcon />
        
                        <div className='hidden md:flex lg:hidden'>
                            <Logo />
                        </div>
    
                    </div>

    
                    <div className='md:hidden lg:flex'>

                        <Logo />

                    </div>
                    
    
                    <nav className='hidden lg:flex gap-[42px]'>
    
                        {navigation.map((nav, index) => (
    
                            <Link key={index} className='manrope-reg text-white text-[13px] tracking-[1.2px] hover:text-[#D87D4A]' href={nav.href}>{nav.title}</Link>
    
                        ))}

                    </nav>

    
                    <div className='pe-[11%] md:pe-0'>

                        <BasketIcon/>

                    </div>
    
                </div>

            </div>

        </div>

        </>
    )
}