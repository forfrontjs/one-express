
import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import './assets/styles/index.scss'
import { Layout } from "./components/Layout/Layout"
import Profile from './pages/Profile/Profile'; // Правильный импорт по умолчанию

export const App =  () => {

  return (
    <>
     <Routes>
        <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Route>
     </Routes>
    </>
  )
}