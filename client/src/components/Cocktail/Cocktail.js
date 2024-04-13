import 'src/components/Cocktail/Cocktail.css';
import { Link } from 'react-router-dom';


function Cocktail( {cocktailName, image, cocktailId} ) {
    const imagePath = require(`../../images/${image}`);
    const altText = `A ${cocktailName} cocktail`;

    return (
        <div className="col">
        <div className="card my-1 border-dark">
            <div className="img-container">
                <img src={imagePath} className="card-img-top" alt={altText} style={ {height: "400px"} } />
            </div>
            <div className="d-flex justify-content-between px-1 py-2">
            <h4 className="align-self-center">{ cocktailName }</h4>
            <Link to={`/cocktail/${cocktailId}`} className="btn btn-secondary">Recipe</Link>
            </div>
        </div>
        </div>
    )
}

export default Cocktail;