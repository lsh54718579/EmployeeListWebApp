//This class is needed for httpClient connection
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {


  //needed for rest api/communicate with port 8080
  private baseURL = "http://localhost:8080/api/v1/characters";

  constructor(private httpClient: HttpClient) { }

  getCharacterList():  Observable<Character[]>{
    return this.httpClient.get<Character[]>(`${this.baseURL}`);
  }

  addCharacter(character: Character): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, character);
  }

  getCharacterById(id: number): Observable<Character>{
    return this.httpClient.get<Character>(`${this.baseURL}/${id}`)
  }

  updateCharacter(id: number, character: Character):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, character);
  }

  deleteCharacter(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
