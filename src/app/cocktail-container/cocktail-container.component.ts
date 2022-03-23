import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Cocktail } from 'src/shared/interfaces/cocktail.interface';
import { CocktailService } from 'src/shared/services/cocktail.service';
@Component({
  selector: 'app-cocktail-container',
  templateUrl: './cocktail-container.component.html',
  styleUrls: ['./cocktail-container.component.scss'],
})
export class CocktailContainerComponent implements OnInit {
  public cocktails!: Cocktail[];
  public selectedCocktail!: Cocktail;
  public subscription: Subscription = new Subscription();

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.cocktailService.cocktails.subscribe((cocktails: Cocktail[]) => {
        this.cocktails = cocktails;
      })
    );
    this.subscription.add(
      this.cocktailService.selectedCocktail.subscribe(
        (selectedCocktail: Cocktail) => {
          this.selectedCocktail = selectedCocktail;
        }
      )
    );
  }
  public selectCocktail(index: number): void {
    this.selectedCocktail = this.cocktails[index];
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
