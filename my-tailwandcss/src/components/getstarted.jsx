

const Getstarted = () => {
    return (
        <section>
            <div className="container relative">
                
                <div className="bg-[#1c2230] absolute left-[50%] translate-x-[-50%] top-[-150px] rounded-[5px] element-center flex-col w-[865px] max-w-full text-center text-white p-[30px] min-h-[275px] ">

                    <h3 className="text-[25px] md:text-[35px] font-semibold mb-[15px]">get early access today</h3>
                    <p className="w-[620px] max-w-full mx-auto mb-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, natus ipsum nam rem laborum eius quia velit. Tempora eligendi dignissimos culpa, earum, quo amet recusandae quasi aspernatur quia nulla sit.</p>
                    <form className="w-full flex justify-between items-center flex-wrap md:px-[60px] gap-7">
                        <input type="email" className="w-full md:flex-1 h-[50px] rounded-[30px] pl-[30px] outline-none text-[black] text-sm font-medium" placeholder="email@example.com"/>
                        <button className="w-full md:w-[200px]  h-[50px] bg-[#42b0d1] hover:bg-[#8cdae4] transition-all duration-200 rounded-[30px]" type="submit">get start for free</button>
                    </form>
                </div>
            </div>
            
        </section>
    );
}

export default Getstarted;
