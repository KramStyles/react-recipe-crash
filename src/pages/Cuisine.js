import {Link, useParams} from "react-router-dom";
import {motion} from "framer-motion";
import styled from "styled-components";
import {useEffect, useState} from "react";

export default function Cuisine() {
    // Use params allow us to fetch parameter from the url

    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]); // Use effect would mount when there's a change in Params

    const getCuisine = async (name) => {
        let data = localStorage.getItem(`${name}_cuisines`);
        if (data) {
            data = JSON.parse(data);
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=30&cuisine=${name}`);
            data = await api.json();
            localStorage.setItem(`${name}_cuisines`, JSON.stringify(data))
            console.log(`From api ${name}`, data)
        }

        setCuisine(data.results);
    }

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

    return (
        <Grid>
            {cuisine.map((recipe)=> {
                return (
                    <Card key={recipe.id}>
                        <img src={recipe.image} alt={recipe.title} />
                        <h4>{recipe.title}</h4>
                    </Card>
                )
            })}
        </Grid>
    )
}