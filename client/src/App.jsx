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
import Home from './assets/pages/Home.jsx'
import BlogTitles from './assets/pages/BlogTitles.jsx'
import Layout from './assets/pages/Layout'
import Dashboard from './assets/pages/Dashboard'
import WriteArticle from './assets/pages/WriteArticle'
import GenerateImages from './assets/pages/GenerateImages'
import RemoveBackground from './assets/pages/RemoveBackground'
import RemoveObject from './assets/pages/RemoveObject'
import ReviewResume from './assets/pages/ReviewResume'
import Community from './assets/pages/Community.jsx'

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