import { Outlet } from "react-router-dom"
import MainlayOut from "./components/layout/MainlayOut"



function App() {


  return (
    <>

  
  <div className="max-w-7xl mx-auto">
  <MainlayOut>
    <Outlet></Outlet>
    </MainlayOut>
  </div>

    </>
  )
}

export default App
