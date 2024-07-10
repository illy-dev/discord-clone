import { FaDiscord } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { BiSolidCompass } from "react-icons/bi";

import { useEffect, useState } from "react";
import { collection, addDoc, serverTimestamp, onSnapshot, query } from "firebase/firestore";
import { db } from "../../Database";
import CreateServer from "./CreateServer";
import Channelbar from "../Channelbar/Channelbar";

import { DiscordBarIcon, SideBarIcon, ServerIcon } from "./Sidebaricons";

export default function Sidebar() {
    const [channelsVisible, setChannelsVisible] = useState(false);
    const [createServerVisible, setCreateServerVisible] = useState(false);

    const toggleChannels = () => {
        setChannelsVisible(!channelsVisible);
    }
 
    const toggleCreateServer = () => {
        setCreateServerVisible(!createServerVisible);
    }

    return(
        <>
            <Sidebarhtml toggleChannels={toggleChannels} toggleCreateServer={toggleCreateServer} setCreateServerVisible={setCreateServerVisible} createServerVisible={createServerVisible} />
            <Channelbar channelsVisible={channelsVisible} />
        </>
    );
}

function Sidebarhtml({ toggleChannels, toggleCreateServer, setCreateServerVisible, createServerVisible } : { toggleChannels: any, toggleCreateServer: any, setCreateServerVisible: React.Dispatch<React.SetStateAction<boolean>>, createServerVisible: Boolean}) {

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

    const handleSubmit = async (e: React.ChangeEvent<any>) => {

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
                <CreateServer handleSubmit={handleSubmit} toggleCreateServer={toggleCreateServer} imageUrl={imageUrl} setImageUrl={setImageUrl} setServerName={setServerName}/>
            )}

            <div className="bg-dark-blurple h-[98vh] w-[4vw] flex flex-col">
                <DiscordBarIcon icon={<FaDiscord size="28" />} text="Direktnachrichten" />
                <Divider />

                <div>

                    <div onClick={toggleChannels}>
                        {servers.map((server) => <ServerIcon icon={server.imageUrl} server_name={server.name} key={server.id} />)}
                    </div>

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
