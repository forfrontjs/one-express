import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header"
import { Home } from "./pages/Home/Home"

import './assets/styles/index.scss'

export const App =  () => {

  return (
    <>
      <Header />
      <Home />
      <Footer/>

    </>
  )
}
