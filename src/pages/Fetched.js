import styled from "styled-components";
import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const Grid = styled.div`
        display: Grid;
        grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
        grid-gap: 3rem;
    `;

const Card = styled.div`
        img{
            width: 100%;
            border-radius: 2rem;
        }
        a {
            text-decoration: none;
        }
        h4{
            text-align: center;
            padding: 1rem;
        }
    `;

export default function Fetched() {
    const [query, setQuery] = useState([])
    const navigate = useNavigate();
    let params = useParams();


    useEffect(() => {
        getQuery(params.search);
    }, [params.search]); // Use effect would mount when there's a change in Params

    const navigateTo = (ev) => {
        let current_info = ev.target.nextElementSibling.getAttribute('info');
        localStorage.setItem('current_info', current_info);
        navigate('/recipe');
    }

    const getQuery = async (name) => {
        let data = localStorage.getItem(`${name}_query`);
        if (data) {
            data = JSON.parse(data);
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=60&query=${name}`);
            data = await api.json();
            localStorage.setItem(`${name}_query`, JSON.stringify(data))
            console.log(`From api ${name}`, data)
        }

        setQuery(data.results);
    }


    return (
        <Grid>
            {query.map((recipe) => {
                return (
                    <Card key={recipe.id} onClick={navigateTo}>
                        <img src={recipe.image} alt={recipe.title} info={JSON.stringify(recipe)}/>
                        <h4>{recipe.title}</h4>
                    </Card>
                )
            })}
        </Grid>
    )
}