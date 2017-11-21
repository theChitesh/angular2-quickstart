import{Component, Output , EventEmitter,Input, ViewChild, ElementRef} from '@angular/core';
import{Account} from './account.model';

@Component({
  selector:'account-form',
  templateUrl: './account_form.component.html',
  styleUrls: ['./account_form.component.css']
})

export class AccountForm{

  @Output() created = new EventEmitter<Account>();


  private createAccF(titleE1:any,descE1:any, balE1:any){
    var newAccount:Account = new Account(0,titleE1.value,descE1.value,balE1.value);
    this.created.emit(newAccount);
  }

  @Input() error:string;

  @ViewChild('form') form:ElementRef;

  public resetForm(){
    this.form.nativeElement.reset();
  }
}
