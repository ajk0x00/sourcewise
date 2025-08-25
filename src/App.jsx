import PrimaryButton from "./components/PrimaryButton"
import { GrAdd } from "react-icons/gr";


function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <PrimaryButton text="New chat" icon={GrAdd} />
    </div>
  )
}
export default App
