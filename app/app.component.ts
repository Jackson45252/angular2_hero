import { Component } from '@angular/core';
import { Hero } from './heroDetail/hero';
const HEROES: Hero[] = [
  { id: 11, name: 'Mr.Nice' , power: 'magic'},
  { id: 12, name: 'Narco' ,power: 'magic'},
  { id: 13, name: 'Bombasto' ,power: 'magic'},
  { id: 14, name: 'Celeritas' ,power: 'magic'},
  { id: 15, name: 'Magneta' ,power: 'magic'},
  { id: 16, name: 'RubberMan' ,power: 'magic'},
  { id: 17, name: 'Dynama' ,power: 'magic'},
  { id: 18, name: 'Dr.IQ' ,power: 'magic'},
  { id: 19, name: 'Magma' ,power: 'magic'},
  { id: 20, name: 'Tornado',power: 'magic' }
];
@Component({
  selector: 'my-app',
  templateUrl: './app/app.template.html',
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
