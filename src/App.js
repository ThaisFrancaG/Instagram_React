import Post from "./posts"
import Navbar from "./Navbar"
import Stories from "./Stories"
import Lateral from "./Lateral"

export default function App(){

    return(
        <div>
        <Navbar/>
        <main class = "corpo">
        <div class = "esquerda">
        <Stories/>
        <Post/>
        </div>

        <Lateral/>

        
        </main>
        </div>
       
)
}