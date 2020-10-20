import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent {

  product1 = new ProductSolid(1, 'Oreos', 20, 1.50, 'image/oreo-transparente.png', 160);
  product2 = new ProductSolid(2, 'Cacahuetes', 20, 1.00, 'image/cacahuetes-transparente.png', 150);
  product3 = new ProductSolid(3, 'Lays Classic', 20, 1.50, 'image/lays-transparente.png', 150);
  product4 = new ProductSolid(4, 'M&Ms', 20, 1.50, 'image/emanems-transparente.png', 150);
  product5 = new ProductSolid(5, 'Mikado', 20, 1.00, 'image/mikado-transparente.png', 75);
  product6 = new ProductSolid(6, 'Pringles', 20, 1.25, 'image/pringles-transparente.png', 40);
  product7 = new ProductSolid(7, 'Donuts', 20, 1.50, 'image/donuts-transparente.png', 150);
  product8 = new ProductSolid(8, 'Palomitas', 20, 1.50, 'image/palomitas-transparente.png', 150);
  //  product9 = new ProductSolid(9, 'Ruffles Original', 20, 1.50, 'image/ruffles.png', 150);
  //  product10 = new ProductSolid(10, 'Cheetos', 20, 1.50, 'image/cheetos.png', 150);
  //  product11 = new ProductSolid(11, 'Doritos', 20, 1.50, 'image/doritos.png', 150);
  //  product12 = new ProductSolid(12, 'KitKat', 20, 1.50, 'image/kitkat.png', 150);

  product9 = new ProductLiquid(9, 'Coca-cola', 20, 1.00, 'image/cocacola-transparente.png', 33, false);
  product10 = new ProductLiquid(10, 'Heineken', 20, 1.00, 'image/heineken-transparente.png', 33, true);
  product11 = new ProductLiquid(11, 'Pepsi', 20, 1.00, 'image/pepsi-transparente.png', 33, false);
  product12 = new ProductLiquid(12, 'Agua', 20, 0.75, 'image/agua-transparente.png', 33, false);

  //Array de productos
  products: Product[][];
  constructor() {
    this.products = [
      [this.product1, this.product2, this.product9],
      [this.product3, this.product4, this.product10],
      [this.product5, this.product6, this.product11],
      [this.product7, this.product8, this.product12]];
  }
}

abstract class Product {
  private _id: number;
  private _name: string;
  private _units: number;
  private _prize: number;
  private _src: string;//src de la imagen

  constructor(id: number, name: string, units: number, prize: number, src: string) {
    this._id = id;
    this._name = name;
    this._units = units;
    this._prize = prize;
    this._src = src;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get units(): number {
    return this._units;
  }

  set units(units: number) {
    this._units = units;
  }

  get prize(): number {
    return this._prize;
  }

  set prize(prize: number) {
    this._prize;
  }

  get src(): string {
    return this._src
  }

  set src(src: string) {
    this._src = src;
  }

  sold(): void {
    console.log(`El producto ${this._name} ha sido vendido`);
  }
}

class ProductSolid extends Product {
  private _weigth: number;
  constructor(id: number, name: string, units: number, prize: number, src: string, weigth: number) {
    super(id, name, units, prize, src);
    this._weigth = weigth;
  }

  get weigth(): number {
    return this._weigth;
  }

  set weigth(weigth: number) {
    this._weigth = weigth;
  }
}

class ProductLiquid extends Product {
  private _ml: number;
  private _isAlcoholic: boolean;
  constructor(id: number, name: string, units: number, prize: number, src: string, ml: number, isAlcoholic: boolean) {
    super(id, name, units, prize, src);
    this._ml = ml;
    this._isAlcoholic = isAlcoholic;
  }

  get ml(): number {
    return this._ml;
  }
  set ml(ml: number) {
    this._ml = ml;
  }

  get isAlcoholic(): boolean {
    return this._isAlcoholic;
  }

  set isAlcoholic(isAlcoholic: boolean) {
    this._isAlcoholic = isAlcoholic;
  }
}