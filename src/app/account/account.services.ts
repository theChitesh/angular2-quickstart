import {Injectable, Optional} from '@angular/core';
import {Account} from "./account.model";
import {LoggerService} from "../util/logger.service";

@Injectable()
export class AccountService{

  constructor(@Optional() private _logger:LoggerService){};


  private _accounts:Array<Account> = [
    { id:1,
      title: "Bank XYZ",
      description:"This is my main bank account",
      balance: 500
    },
    { id:2,
      title: "Bank Rowdy",
      description:"This is Rowdy bank account",
      balance: 5000
    }];
    private _accountsLimit:number = 3;

    public getAll():Promise<Array<Account>>{
      return Promise.resolve(this._accounts);
    }

    private _nextId = 3;

    public create(newAccount:Account){

      return new Promise((resolve,reject) => {
        if(this._accounts.length >= this._accountsLimit){
          reject("Maximum account limit reached !");
          return;
        }
        newAccount.id = this._nextId++;
        if(this._logger)
          this._logger.log('Account created: '+newAccount.title);
        this._accounts.push(newAccount);
        resolve(newAccount);
      });
    }

    public remove(index:number){
      if(this._logger)
        this._logger.log('Account deleted: '+this._accounts[index].title);

      this._accounts.splice(index,1);
    }


}
