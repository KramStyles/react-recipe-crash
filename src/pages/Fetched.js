import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function Fetched() {
    const [query, setQuery] = useState([])
    let params = useParams();

    useEffect(() => {
        // getQuery(params.search);
        console.log(params.search);
    }, [params.search]); // Use effect would mount when there's a change in Params

    const getQuery = async (name) => {
        let data = localStorage.getItem(`${name}_query`);
        if (data) {
            data = JSON.parse(data);
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=30&query=${name}`);
            data = await api.json();
            localStorage.setItem(`${name}_query`, JSON.stringify(data))
            console.log(`From api ${name}`, data)
        }

        setQuery(data.results);
    }

    return (
        <div>
            <h1>This is the fetched page. Let's get {params.search}</h1>
        </div>
    )
}