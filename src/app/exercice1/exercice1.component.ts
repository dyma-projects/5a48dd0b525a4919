import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public interpolationExemple: string;
  public compteur: number = 0;
  public nom: string = 'scadot';
  public avatarImg: string;

  constructor() { }

  ngOnInit() {
    this.interpolationExemple = "Exemple pour l'interpolation";
    this.avatarImg = 'https://avatars2.githubusercontent.com/u/10340004?s=40&v=4';
  }

  addCompteur(): void {
    this.compteur++;
  }
}
