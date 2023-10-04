import React from 'react'
import { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import ContextProvider from './context/ContextProvider.jsx'
import './util/i18n.js'
//Toast Notification
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<div>...Loading</div>}>
      <ContextProvider>
        <BrowserRouter>
          <App />
          <ToastContainer />
        </BrowserRouter>
      </ContextProvider>
    </Suspense>
  </React.StrictMode>,
)
