import { Link } from "react-router-dom";
import './CreatorCard.css';

const CreatorCard = ({ creator }) => (
    <div className="creator-card">
        <h2>{creator.name}</h2>
        <a href={creator.url} target="_blank" rel="noopener noreferrer">Visit</a>
        <p>{creator.description}</p>
        {creator.imageURL && <img src={creator.imageURL} alt={creator.name}/>}
        <p><button><Link to={`/edit/${creator.id}`}>Edit Creator</Link></button></p>
        <p><button><Link to={`/view/${creator.id}`}>View Creator</Link></button></p>
    </div>
);

export default CreatorCard