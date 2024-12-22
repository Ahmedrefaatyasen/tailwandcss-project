import logo from '../assets/mylogo.png';
import {useEffect, useRef} from 'react'
    

const Header = () => {
    const ref=useRef()
    const ref2=useRef()
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if (window.scrollY>100){
               
                ref.current.style.background="#0c1524"
                ref.current.style.padding="20px 28px"
                
              
                 
            }else{
             
                  ref.current.style.padding="40px 28px"
                   ref.current.style.background="transparent"
                
                
                 
               
            }
        })
     
    }, []);
    return (
        <header ref={ref} className='fixed w-[100%]  pt-[30px] px-7 ' >
            <div ref={ref2}  className="container transation-all duration-200 flex flex-col sm:flex-row  justify-between mx-auto items-center">
            <a href='/'><img src='/src/assets/logo.svg' className='w-[175px] h-[66px] object-contain' alt='1'/></a>


            <nav >
                <ul className="flex pt-4  text-white justify-around mt-8 sm:mt-0 sm:justify-between gap-5 ">
                    <li><a className=" hover:text-red-500 delay-100 hover:underline ease-in-out" href="#">Feature</a></li>
                    <li><a className=" hover:text-red-500 delay-100 hover:underline ease-in-out" href="#">Team</a></li>
                    <li><a className=" hover:text-red-500 hover:underline delay-100  ease-in-out" href="#">Singin</a></li>
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Header;
