
export default function Stories(){
    //criando array com as fotos 
    const avatares = ["9gag","adorable_animals", "bad.vibes.memes","barked","catanacomics","nathanwpylestrangeplanet"];

    const paths = avatares.map(avatar => <div class = "story"><div class= "imagem"><img src = {`assets/img/${avatar}.svg`}/></div> <span class = "usuario">{avatar}</span></div>)

    const contasStories = {
        figura: paths,
        nome: avatares
    }

 
    const{ figura,nome} = contasStories;
    console.log(figura);


return(
    <div class = "stories">
{paths}
    
       
    </div>
)
}




