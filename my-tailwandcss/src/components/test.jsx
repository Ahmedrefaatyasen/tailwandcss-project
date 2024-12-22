

const Test = ({id,position,disc,image,name}) => {
    return (
        <div className="text-white bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_1px_8px_#1c202c]">
            <p className="text-sm font-normal tracking-[.8px] mb-[30px]">{disc}</p>
            <div>
            
                <img src={`./src/assets/${image}`}alt={id} className="w-[50px] h-[50px] object-contain rounded-full"/>
                </div>
                <div className="flex items-center gap-5">
                    <strong className="block m-2">{name}</strong>
                    <p className="font-normal text-sm">{position}</p>
                </div>
            
        </div>
    );
}

export default Test;
