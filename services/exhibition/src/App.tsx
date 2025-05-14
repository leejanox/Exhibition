import { Routes, Route } from 'react-router-dom'
import { Intro } from '@exhibition/pages/Intro'
import { DepartmentDescription } from './pages/DepartmentDescription'
import { ExhibitionDescription } from './pages/ExhibitionDescription'


function App() {

  return (
    <>
      <Routes>
        <Route path='/intro' element={<Intro />} />
        <Route path='/department' element={<DepartmentDescription />} />
        <Route path='/exhibition' element={<ExhibitionDescription />} />  
      </Routes>
    </>
  )
}

export default App
