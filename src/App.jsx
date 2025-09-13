//Using snippet for extention ES7/React
// import React from 'react'
// import { Routes, Route} from 'react-router-dom'
// import Home from './assets/pages/Home.jsx'
// import Community from './assets/pages/Community.jsx'
// import BlogTitles from './assets/pages/BlogTitles.jsx'
// import Layout from './assets/pages/Layout'
// import Dashboard from './assets/pages/Dashboard'
// import WriteArticle from './assets/pages/WriteArticle'

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/ai' element={<Layout />} />
//           <Route index element={<Dashboard />} />
//           <Route path ='write-article' element={<WriteArticle />} />
//           <Route path ='blog-titles' element={<BlogTitles />} />
//         </Route>
//       </Routes>
//     </div >
  
//   )
// }

// export default App
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import BlogTitles from './pages/BlogTitles.jsx'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import WriteArticle from './pages/WriteArticle'
import GenerateImages from './pages/GenerateImages'
import RemoveBackground from './pages/RemoveBackground'
import RemoveObject from './pages/RemoveObject'
import ReviewResume from './pages/ReviewResume'
import Community from './pages/Community.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ai' element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path='write-article' element={<WriteArticle />} />
          <Route path='blog-titles' element={<BlogTitles />} />
          <Route path='generate-images' element={<GenerateImages />} />
          <Route path='remove-background' element={<RemoveBackground />} />
          <Route path='remove-objects' element={<RemoveObject />} />
          <Route path='review-resume' element={<ReviewResume />} />
          <Route path='community' element={<Community />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App