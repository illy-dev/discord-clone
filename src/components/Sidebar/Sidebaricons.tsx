export const DiscordBarIcon = ({ icon, text } : {icon: any, text: string}) => (
    <div className="relative flex items-center justify-center 
      h-12 w-12 mt-2 mb-2 mx-auto bg-gray-400 hover:bg-[#5865f2] dark:bg-[#313338] text-[#dbdee1]
      hover:text-white hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group">
      
      <span className="absolute block w-2 h-2 rounded ml-[-0.25rem] bg-white group-hover:opacity-[1] opacity-0 mr-[4.5rem] group-hover:h-6 transition-all duration-300 ease-linear"></span>
      {icon}
      <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-dark-blurple text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
        {text}
      </span>
    </div>
  );
  
  export const SideBarIcon = ({ icon, text } : {icon: any, text: string}) => (
      <div className="relative flex items-center justify-center 
        h-12 w-12 mt-2 mb-2 mx-auto bg-gray-400 hover:bg-[#23a559] dark:bg-[#313338] text-[#23a559]
        hover:text-white hover:rounded-xl rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg group">
    
        <span className="absolute block w-2 h-2 rounded ml-[-0.25rem] bg-white group-hover:opacity-[1] opacity-0 mr-[4.5rem] group-hover:h-6 transition-all duration-300 ease-linear"></span>
        {icon}
        <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-dark-blurple text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
          {text}
        </span>
      </div>
    );
  
    export const ServerIcon = ({ icon, server_name } : {icon: string, server_name: string}) => (
      <div className="relative flex items-center justify-center 
        h-12 w-12 mt-2 mb-2 mx-auto transition-all duration-300 ease-linear cursor-pointer shadow-lg group">
        <span className="absolute block w-2 h-2 rounded ml-[-0.25rem] bg-white group-hover:opacity-[1] opacity-0 mr-[4.5rem] group-hover:h-6 transition-all duration-300 ease-linear"></span>
        <img src={icon} alt={server_name} className="object-contain rounded-3xl transition-all duration-300 ease-linear cursor-pointer hover:rounded-lg" />

        <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md text-white bg-dark-blurple text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
          {server_name}
        </span>
      </div>
  );