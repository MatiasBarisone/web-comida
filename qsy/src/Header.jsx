import './Header.css' 

export const Header = () =>{
  return (
    <>
    <header>
      
        <div className="titulo">
        <h1 >MundoMovilGD</h1>
    </div>
    <ul class="nav-links">
      <h1></h1>
                <li><a target="_blank" href="#">Quienes somos?</a></li>
                <li><a target="_blank" href="https://api.whatsapp.com/send?phone=21321312&text=Hola, quiero comprar tu producto!">Contactanos!</a></li>
                <li><a target="_blank" href="https://maps.app.goo.gl/m59GCSX4quRqmnBH8">Ubicacion</a></li>
    </ul>
    
    </header>
    
    
    
    </>
  )
}

export default Header