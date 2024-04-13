const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CocktailSchema = new Schema({
    name: {type: String},
    image: {type: String},
    glass: {type: String},
    category: {type: String},
    ingredients: [
      {
        unit: {type: String},
        amount: {type: Number},
        ingredient: {type: String},
        label: {
            type: String,
            default: null
        },
        special: {
            type: String,
            default: null
        }
      }
    ],
    preparation: {type: String}
});

mongoose.model('recipes', CocktailSchema);