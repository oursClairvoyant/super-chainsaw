import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Ingredient } from '../interfaces/ingredient.interface';
@Injectable({
  providedIn: 'root',
})
export class PanierService {
  public ingredients: BehaviorSubject<Ingredient[]> = new BehaviorSubject<
    Ingredient[]
  >([]);

  constructor() {}

  public addToPanier(ingredients: Ingredient[]): void {
    const currentValue = this.ingredients.value;
    console.log(currentValue);
    
    if (currentValue) {
      const fullArray = [...currentValue, ...ingredients]; //{}
      const obj = fullArray.reduce((acc: any, value) => {
        if (acc[value.name]) {
          acc[value.name] += value.quantity;
        } else {
          acc[value.name] = value.quantity;
        }
        return acc;
      }, {});
      const result = Object.keys(obj).map((key) => ({
        name: key,
        quantity: obj[key],
      }));
      console.log(result)
      this.ingredients.next(result);
    } else {
      this.ingredients.next(ingredients);
    }
  }
}
