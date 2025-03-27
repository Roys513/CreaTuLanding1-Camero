import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
return (
    <>
   <header>
    <h1 className="navbar_h1">Musidisc</h1>
    <nav className="navbar_nav">
        <ul className="navbar_ul">
            <li>Cds</li>
            <li>Vinilos</li>
            <li>Cassettes</li>
        </ul>
    </nav>

    <CartWidget/>

   </header>
    </>
)
}

export default NavBar