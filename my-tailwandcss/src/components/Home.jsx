
import { Fragment } from "react";
import Landing from "./landing";
import Feature from "./feature";
import Stayproductive from "./stayproductive";
import Testimonials from "./testimonials";
import Getstarted from "./getstarted";
const Home = () => {
    return (
        <Fragment>
        <Landing/>  
        <Feature/>
        <Stayproductive/>
        <Testimonials/>
        <Getstarted/>
        
        </Fragment>
    );
}

export default Home;
