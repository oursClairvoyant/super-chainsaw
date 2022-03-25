import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/shared/interfaces/ingredient.interface';
import { PanierService } from 'src/shared/services/panier.service';

@Component({
  selector: 'app-panier-container',
  templateUrl: './panier-container.component.html',
  styleUrls: ['./panier-container.component.scss']
})
export class PanierContainerComponent implements OnInit, OnDestroy {
  public ingredients : Ingredient[] = [];
  public subscription = new Subscription();
  constructor(private panierService: PanierService) { }

  ngOnInit(): void {
    this.subscription.add(this.panierService.ingredients.subscribe((ingredients: Ingredient[]) =>{
      this.ingredients = ingredients;
    })
    )}
    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

}
