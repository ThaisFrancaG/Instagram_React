export default function Navbar(){
    return(
        <div class = "navbar">
            <div class = "container">
           
            <div class = "logo">
            <span><ion-icon name="logo-instagram"></ion-icon></span>
                <div class = "separador"></div>
            <img  src = "./assets/img/logo.png" alt = "Instagram"/>
            </div>

            <div class = "instagram-mobile">
            <ion-icon name="logo-instagram"></ion-icon>
                <div class = "separador"></div>
            <img  src = "./assets/img/logo.png" alt = "Instagram"/>
            <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <BarraBusca/>
            <IconesAcoes/>
            </div>
        </div>
    )
}

function BarraBusca(){
    return(
        <div class = "pesquisa">  
        <input type = "text" placeholder = "Pesquisar"></input>
        </div>
    )
}

function IconesAcoes(){
    return(<div class = "icones">
        <ion-icon name="paper-plane-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-outline"></ion-icon>
    </div>)
}
        