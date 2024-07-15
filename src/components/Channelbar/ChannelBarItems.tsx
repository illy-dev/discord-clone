import { IoIosChatbubbles } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCirclePlus } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";

export default function ServerMenu({ deleteServer } : { deleteServer: any }) {
    return(
        <div className="absolute bg-[#111214] w-[11vw] rounded flex flex-col text-[#969aa0] ">
            
            <div className="mx-2 my-1 rounded flex flex-row items-center hover:bg-[#505cdc] hover:text-white cursor-pointer">              
                <p className="pl-2">Kanal erstellen</p>
                <FaCirclePlus size={15} className="ml-16" />
            </div>

            <hr className="bg-[#28292d] border border-[#28292d] mx-2" /> 

            <div className="mx-2 my-1 rounded flex flex-row items-center hover:bg-[#da373c] hover:text-white text-[#da373c] cursor-pointer" onClick={deleteServer}>              
                <p className="pl-2">Server Löschen</p>
                <FaTrash size={15} className="ml-[3.75rem]" />
            </div>

        </div>
    );
}

export const Channel = ({ channelName } : { channelName: string }) => (
    <div className="pl-1 w-[100%] hover:bg-[#35373c] rounded text-[#7b7f88] hover:text-white cursor-pointer">
        <div className="flex flex-row">
            <IoIosChatbubbles color="#7b7f88" size={20} />
            <p className="pl-2">{channelName}</p>
        </div>
    </div>
);

export const ServerNameMenu = ({ serverName, toggleServerMenu } : { serverName: string, toggleServerMenu: any }) => (
    <>
        <div className="h-12 flex items-center justify-start px-3 hover:bg-[#35373c] cursor-pointer" onClick={toggleServerMenu}>
            <h3 className="font-bold-gg">{serverName}</h3>
            <MdKeyboardArrowDown color="#7b7f88" size={20} />
        </div>
        <hr className="bg-[#1f2123] border border-[#1f2123]" />  
    </>
);