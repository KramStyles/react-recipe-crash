import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import styled from "styled-components";
import {useEffect, useState} from "react";

// Create styled wrapper

const Wrapper = styled.div`
    margin:2rem;
`;

const Card = styled.div`
    min-height: 25rem;
    overflow: hidden;
    
    img{
        border-radius: 2rem;
        width: 100%
    }
`

export default function Popular() {
    const [popular, setPopular] = useState([]);

    // Run function as soon as the component gets loaded
    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        let data = undefined;
        if (localStorage.getItem('random_recipes')) {
            data = JSON.parse(localStorage.getItem('random_recipes'));
            console.log('From localstorage', data)
        } else {
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=18`);
            data = await api.json();
            localStorage.setItem('random_recipes', JSON.stringify(data))
            console.log('From api', data)
        }

        setPopular(data.recipes);
    }
    return (
        <Wrapper>
            <h4>Popular</h4>
            <Splide options={{
                perPage: 3,
                rewind: true,
                arrows: false,
                drag: 'free',
                pagination: false,
                gap: '2rem'
            }}>
                {popular.map(recipe => {
                    return (
                        <SplideSlide>
                            <Card key={recipe.id}>
                                <p>{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title}/>
                            </Card>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </Wrapper>
    )
}
