import { Link } from "react-router-dom";
import './header.css';

const Header = () =>{
    return (
        <header className="header">
            <h1>CreatorVerse</h1>
            <nav>
                <p>
                <Link to='/add' className="add-button">
                Add Creator 
                </Link>
                </p>
                <p>
                <Link to='/' className="home-button">
                Home
                </Link>
                </p>
            </nav>
        </header>
    );
};

export default Header;