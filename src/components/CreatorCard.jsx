import { Link } from "react-router-dom";
import './CreatorCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const CreatorCard = ({ creator }) => (
    <div className="creator-card">
        <h2>{creator.name}</h2>
        {creator.imageURL && <img src={creator.imageURL} alt={creator.name}/>}
        {/* <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit</a> */}
        <p>{creator.description}</p>
        <div className="icon-buttons-container">
                <Link to={`/creator/${creator.id}`} className="icon-button">
                    <FontAwesomeIcon icon={faInfoCircle} />
                </Link>
                <Link to={`/edit/${creator.id}`} className="icon-button">
                    <FontAwesomeIcon icon={faEdit} />
                </Link>
        </div>
    </div>
);

export default CreatorCard