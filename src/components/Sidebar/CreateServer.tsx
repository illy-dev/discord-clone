import { IoIosClose } from "react-icons/io";

export default function CreateServer({ handleSubmit, toggleCreateServer, imageUrl, setImageUrl, setServerName } : { handleSubmit: any, toggleCreateServer: any, imageUrl: string, setImageUrl: React.Dispatch<React.SetStateAction<string>>, setServerName: React.Dispatch<React.SetStateAction<string>>}) {


    return(
        <form method="post" onSubmit={handleSubmit}>
                    <div className="absolute bg-dark-blurple top-[35%] left-[40%] w-1/4 h-[40%] rounded shadow-lg flex flex-col">

                        <div className="flex justify-end text-[#73767d] hover:text-[#dbdee1]">
                            <IoIosClose size={30} onClick={toggleCreateServer} />
                        </div>

                        <div className="flex justify-center items-center flex-col">
                            <h1 className="pt-3 text-2xl">Create Server</h1>
                            <img src={imageUrl} alt="image" className="h-24 w-24 rounded-3xl mt-1 object-contain"/>
                        </div>
                        
                        <div className="pl-4">
                            <p className="font-bold-gg">Bild URL</p>
                            <input type="text" name="bild" size={52} className="rounded bg-light-blurple text-white mb-4 text-left pt-1 pb-1 px-2" onChange={e => setImageUrl(e.target.value)} />
                        </div>
            
                        <div className="pl-4">
                            <p className="font-bold-gg">Servername</p>
                            <input type="text" name="servername" size={52} className="rounded bg-light-blurple text-white mb-4 text-left pt-1 pb-1 px-2" onChange={e => setServerName(e.target.value)} />
                        </div>

                        <div className="flex justify-center">
                            <button type="submit" className="bg-[#5865f2] rounded px-12 pt-[0.4rem] pb-[0.4rem] mb4 hover:bg-[#4752c4]">Create</button>
                        </div>

                    </div>
                </form>
    );
}