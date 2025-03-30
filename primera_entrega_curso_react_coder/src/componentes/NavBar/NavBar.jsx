import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
return (
    <>
   <header>
    <h1 className="navbar_h1">Musidisc</h1>
    <div class="nav_cart">
    <nav className="navbar_nav">
        <ul className="navbar_ul">
            <li>Cds</li>
            <li>Vinilos</li>
            <li>Cassettes</li>
        </ul>
    </nav>
    <CartWidget/>
    </div>


   </header>
    </>
)
}

export default NavBar