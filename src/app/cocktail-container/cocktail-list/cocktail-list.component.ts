import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Cocktail } from 'src/shared/interfaces/cocktail.interface';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss'],
})
export class CocktailListComponent implements OnInit {
  @Input() cocktails?: Cocktail[];
  @Output() private changeCocktail: EventEmitter<number> = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  selectCocktail(index: number): void{
    this.changeCocktail.emit(index);


  }
}