 export default function Post(){


    return(
        <div>
        <div class = "post">

<Topo avatarConta = "assets/img/meowed.svg" 
    tituloConta = "Meowed"/>
<Foto foto = "assets/img/gato-telefone.svg" fotoTitulo="gato-telefone.svg" />
<Rodape curtidasFoto = "assets/img/respondeai.svg" curtidasNome = "RespondeAí" />
</div>
<div class = "post">
<Topo avatarConta = "assets/img/barked.svg" tituloConta = "Barked"/>
<Foto foto = "assets/img/dog.svg" fotoTitulo="dog.svg" />
<Rodape curtidasFoto = "assets/img/respondeai.svg" curtidasNome = "RespondeAí" />
        </div>
        </div>
    )
 }
 

 function Topo(props){
     return(
         <header class = "topo">
         <div class = "usuario"> 
         <img src ={props.avatarConta} alt  = "Nao encontrado"/>
         <strong>{props.tituloConta}</strong>
        </div>
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
            <div>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="chatbubble-outline"></ion-icon>
        <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
        <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
        
        <div class = "curtidas"> 
        <img src = {props.curtidasFoto} alt = "nao encontrado" />
        <span>Curtido por <strong>{props.curtidasNome}</strong> e <strong>outras 1000 pessoas</strong></span>
        </div>

        
    </footer>)
}


