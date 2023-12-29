

export default function Registration({handleUsername, registerUser}){

    return(
        <div className="flex justify-center items-center h-full relative top-20">
            <div className="flex flex-col shadow-md h-[375px] w-[400px]">
                <div className="bg-blue-300 w-full h-20 text-white flex items-center justify-center font-roboto font-bold text-3xl">
                    Register Below
                </div>
                <div className="flex flex-col items-center">
                    <input className="mt-10 h-7 w-[300px] border-b-2 focus:outline-none" type="text" placeholder="Enter NickName"  onChange={handleUsername}></input>
                    {/* <input className="mt-10 h-7 w-[300px] border-b-2 focus:outline-none" type="text" placeholder="Enter FullName" onChange={(e) => setFullName(e.target.value)}></input> */}
                    <button type="submit" className="h-10 w-[80px] mt-20 bg-slate-200 hover:shadow-md" onClick={registerUser}>Submit</button>
                </div>


            </div>

        </div>
    )
}