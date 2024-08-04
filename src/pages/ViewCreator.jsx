import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";

const ViewCreator=()=>{
    const {id} = useParams();
    const [creator, setCreator] = useState(null)

    useEffect(()=>{
        const fetchCreator= async()=>{
            const {data} = await supabase.from('creators').select().eq('id',id).single();
            setCreator(data);
        };
        fetchCreator();
    },[id])

    return creator? <CreatorCard creator={creator}/>:
    <p>Loading....</p>
}

export default ViewCreator;