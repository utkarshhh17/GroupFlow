export default function Registration({handleUsername, registerUser}){

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default behavior
            registerUser(); // Trigger the same action as the Submit button
        }
    };

    return(
        <div className="flex flex-col justify-start items-center h-full relative bg-[#5d5d5e]">
         <div className="bg-[#202021] flex flex-col justify-center items-center text-5xl font-bold font-dancing w-full h-[5vw] text-white">
             GroupFlow
            </div>
        
            <div className="relative top-40 flex flex-col rounded-lg shadow-xl h-[20vw] w-[27vw]">
                <div className="bg-[#1c1c1c] w-full h-20 text-white flex items-center justify-center font-ubuntu font-bold text-2xl">
                    Register Below
                </div>
                <div className="flex flex-col items-center bg-white h-80">
                    <input className="mt-10 h-7 w-[20vw] font-ubuntu border-b-2 focus:outline-none" type="text" placeholder="Enter your Name"  onChange={handleUsername} onKeyDown={handleKeyPress}></input>
                    {/* <input className="mt-10 h-7 w-[300px] border-b-2 focus:outline-none" type="text" placeholder="Enter FullName" onChange={(e) => setFullName(e.target.value)}></input> */}
                    <button type="submit" className="h-10 w-[7vw] font-ubuntu mt-20 bg-[#1c1c1c] text-white hover:scale-105 hover:shadow-md" onClick={registerUser}>Submit</button>
                </div>


            </div>

        </div>
    )
}