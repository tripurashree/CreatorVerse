import { useState, useEffect } from "react";
import { supabase } from "../client";
import { useParams, useNavigate } from "react-router-dom";

const EditCreator = () => {
    const {id} = useParams();
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImageURL] = useState('');
    const navigate = useNavigate();

    useEffect(() =>{
        const fetchCreator = async() =>{
            const {data} = await supabase.from('creators').select().eq('id',id).single();
            setName(data.name);
            setUrl(data.url);
            setDescription(data.description);
            setImageURL(data.imageURL);
        };
        fetchCreator();
    },[id]);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await supabase.from('creators').update({name,url,description,imageURL}).eq('id',id);
        navigate('/creator/${id}');
    };

    const handleDelete = async(e) => {
        e.preventDefault();
        await supabase.from('creators').delete().eq('id',id);
        navigate('/');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={ (e) =>setName(e.target.value)} placeholder="Name" required/>
            <input type="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="URL" required/>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required/>
            <input type="url" value={imageURL} onChange={(e) => setImageURL(e.target.value)} placeholder="Image URL" required/>
            <button type="submit">Update Creator </button>
            <button type="button" onClick={handleDelete}>Delete Creator</button>
        </form>
    );
};

export default EditCreator;