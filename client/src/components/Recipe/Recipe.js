import 'src/components/Recipe/Recipe.css';

function Recipe( {cocktailName, image, category, ingredients, glass, garnish, preparation} ) {

    const imagePath = require(`../../images/${image}`);

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
                <div className="card mb-3">
                    <img className="card-img img-fluid" src={imagePath} alt={`A ${cocktailName} cocktail`} />
                    <div className="card-img-overlay d-flex align-items-end">
                        <h2 style={ {fontFamily: "Lobster"} }>{cocktailName}</h2>
                    </div>
                </div>
            </div>

            <div className="col-12 col-md-6 col-lg-8">
                <div className="d-flex justify-content-start">
                    <span className="mb-3 px-2 py-1 fw-semibold text-warning-emphasis bg-warning-subtle border border-warning-subtle rounded-2">{category || "Uncategorized"}</span>
                </div>
                <div className="card text-start">
                    <h2 className="card-header text-white">Ingredients</h2>
                    {ingredients.map((ingredient, index) => (
                        <div className="row" key={index}>
                            {ingredient.ingredient && (
                                <p className="col-12 ms-3">{ingredient.ingredient} - {ingredient.amount} {ingredient.unit}</p>
                            )}
                            {ingredient.special && (
                                <p className="col-12 ms-3">{ingredient.special}</p>
                            )}
                        </div>
                    ))}
                </div>

                <div className="card text-start mt-3">
                    <h2 className="card-header text-white">Prep</h2>
                    <p className="ms-3"><i class="bi bi-cup-straw" style={ {fontSize: "2rem"} }></i> {glass && capitalizeFirstLetter(glass)}</p>
                    {garnish && (
                        <div>
                            <p className="ms-3"><i class="bi bi-stars" style={ {fontSize: "2rem"} }></i> {garnish}</p>
                        </div>
                    )}
                </div>

                <div className="card text-start mt-3">
                    <h2 className="card-header text-white">Instructions</h2>
                    <p className="card-text m-3">{preparation}</p>
                </div>
            </div>
        </div>
    )
}

export default Recipe;