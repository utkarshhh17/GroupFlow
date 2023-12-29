export default function ChatScreen({handleMessage, sendValue, tab,setTab, sendPrivateValue, privateChats ,userData, publicChats}){

    const handlePublicSubmit=()=>{
        sendValue();
    }
    return(
        <div className="flex flex-col h-full">
            <div className="bg-blue-400 flex justify-center items-center text-3xl font-ubuntu w-full h-[100px] text-white">
             Chat Here
            </div>

            <div className="flex h-full">
                <div className="bg-blue-600 basis-1/4 text-white flex flex-col justify-between">
                    <div>
                        <div className="flex justify-center items-center mt-5 text-2xl font-bold">Online Users</div>
                        <div className="hover:bg-blue-800 cursor-pointer text-xl font-bold items-center justify-center flex mt-10 h-[4rem]" onClick={()=>setTab("CHATROOM")}>ChatRoom</div>
                        {[...privateChats.keys()].map((name,index)=>(
                        <li onClick={()=>{setTab(name)}} key={index} className="hover:bg-blue-800 cursor-pointer text-xl font-bold items-center justify-center flex h-[4rem]">{name}</li>
                        ))}
                    </div>
                    
                    <div className="text-xl font-white flex justify-center items-center mb-2 cursor-pointer hover:scale-110 hover:font-semibold">
                    Logout</div>
                </div>
                {tab==="CHATROOM" &&
                <div className="flex flex-col justify-end w-full">
                    <div>
                    {publicChats.map((chat,index)=>(
                        <li className="flex text-lg mb-2 shadow-md h-auto w-auto p-2 bg-slate-800 text-white" key={index}>
                            {chat.senderName !== userData.username && 
                            <div className="mt-2 ml-2 mr-2">
                            {chat.senderName}:
                            </div>}
                            {chat.senderName === userData.username && 
                            <div className="mt-2 ml-2 mr-2">
                            {chat.senderName}:
                            </div>}
                            <div className="mt-2 ml-3">{chat.message}</div>

                        </li>
                    ))}
                    </div>

                    <div className="flex mb-2 ml-2">
                        <input className="h-10 rounded-lg border-2 border-black focus:outline-none basis-5/6" value={userData.message} onChange={handleMessage}></input>
                        <button className="h-10 w-[100px] rounded-lg border-0 focus:outline-none ml-5 mr-5 bg-slate-800 text-white hover:scale-110" onClick={handlePublicSubmit}>
                        Send</button>
                    </div>
                </div>
                }

                {tab!=="CHATROOM" &&
                <div className="flex flex-col justify-end w-full">
                    <div>
                    {[...privateChats.get(tab)].map((chat,index)=>(
                        <li className="flex text-lg mb-2 shadow-md h-auto w-auto p-2 bg-slate-800 text-white" key={index}>
                            {chat.senderName !== userData.username && 
                            <div className="mt-2 ml-2 mr-2">
                            {chat.senderName}:
                            </div>}
                            {chat.senderName === userData.username && 
                            <div className="mt-2 ml-2 mr-2">
                            {chat.senderName}:
                            </div>}
                            <div className="mt-2 ml-3">{chat.message}</div>

                        </li>
                    ))}
                    </div>

                    <div className="flex mb-2 ml-2">
                        <input className="h-10 rounded-lg border-2 border-black focus:outline-none basis-5/6" onChange={handleMessage}></input>
                        <button className="h-10 w-[100px] rounded-lg border-0 focus:outline-none ml-5 mr-5 bg-slate-800 text-white hover:scale-110" onClick={sendPrivateValue}>
                        Send</button>
                    </div>
                </div>
                }
            </div>

        </div>
    )
}