import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Hero } from '../Hero';


@Injectable()
export class HeroService {

    urlHeroes: string = 'http://localhost:3000/hero';
    headers = new Headers({ 'Content-Type': 'application/json' });


    constructor(private _http: Http) {

    }

    //Methode qui recupere les heros
    getHeroes(): Promise<Hero[]> {
        return this._http
            .get(this.urlHeroes)
            .toPromise()
            .then((response: Response) => response.json() as Hero[])
            .catch(this.handleError);
    }


    //Methode qui recupere un hero
    getHero(id: number): Promise<Hero>{
        return this._http
            .get(this.urlHeroes + '/' + id)
            .toPromise()
            .then((response: Response) => response.json() as Hero)
            .catch(this.handleError);
    }

    //Methode pour modifier un hero
    update(hero: Hero) {
        return this._http.put(this.urlHeroes + '/' + hero.id, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(newHero: Hero) {
        return this._http.post(this.urlHeroes, JSON.stringify(newHero), { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);

    }

    delete(id: number) {
        return this._http.delete(this.urlHeroes + '/' + id, { headers: this.headers })
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }



}
