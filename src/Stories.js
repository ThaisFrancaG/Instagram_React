
export default function Stories(){
    //criando array com as fotos 
    const avatares = ["9gag","adorable_animals", "bad.vibes.memes","barked","catanacomics","nathanwpylestrangeplanet"];

    const paths = avatares.map(avatar => `assets/img/${avatar}.svg`)

    const contasStories = {
        figura: paths,
        nome: avatares
    }

    const {figura,nome} = contasStories;

return(
    <div class = "story">
      
       {paths.map(path => 
       <div class = "story"> <img src = {path} alt = ":("/>
       </div>)}
       {avatares.map(avatar=> 
       <div class = "story"> {avatar}
       </div>)}
       
      
      
    </div>
)
}


// function story(props){
//     return(
//         <div class = "story">


//         </div>
//     )
// }


