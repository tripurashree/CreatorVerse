import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import './AddCreator.css';

const AddCreator = () =>{
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    const [description, setDescription] = useState('')
    const [imageURL, setImageURL] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        await supabase.from('creators').insert([{name,url,description,imageURL}]);
        navigate('/')
    };

    return(
        <form onSubmit = {handleSubmit}>
            <label>
                Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder = "Name" required/>
            </label>
            <label>
                Website URL:
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder = "WebsiteURL" required/>
            </label>
            <label>
                Description:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder = "Description" required/>
            </label>
            <label>
                Image URL:
                <input type="text" value={imageURL} onChange={(e) => setImageURL(e.target.value)} placeholder = "imageURL" required/>
            </label>
            <button type="submit">Add Creator</button>
        </form>
    );

};

export default AddCreator;