import { Direction } from './direction.model';

export class Entreprise {
  idEntreprise: number = 0;
  nomEntreprise: string = '';
  adresseEntreprise: string = '';
  emailEntreprise: string = '';
  directions: Direction[];

  constructor() {
    this.directions = [];
  }
}
