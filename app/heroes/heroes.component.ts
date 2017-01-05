import { Component , OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../service/hero.service';


@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
})
export class HeroesComponent implements OnInit {
 
  heroes:Hero[];
  selectedHero: Hero;

  constructor(private _heroService:HeroService){
    
  }

  getHeroes():void {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}



