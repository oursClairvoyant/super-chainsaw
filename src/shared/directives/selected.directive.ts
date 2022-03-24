import { Directive, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective implements OnChanges{
  @Input() public appSelected: boolean = false;
  @HostBinding('style.backgroundColor') private BackgroundColor?: string ;
  @HostBinding('style.fontweight') private fontweight?: string;
  @HostBinding('style.color') private color?: string;
  ngOnChanges(changes: SimpleChanges): void {
    if(this.appSelected) {
      this.BackgroundColor = 'var(--primary)';
      this.fontweight = '500';
      this.color = "white";

    }else {
      this.BackgroundColor = 'white';
      this.fontweight = '400';
      this.color = "var(--text-regular)";


    }
  }
  constructor() { }

}
