import { Component,ViewChild, Injector } from '@angular/core';
import { Account } from './account.model';
import {AccountsList} from './accounts_list.component';
import {AccountForm} from './account_form.component';
import {AccountService } from './account.services';
import {LoggerService} from "../util/logger.service";

@Component({
  selector: 'accounts',
  //template: `<h1>Hello {{name}}</h1>`,
  templateUrl: 'app/account/account.component.html',
  //styles: ['.blue-bg{background-color:blue;}']
  styleUrls:['app/account/account.component.css'],
  // directives:[AccountsList,AccountForm]
  providers:[AccountService,LoggerService]
})
export class AccountComponent  {

 // private form:AccountForm;

 @ViewChild(AccountForm) form:AccountForm;


  private createAccErr:string="";
  //private accLimit:number = 3;

  private _accounts:Array<Account>;

  private _accountService:AccountService;

  constructor(accountService: AccountService){
    this._accountService = accountService;
    var promise = this._accountService.getAll();
    promise.then(accounts => this._accounts = accounts);
  }

/*
  private createAcc(titleE1:any, descE1:any, balE1:any){
    this._accounts.push(new Account(this._nextId,titleE1.value,descE1.value,balE1.value))
    //this._selected.push(false)
    this._nextId++

    titleE1 = ""
    descE1 = ""
    balE1 = 0

  }

*/
  private createAcc(newAccount:Account){
    this._accountService.create(newAccount)
    .then(account => {
      console.log(account);
      this.createAccErr = "";
      this.form.resetForm();
    })
    .catch(err => this.createAccErr = err);
}
    private removeAcc(index:number){
      alert("ready to remove");
      this._accountService.remove(index);
    }
 }



interface User{
  username:string,
  email:string

}
