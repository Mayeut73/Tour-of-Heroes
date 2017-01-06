import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Hero }           from '../Hero';
@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}


  search(term: string): Observable<Hero[]> {
    return this.http
               .get(`http://localhost:3000/hero?name_like=${term}`)
               .map((r: Response) => r.json() as Hero[]);
  }
}
