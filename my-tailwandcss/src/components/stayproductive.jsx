import img from '../assets/illustration-stay-productive.png'
const Stayproductive = () => {
    return (
        <section className='pb-[150px]'>
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
                <div>
                    <img src={img} alt="productive"/>
                </div>
                <div className='text-white '>
                    <h3 className='font-medium text-[35px] leading-[50px]'>stay productive <br/> where ever you are</h3>
                    <div className='my-[15px] font-normal text-sm tracking-[.8px]'>
                         <p className='mb-[15px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ratione sequi quae recusandae </p>
                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam impedit incidunt quam nihil assumenda necessitatibus harum possimus eos consectetur.</p>
                         <a href='' className='text-primary flex items-center gap-4 w-fit mt-4  hover:text-[#42b0d1] transition-colors duration-200 border-b-2 border-solid pb-[5px] border-primary'>see how flyo works<img  src='/src/assets/icon-arrow.svg' className='w-[20px] animate-moveright object-contain' alt='1'/></a>
                    </div>

                </div>
            </div>
            
        </section>
    );
}

export default Stayproductive;
