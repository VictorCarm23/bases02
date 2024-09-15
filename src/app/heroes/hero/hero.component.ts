import { Component } from '@angular/core';

@Component({
  //app-heroes-list
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Spiderman';
  public age: number = 25;
  typicalPhrase(): string {
    return 'Im Spiderman';
  }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age} years old`;
  }

  changeHero(): void {
    this.name = 'Ironman';
  }

  changeAge(): void {
    this.age = 30;
  }

  resetForm(): void {
    this.name = 'Spiderman';
    this.age = 25;
  }
}
