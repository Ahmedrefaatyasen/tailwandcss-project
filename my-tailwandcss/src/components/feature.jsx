import { useState } from "react";
import Featurebox from "./featurebox";

const Feature = () => {
    const [items,setitems]=useState([{
        src:"icon-access-anywhere.svg",
        title:"access your files any where",
        disc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget."
    },{  src:"icon-security.svg",
        title:"security you can trust",
        disc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget."
    },{  src:"icon-any-file.svg",
        title:"store my type of file",
        disc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget."
    },{  src:"icon-collaboration.svg",
        title:"real-time collaboration",
        disc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eget."
    }])
    return (
        <section>
            <div className="container ">
                <div className="grid  grid-cols-1  md:grid-cols-2 gap-24 md:w-[865px] mx-auto max-w-100% ">
                    {items.map((x)=>(
                        <Featurebox key={x.title} title={x.title} disc={x.disc} icon={x.src}/>
                    ))}

                </div>
            </div>
            
        </section>
    );
}

export default Feature;
