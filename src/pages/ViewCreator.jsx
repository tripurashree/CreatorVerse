import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../client";
import './ViewCreator.css';

const ViewCreator = () => {
    const { id } = useParams();
    const [creator, setCreator] = useState(null);

    useEffect(() => {
        const fetchCreator = async () => {
            const { data } = await supabase.from('creators').select().eq('id', id).single();
            setCreator(data);
        };
        fetchCreator();
    }, [id]);

    return creator ? (
        <div className="view-creator">
            <h2>{creator.name}</h2>
            {creator.imageURL && <img src={creator.imageURL} alt={creator.name} />}
            <p>{creator.description}</p>
            <button href={creator.url} target="_blank" rel="noopener noreferrer">Visit Website</button>
        </div>
    ) : (
        <p>Loading....</p>
    );
};

export default ViewCreator;
