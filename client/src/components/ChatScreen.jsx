export default function ChatScreen({handleMessage, sendValue, tab,setTab, sendPrivateValue, privateChats ,userData, publicChats}){

    const handlePublicSubmit=()=>{
        sendValue();
    }

    const handlePublicEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default behavior
            sendValue(); // Trigger the same action as the Submit button
        }
    };

    const handlePrivateEnter = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default behavior
            sendPrivateValue(); // Trigger the same action as the Submit button
        }
    };


    return(
        <div className="flex flex-col h-full">
            <div className="bg-[#202021] z-10 flex justify-start items-center text-2xl font-ubuntu w-full h-[6vw] text-white">
            <div className="basis-2/5 ml-[4rem] font-dancing text-4xl font-bold">GroupFlow</div>
             <div className="">{tab}</div>
            </div>

            <div className="flex h-full">
                <div className="bg-[#202021] w-[25vw] text-white flex flex-col justify-between border-white border-r-[1px] border-t-[0.2px]">
                    <div>
                        <div className="hover:bg-blue-800 cursor-pointer text-xl font-jost font-bold items-center justify-center flex h-[4rem]" onClick={()=>setTab("CHATROOM")}>Public ChatRoom</div>
                        {[...privateChats.keys()].map((name,index)=>(
                        <div>
                        {name!==userData.username && 
                        <li onClick={()=>{setTab(name)}} key={index} className="hover:bg-blue-800 cursor-pointer text-lg font-bold font-jost items-center justify-center flex h-[3rem]">{name}</li>
                        }
                        </div>
                        ))}
                    </div>
                    
                    <div className="text-xl font-white flex justify-center items-center mb-2 cursor-pointer hover:scale-110 hover:font-semibold">
                    Logout</div>
                </div>
                {tab==="CHATROOM" &&
                    <div className="flex flex-col bg-[#353537] justify-end w-full overflow-y-auto">
                        <div>
                        {publicChats.map((chat,index)=>(
                            <li className="flex justify-center text-lg mb-2 h-auto w-full p-2 text-white" key={index}>
                                {chat.senderName !== userData.username &&
                                <div className="flex justify-start w-full">
                                    <div className="flex flex-col bg-slate-800 min-w-[3vw] p-1 rounded-xl">
                                    <div className="text-sm ml-2 text-yellow-200">
                                        {chat.senderName}
                                    </div>
                                    <div className="m-2">{chat.message}</div>
                                    </div> 
                                </div>}
                                {chat.senderName === userData.username && 
                                <div className="flex justify-end w-full">
                                    <div className="flex order-last bg-green-800 w-auto p-3 rounded-xl ">
                                    <div className="">{chat.message}</div>
                                </div>
                                </div> }

                            </li>
                        ))}
                        </div>

                        <div className="flex mb-2 ml-2">
                            <input className="min-h-[2.7rem] bg-[#2e2e2f] p-3 rounded-2xl border-gray-200 border-[0.5px] caret-white focus:outline-none focus:border-[1px] w-[73vw] text-white" value={userData.message} onChange={handleMessage} onKeyDown={handlePublicEnter}></input>
                            <button className="h-[3vw] w-[3vw] pb-1 flex justify-center items-center rounded-lg border-0 focus:outline-none ml-5 mr-5 bg-blue-200 text-black font-bold text-xl hover:scale-110" onClick={handlePublicSubmit}>
                            ></button>
                        </div>
                    </div>
                }

                {tab!=="CHATROOM" &&
                    <div className="flex flex-col bg-[#353537] justify-end w-full overflow-y-auto">
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
                            <input className="min-h-[2.7rem] bg-[#2e2e2f] p-3 rounded-2xl border-gray-200 border-[0.5px] caret-white focus:outline-none focus:border-[1px] w-[73vw]" onChange={handleMessage} onKeyDown={handlePrivateEnter}></input>
                            <button className="h-[3vw] w-[3vw] pb-1 flex justify-center items-center rounded-lg border-0 focus:outline-none ml-5 mr-5 bg-blue-200 font-bold text-xl hover:scale-110" onClick={sendPrivateValue}>
                            ></button>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}