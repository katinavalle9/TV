import Home from "../page/Home/Home"
import MovieDetail from "../page/MovieDetail/MovieDetail"
import { Route, Routes } from "react-router-dom"



const RouterIndex = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  )
}

export default RouterIndex