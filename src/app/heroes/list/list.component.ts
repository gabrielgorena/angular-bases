import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

public heroesName: string[] = ['Spiderman','Hulk','Antman'];
public deleteHeroesName?: string;

removeHeroesName():void {
  this.deleteHeroesName = this.heroesName.pop();
}
}
