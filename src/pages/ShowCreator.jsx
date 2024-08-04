import { useState, useEffect } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard"
import '../components/CreatorCard.css';

const ShowCreator = () => {
    const [creators, setCreators] = useState([]);

    useEffect(()=> {
        const fetchCreators = async() => {
            const { data } = await supabase.from('creators').select();
            setCreators(data);
        };
        fetchCreators();
    },[]);

    return (
        <div className="card-container">
            {creators.length? creators.map(creator => (
                < CreatorCard key={creator.id} creator={creator} />

            )) : <p> No content creators found</p>}
        </div>
    );
}

export default ShowCreator;