import { Channel, ServerNameMenu } from "./ChannelBarItems"
import { db } from "../../Database";
import { useEffect, useState } from "react";
import { collection, addDoc, serverTimestamp, onSnapshot, query } from "firebase/firestore";
import ServerMenu from "./ChannelBarItems";

export default function Channelbar({ channelsVisible } : { channelsVisible: Boolean }) {
    const [serverMenuVisible, setserverMenuVisible] = useState(false);

    const toggleServerMenu = () => {
        setserverMenuVisible(!serverMenuVisible);
    }

    // firebase

    // servers
    const serversRef = collection(db, 'servers');
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

    // channels
    const [channels, setChannels] = useState<any[]>([]);
    const channelsRef = collection(db, 'channels');

    useEffect(() => {
        const queryChannels = query(channelsRef);
        onSnapshot(queryChannels, (snapshot) => {
            let channels: any[] = [];
            snapshot.forEach((doc) => {
                channels.push({...doc.data(), id: doc.id});
            });
            setChannels(channels);
        });
    }, []);

    
    return(
        <div className="bg-[#2b2d31] h-[98vh] w-[12vw]">

            {channelsVisible && (
                <>
                    <div className="pb-2">
                        <ServerNameMenu serverName="Server" toggleServerMenu={toggleServerMenu} /> 
                    </div>
                    <div className="pl-[0.5vw]">
                        {serverMenuVisible && ( <ServerMenu /> )}
                    </div>

                    <div className="px-2 pt-1 ">
                        <Channel channelName="chat" />
                    </div>
                </>
            )}
        </div>
    )
}