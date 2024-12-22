import { useState } from "react";

import Test from "./test";

const Testimonials = () => {
    const[test,settest]=useState([{
        id:1,
        disc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ratione sequi quae recusandae,Modi ratione sequi quae recusandae,Modi ratione sequi quae recusandaeModi ratione sequi quae recusandaeModi ratione sequi quae recusandae",
        image:"profile-1.jpg",
        position:"founder & ceo,huddle",
        name:"ahmed"
    },{
        id:2,
        disc:"Lorem ipsum dolor sit amet,Modi ratione sequi quae recusandae,Modi ratione sequi quae recusandae,Modi ratione sequi quae recusandae,Modi ratione sequi quae recusandae consectetur adipisicing elit. Modi ratione sequi quae recusandae",
        image:"profile-2.jpg",
        position:"founder & ceo,huddle",
        name:"mohamed"
    },{
        id:3,
        disc:"Lorem ipsum dolor sit amet,Modi ratione sequi quae recusandae,Modi ratione sequi quae recusandae,Modi ratione sequi quae recusandae,Modi ratione sequi quae recusandae consectetur adipisicing elit. Modi ratione sequi quae recusandae",
        image:"profile-3.jpg",
        position:"founder & ceo,huddle",
        name:"eman"
    }])
    return (
        <section className="pb-[350px]">
            <div className="container relative">
                <div className="absolute left-[20px] top-[-35px]"><img src="./src/assets/bg-quotes.png" alt="1"/></div>

            </div>
            <div className="grid grid-cols-1 relative z-10  md:grid-cols-2 lg:grid-cols-3 gap-8 mx-[30px]">
                {test.map((item)=>(<Test key={item.id} name={item.name} image={item.image}disc={item.disc} id={item.id}position={item.position} />))}
            </div>
        </section>
    );
}

export default Testimonials;
