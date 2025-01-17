import MagicCursor from "./components/MagicCursor";
import StarsCanvas from "./components/StarBackground";
import Home from "./pages/Home";

const App:React.FC=()=> {
  return (
    <div>
      <MagicCursor></MagicCursor>
      <StarsCanvas></StarsCanvas>
      <Home></Home>
    </div>
  )
}
export default App;