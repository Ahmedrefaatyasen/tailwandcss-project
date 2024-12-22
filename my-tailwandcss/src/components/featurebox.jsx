

const Featurebox = ({ icon,title,disc}) => {
    return (
        <div className="text-white element-center  pb-[150px] flex-col mt-[20px] text-center">
            <img src={`/src/assets/${icon}`} className="w-[80px] h-[80px] object-contain" alt={title}/>
            <h4 className="text-xl my-[15px]">{title}</h4>
            <p className="font-normal text-sm">{disc}</p>
            
        </div>
    );
}

export default Featurebox;
