import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  creditCard1 = new CreditCard(1111111111111111, 100, 'Sherri Snyder');
  creditCard2 = new CreditCard(2222222222222222, 5, 'Irma Fletcher');
  creditCard3 = new CreditCard(3333333333333333, 10, 'Sonia Jackson');
  validCreditCards: CreditCard[];
  
  constructor() {
    this.validCreditCards = [this.creditCard1, this.creditCard2, this.creditCard3];
  }
}

class CreditCard {
  private _cardNumber: number;
  private _currentAccountBalance: number;
  private _fullname: string;

  constructor(cardNumber: number, currentAccountBalance: number, fullname: string) {
    this._cardNumber = cardNumber;
    this._currentAccountBalance = currentAccountBalance;
    this._fullname = fullname;
  }

  get cardNumber(): number {
    return this._cardNumber;
  }

  set cardNumber(cardNumber: number) {
    this._cardNumber = cardNumber;
  }

  get currentAccountBalance(): number {
    return this._currentAccountBalance;
  }

  set currentAccountBalance(currentAccountBalance: number) {
    this._currentAccountBalance = currentAccountBalance;
  }

  get fullname(): string {
    return this._fullname;
  }

  set fullname(fullname: string) {
    this._fullname = fullname;
  }
}