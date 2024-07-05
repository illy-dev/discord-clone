import { FaDiscord } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { BiSolidCompass } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

import { useEffect, useState } from "react";
import { collection, addDoc, serverTimestamp, onSnapshot, query } from "firebase/firestore";
import { db } from "../../Database";

import { DiscordBarIcon, SideBarIcon, ServerIcon } from "./Sidebaricons";

export default function Sidebar() {
    
    const [createServerVisible, setCreateServerVisible] = useState(false);

    const toggleCreateServer = () => {
        setCreateServerVisible(!createServerVisible);
    }

    // firebase
    
    const serversRef = collection(db, 'servers');

    const [imageUrl, setImageUrl] = useState('');
    const [serverName, setServerName] = useState('');
    const [servers, setServers] = useState<any[]>([]);

    useEffect(() => {
        const queryServers = query(serversRef);
        onSnapshot(queryServers, (snapshot) => {
            let servers: any[] = [];
            snapshot.forEach((doc) => {
                servers.push({...doc.data(), id: doc.id});
            });
            setServers(servers);
        });
    }, []);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (imageUrl === "" || serverName === "" ) return;
        // muss noch user hinzufügen
        await addDoc(serversRef, {
            name: serverName,
            imageUrl: imageUrl,
            createdAt: serverTimestamp(),
            
        });

        setImageUrl('');
        setCreateServerVisible(false);
    };

    return(
        <>
            {createServerVisible && (
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
                            <p className="font-create-server">Bild URL</p>
                            <input type="text" name="bild" size={52} className="rounded bg-light-blurple text-white mb-4 text-left pt-1 pb-1 px-2" onChange={e => setImageUrl(e.target.value)} />
                        </div>
            
                        <div className="pl-4">
                            <p className="font-create-server">Servername</p>
                            <input type="text" name="servername" size={52} className="rounded bg-light-blurple text-white mb-4 text-left pt-1 pb-1 px-2" onChange={e => setServerName(e.target.value)} />
                        </div>

                        <div className="flex justify-center">
                            <button type="submit" className="bg-[#5865f2] rounded px-12 pt-[0.4rem] pb-[0.4rem] mb4 hover:bg-[#4752c4]">Create</button>
                        </div>

                    </div>
                </form>
            )}

            <div className="bg-dark-blurple h-[98vh] w-[4vw] flex flex-col">
                <DiscordBarIcon icon={<FaDiscord size="28" />} text="Direktnachrichten" />
                <Divider />

                <div>
                    {servers.map((server) => <ServerIcon icon={server.imageUrl} server_name={server.name} key={server.id} />)}

                    <div onClick={toggleCreateServer}>
                        <SideBarIcon icon={<FaPlus size="28" />} text="Server hinzufügen" />
                    </div>
                    <SideBarIcon icon={<BiSolidCompass size="28" />} text="Erkunde entdeckbare Server" />
                </div>
            </div>
        </>
    )
}




const Divider = () => <hr className="bg-gray-200 dark:bg-[#35363c] border border-gray-200 dark:border-[#35363c] rounded-full mx-6" />;