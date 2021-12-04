import Post from "./posts"
import Navbar from "./Navbar"
import Stories from "./Stories"

export default function App(){

    return(
        <div>
        <Navbar/>
        <main class = "corpo">
        <Stories/>
        <Post/>
        </main>
        </div>
       
)
}