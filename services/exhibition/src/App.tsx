import { Routes, Route } from 'react-router-dom'
import { Intro } from '@exhibition/pages/Intro'
import { DepartmentDescription } from './pages/DepartmentDescription'
import { ExhibitionDescription } from './pages/ExhibitionDescription'
import { JuniorHighTech } from './pages/JuniorHighTech'
import { useScrollToTop } from './hooks/useScrollToTop'  

function App() {

  useScrollToTop();

  return (
    <>
      <Routes>
        <Route path='/intro' element={<Intro />} />
        <Route path='/department' element={<DepartmentDescription />} />
        <Route path='/exhibition' element={<ExhibitionDescription />} />  
        <Route path='/junior-high-tech' element={<JuniorHighTech />} />
        <Route path='/*' element={<ExhibitionDescription />} />
        <Route path='/' element={<ExhibitionDescription/>} />
      </Routes>
    </>
  )
}

export default App
