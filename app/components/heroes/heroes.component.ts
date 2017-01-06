import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../../Hero';
import { HeroService } from '../../service/hero.service';

//Component qui list les heros dans la page Heroes
@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private _heroService: HeroService,
    private _router: Router) {
  }

  //Permet de recuperer tout les heroes (pour la liste)
  getHeroes(): void {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  //Permet de selectionner un hero
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  //A l'init on recuper tout les heros pour la liste
  ngOnInit(): void {
    this.getHeroes();
  }

  //Le router permet d'aller sur la vue detail du hero selectionner
  gotoDetail(): void {
    this._router.navigate(['/detail', this.selectedHero.id]);
  }

  //Metode qui permet d'ajouter un hero
  add(name: string): void {
    name = name.trim();
    //On check si l'input est pas vide
    if (!name) {
      return alert('Il faut inserer un nom mec !');
    } else {
      var newHero = {
        id: this.heroes[this.heroes.length - 1].id + 1,
        name: name
      }
    }

    this._heroService.create(newHero).then(hero => {
      this.heroes.push(newHero);
      this.selectedHero = null;
    });
  }

  delete(hero: Hero): void {
    this._heroService.delete(hero.id).then(() => {
      this.heroes = this.heroes.filter(h => h !== hero);
      if (this.selectedHero === hero) {
        this.selectedHero = null;
      }
    })

  }


}



