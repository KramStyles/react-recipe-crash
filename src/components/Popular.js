import {useEffect, useState} from "react";

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
        <div>
            Popular
            {popular.map(recipe => {
                return (
                  <pre>{recipe.title}</pre>  
                );
            })}
        </div>
    )
}
