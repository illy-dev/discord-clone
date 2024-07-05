import Sidebar from "./Sidebar/Sidebar"
import Windowtitle from "../Windowtitle"
import Serverbar from "./Serverbar"

export default function App() {
  return(
    <div>
      <Windowtitle />
      <div className="flex flex-row">
        <Sidebar />
        <Serverbar />
      </div>
    </div>
  )
}