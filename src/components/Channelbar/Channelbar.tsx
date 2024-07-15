import { Channel, ServerNameMenu } from "./ChannelBarItems"
import { db } from "../../Database";
import { useEffect, useState } from "react";
import { collection, addDoc, serverTimestamp, onSnapshot, query } from "firebase/firestore";
import ServerMenu from "./ChannelBarItems";

export default function Channelbar({ channelsVisible, selectedServer } : { channelsVisible: Boolean, selectedServer: any }) {
    const [serverMenuVisible, setserverMenuVisible] = useState(false);

    const toggleServerMenu = () => {
        console.log(selectedServer[0].id);
        setserverMenuVisible(!serverMenuVisible);
    }

    // firebase

    // servers

    const deleteServer = () => {

    }

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
                        <ServerNameMenu serverName={selectedServer[0].name} toggleServerMenu={toggleServerMenu} /> 
                    </div>
                    <div className="pl-[0.5vw]">
                        {serverMenuVisible && ( <ServerMenu deleteServer={deleteServer} /> )}
                    </div>

                    <div className="px-2 pt-1 ">
                        <Channel channelName="chat" />
                    </div>
                </>
            )}
        </div>
    )
}