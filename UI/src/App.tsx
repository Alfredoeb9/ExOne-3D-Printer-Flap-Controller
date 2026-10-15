import { Route, Routes } from 'react-router'

import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import LayerConfiguration from './pages/LayerConfiguration'
import ManualControl from './pages/ManualControl'
import Settings from './pages/Settings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="flex h-dvh flex-col overflow-hidden bg-slate-950 p-8 text-white">
        <Header />
    
        <section id="side-by-side" className='flex min-h-0 flex-1 gap-4'>
          <Sidebar />

          <main className="min-h-0 min-w-0 flex flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/layers" element={<LayerConfiguration />} />
              <Route path="/manual" element={<ManualControl />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
          </main>
        </section>
      </section>
    </>
  )
}

export default App
