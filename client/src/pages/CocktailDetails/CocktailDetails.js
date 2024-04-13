import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import useDataFetcher from "src/hooks/useDataFetcher";
import { APIURLContext } from "src/contexts/APIURLContext";
import Recipe from "src/components/Recipe/Recipe";

function CocktailDetails() {

    const { id } = useParams();

    const apiURL = useContext(APIURLContext);
    const [cocktail, setCocktail] = useState();
    const [data, loading, error] = useDataFetcher(apiURL + '/cocktail/' + id);

    useEffect(() => {
        if (data) {
            setCocktail(data[0]);
        }
    }, [data]);

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    return (
        <div className="container mt-5">
            {cocktail && (
                <Recipe
                    key={cocktail.id}
                    id={cocktail.id}
                    cocktailName={cocktail.name}
                    cocktailId={cocktail._id}
                    image={cocktail.image}
                    category={cocktail.category}
                    ingredients={cocktail.ingredients}
                    glass={cocktail.glass}
                    garnish={cocktail.garnish}
                    preparation={cocktail.preparation}
                />
            )}
        </div>
    )
}

export default CocktailDetails;