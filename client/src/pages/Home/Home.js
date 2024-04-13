import { useContext, useEffect, useState } from "react";
import Cocktail from "src/components/Cocktail/Cocktail";
import { APIURLContext } from "src/contexts/APIURLContext";
import useDataFetcher from "src/hooks/useDataFetcher";

import 'src/pages/Home/Home.css';

function Home() {
    const apiURL = useContext(APIURLContext);
    const [cocktails, setCocktails] = useState([]);
    const [data, loading, error] = useDataFetcher(apiURL + '/cocktails');

    useEffect(() => {
        if (data) {
            setCocktails(data);
        }
    }, [data, cocktails]);

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }

    const cocktailsArray = Object.values(cocktails);

    return (
        <div>
            <div className="jumbotron text-white p-5">
                <h1 className="display-3">Calling all home cooks</h1>
                <p className="lead">Every cook knows how essential strong foundational skills in the kitchen is, and crafting a cocktail is no different.</p>
                <hr className="my-4" />
                <p>Add to your toolbox standard recipes provided by the International Bartenders Association</p>
            </div>
            <div className="container mt-3">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                {cocktailsArray?.map( (cocktail) => (
                    <Cocktail
                        key={cocktail?.id}
                        id={cocktail?.id}
                        cocktailName={cocktail?.name}
                        cocktailId={cocktail?._id}
                        image={cocktail?.image}
                    />
                ))}
                </div>
            </div>
        </div>
    )
}

export default Home;