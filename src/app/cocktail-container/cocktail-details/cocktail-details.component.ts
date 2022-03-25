import { Component, Input, OnInit } from '@angular/core';
import { Cocktail } from 'src/shared/interfaces/cocktail.interface';
import { PanierService } from 'src/shared/services/panier.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CocktailService } from 'src/shared/services/cocktail.service';
@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss'],
})
export class CocktailDetailsComponent implements OnInit {
  public cocktail!: Cocktail;
  private index!: string;

  constructor(
    private panierService: PanierService,
    private activatedRoute: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
     this.cocktail =  this.cocktailService.getCocktail(+(paramMap.get('index') as string));
    });
  }
  public addToPanier(): void {
    this.panierService.addToPanier(this.cocktail.ingredients);
  }
}
