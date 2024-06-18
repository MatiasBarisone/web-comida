import './Header.css' 

export const Header = () =>{
  return (
    <>
    <header>
        <div className="titulo">
        <h1 >Mayezona</h1>
    </div>
    <ul class="nav-links">
                <li><a href="/QuienesSomos">Quienes somos?</a></li>
                <li><a href="https://api.whatsapp.com/send?phone=21321312&text=Hola, quiero comprar tu producto!">Contactanos!</a></li>
                <li><a href="#">Ubicacion</a></li>
    </ul>
    
    </header>
    
    
    
    </>
  )
}

export default Header