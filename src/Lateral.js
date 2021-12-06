const contas = ["9gag", "adorable_animals", "bad.vibes.memes", "barked", "catanacomics",  "wawawicomics", "smallcutecats"];
// transformar em urls utilizáveis
const contasUrl = contas.map((conta) =>
    <div class="sugestao">
        <div class = "usuario">
            <img src={`assets/img/${conta}.svg`} />
        
            <div class="texto">
                <strong>{conta}</strong>
                <span>Segue você</span>
            </div>
        </div>
            <span>Seguir</span>
    
    </div>);

export default function Lateral() {
    return (
        <div class="sidebar">
            <ContaUsuario contaAvatar="assets/img/catanacomics.svg"
                conta="catanacomics"
                contaNome="Catana" />
            <div class="sugestoes">
                <div class="titulo">
                <span>Sugestões para você</span><span>Ver tudo</span>
                </div>
                <div>
                {contasUrl}
                </div>
            </div>
            
            <span class = "links">Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</span>
            <p class = "copyright">© 2021 INSTAGRAM DO FACEBOOK</p>
            

        </div>
    )

}

function ContaUsuario(props) {
    return (
        <header class="usuario" >
            <img src={props.contaAvatar} />
            <div class="texto">
               <strong>{props.conta}</strong>
                <span>{props.contaNome}</span>
            </div>
        </header>
    )
}