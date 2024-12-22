import { useState } from "react";
import{FaFacebook,FaTwitter,FaInstagram} from 'react-icons/fa'

const Footer = () => {
    const [contact,setContact]=useState([{
        icon:"icon-phone.svg",
        text:"+01027023026"
    },{
         icon:"icon-email.svg",
        text:"example@flyo.com"
    }])
    const [links,setLinks]=useState(['about us','contact us','jobs','terms','press','privacy','blog'])
    const [socialIcons,setsocialIcon]=useState(["facebook","twitter","instagram"])
    return (
        <section className='bg-[#0c1524] pt-[320px] md:pt-[200] pb-[100px] text-white'>
            <div className='container'>
                <a href='/'><img src='/src/assets/logo.svg' className='w-[175px] h-[66px] object-contain' alt='1'/></a>
                <div className='mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]'>
                <div className='flex  items-start gap-4 w-[340px] max-w-full'>
                    <img src='/src/assets//icon-location.svg' alt='q' className='w-[18px] h-[18px] object-contain'/>
                    <p className='font-normal text-sm tracking-[.8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illum alias nostrum, quaerat id aperiam ratione, corporis impedit totam magnam rerum? Illum quod quas sunt officia quibusdam blanditiis laboriosam voluptatum!</p>
                </div>
                <div>
                 {contact.map((item)=>(<div className="flex items-center gap-4 mb-[15px]" key={item.text}>
                    <img src={`/src/assets/${item.icon}`} alt={item.text} className="w-[18px] h-[18px] object-contain"/>
                    <p>{item.text}</p>
                 </div>))}
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {links.map((item)=>( <li key={item}><a  className="hover:text-primary transition-colors duration-200 text-base" href={`/${item}`}>{item}</a> </li>))}

                </ul>
                <ul className="flex gap-4 justify-center w-full md:w-auto">
                    {socialIcons.map((item)=>(
                        <li key={item}>
                            <a href="/" className="group"><div className="w-[40px] h-[40px] border border-white rounded-full element-center">
                                {item==="facebook"?<FaFacebook className="group-hover:text-primary"/>:item==="twitter"?<FaTwitter className="group-hover:text-primary"/>:<FaInstagram className="group-hover:text-primary"/>}
                                </div></a>
                        </li>
                    ))}
                </ul>
            </div>
            </div>
            
        </section>
    );
}

export default Footer;
