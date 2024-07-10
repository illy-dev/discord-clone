import Sidebar from "./Sidebar/Sidebar"
import Windowtitle from "../Windowtitle"

export default function App() {
  return(
    <div>
      <Windowtitle />
      <div className="flex flex-row">
        <Sidebar />
      </div>
    </div>
  )
}