import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';
import { Injectable } from '@angular/core';

const API = environment.apiURL;
@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  constructor(private http: HttpClient) {}

  get listPokemon(): Observable<any> {
    return this.http.get<any>(`${API}`).pipe(
      tap (response => response),
      tap(response => {
        response.results.map((returnPokemons: any) => {
          this.getPokemon(returnPokemons.url)
          .subscribe((response: any) =>
            (returnPokemons.status = response)
          );
        });
      })
    );
  }

  public getPokemon(url: string): Observable<any> {
    return this.http
      .get<any>(url)
      .pipe(map((response) => response));
  }
}
