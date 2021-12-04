 export default function Post(){

const avatarConta = ["assets/img/meowed.svg" ]
    return(
        <div class = "post">
<Topo avatarConta = "assets/img/meowed.svg" 
    tituloConta = "Meowed"/>
<Foto foto = "assets/img/dog.svg" fotoTitulo="gato-telefone.svg" />
<Rodape curtidasFoto = "assets/img/respondeai.svg" curtidasNome = "RespondeAí" />

<Topo avatarConta = "assets/img/barked.svg" tituloConta = "Barked"/>
<Foto foto = "assets/img/dog.svg" fotoTitulo="dog.svg" />
<Rodape curtidasFoto = "assets/img/respondeai.svg" curtidasNome = "RespondeAí" />
        </div>
    )
 }
 

 function Topo(props){
     return(
         <header class = "topo">
         <img src ={props.avatarConta} alt  = "Nao encontrado"/>
         <span class = "usuario">{props.tituloConta}</span>
         <span class = "acoes"><ion-icon name="ellipsis-horizontal-outline"></ion-icon></span>
         </header>
     )
 }
 function Foto(props){
    return(
    <article class = "conteudo">
        <img src = {props.foto} alt = {props.fotoTitulo}/>
    </article>
    )
}
function Rodape(props){
    return(<footer class = "fundo">
        <div class = "acoes">
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        <div class = "curtidas"> 
        <img src = {props.curtidasFoto} alt = "nao encontrado" />
        <span>Curtido por {props.curtidasNome} e outras 1000 pessoas</span>
        </div>

        
    </footer>)
}


