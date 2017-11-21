import {Component, Input , Output , EventEmitter } from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: 'accounts-list',
  templateUrl: './accounts_list.component.html',
  styleUrls: ['./accounts_list.component.css']
})

export class AccountsList{

  //private _selected:Array<boolean> = [false, false];

  @Input('accounts') _accounts:Array<Account>;

  // alert("account size "+this._accounts.size)

  @Output('delete') delete = new EventEmitter<Number>();

  private _remove(index:number){
    this.delete.emit(index);
  }


  //private select(index:number){
    //this._selected[index] = !this._selected[index];
  //}

}
