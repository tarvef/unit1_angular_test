import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users: any[] = [
    {
      "id": 1,
      "name": "Fernando Tarango (developer)"
    },
    {
      "id": 2,
      "name": "Brayan Prieto"
    },
    {
      "id": 3,
      "name": "Edgar Rivas"
    },
    {
      "id": 4,
      "name": "Gabriela Rojas"
    },
    {
      "id": 5,
      "name": "Paulina Torres"
    },
  ]

  getUsers(){
    return this.users;
  }
}
