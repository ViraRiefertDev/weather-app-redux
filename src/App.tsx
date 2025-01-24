/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import History from "./pages/History/History"
import Layout from "./pages/Layout/Layout"
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path='*' element='Page not found'/>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
