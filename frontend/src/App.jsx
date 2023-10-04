import './App.scss'
import { Route, Routes } from "react-router-dom"
import SharedLayout from './pages/SharedLayout'
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"
import DataPolicies from "./pages/DataPolicies"
import PageNotFound from "./pages/PageNotFound"
import Confirm from "./pages/EmailConfirmation"
// import * as bootstrap from 'bootstrap'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/policies" element={<DataPolicies />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
