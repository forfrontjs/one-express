import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import './assets/styles/index.scss'
import { Layout } from "./components/Layout/Layout"
import { Admin } from "./pages/Admin/Admin"

export const App =  () => {

  return (
    <>
     <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/admin" element={<Admin/>}/>
        </Route>
     </Routes>
    </>
  )
}
