export default function HamburgerIcon({handleHamburgerMenu}){


    return(
        <>

            <svg width="16" onClick={handleHamburgerMenu} className="fill-[#FFF] hover:fill-[#D87D4A] hover:cursor-pointer"  height="15" xmlns="http://www.w3.org/2000/svg"><g fillRule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" /></g></svg>
        
        </>
    )

}