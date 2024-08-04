import { Link } from "react-router-dom";
import './header.css';

const Header = () =>{
    return (
        <header className="header">
            <h1>CreatorVerse</h1>
            <nav>
                <Link to='/add' className="add-button">
                Add Creator 
                </Link>
            </nav>
        </header>
    );
};

export default Header;