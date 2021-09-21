import {Navbar} from "./Navbar/Navbar";

export const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <div className="search-box">
                <input type="text" />
            </div>
        </div>
    )
}