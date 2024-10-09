import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
})
export class ListComponent2 {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  public onDeleteCharacter( id?: string ):void {
    // TODO Emitir el ID del personaje
    if ( !id ) return;
    this.onDelete.emit( id )
  }
}
