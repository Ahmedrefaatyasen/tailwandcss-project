
import photo from '../assets/illustration-intro.png'
import photo2 from '../assets/bg-curvy-desktop.svg'
const Landing = () => {
    return (
        <section>
            <div className="container ">
                <div className='element-center flex-col pt-[200px] '>
                <div className='w-[750px] max-w-full h-[100%]'>
                    <img className='w-full h-fit' src={photo} alt='1'/>
                </div>
                <div className='text-white text-center'>
                    <h1 className='text-white text-[30px] md:text-[40px] font-semibold mb-[15px]'>all your files in one secure location  <br/>accessibe any where</h1>
                    <p className='font-normal text-lg px-[15px] mt-[30px] md:w-[600px] max-w-full md:m-auto'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quasi atque, nulla veniam vitae nam aspernatur nostrum perspiciatis totam cum temporibus in numquam quibusdam, omnis ex eum quaerat. Expedita, culpa.
                    </p>
                </div>
                <a href='/'className='btn element-center text-white font-medium w-[250px] mt-[40px] h-[60px] rounded-[30px]' >get started</a>
                </div>
            </div>
            <div className='w-full h-[200px]' ><img src={photo2} alt='1' className='w-full h-full'/></div>
            
        </section>
    );
}

export default Landing;
