import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    // private http: HttpClient
  ) { }

  enterprises: any[] = [
    {
      "id": 1,
      "name": "Capcom"
    },
    {
      "id": 2,
      "name": "Square Enix"
    },
    {
      "id": 3,
      "name": "Ubisoft"
    },
    {
      "id": 4,
      "name": "Devolver Digital"
    },
    {
      "id": 5,
      "name": "Naughty Dog"
    },
  ];

  getGameDevelopers(){
    return this.enterprises;
  }
}
