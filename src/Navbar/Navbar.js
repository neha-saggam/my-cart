import {BrandLogo} from "./Logo";
import {NavbarItems} from "./NavbarItems";

export const Navbar = () => {

    return (
        <nav className="navbar">
            <BrandLogo />
            <NavbarItems />
        </nav>
    )
}