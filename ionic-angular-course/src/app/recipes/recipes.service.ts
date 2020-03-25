import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Schnitzel",
      imageUrl: "https://www.thespruceeats.com/thmb/oAls2Y49HemUbrDOUAdv14Mk3V8=/4288x2412/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg",
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: "r2",
      title: "Spaghetti",
      imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg",
      ingredients: ['Spaghetti', 'Meat', 'Tomatos']
    }
  ];
  
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = [...this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })];
  }
}
