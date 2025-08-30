import Sidebar from "./fragments/Sidebar"
import ChatWindow from "./fragments/ChatWindow"

function App() {
  return (
    <div className="bg-slate-100 w-full h-screen flex flex-row p-4">
      <Sidebar />
      <ChatWindow />
    </div>
  )
}
export default App
