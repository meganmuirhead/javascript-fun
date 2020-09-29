import {Component, OnInit, SimpleChanges} from '@angular/core';
import {Hero} from '../interface/hero';
import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  ngOnInit(): void {
    console.log(this.hero);

  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;

  }

}
