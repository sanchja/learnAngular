import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }
  getAllUsers() {
    return this.http.get(this.apiUrl);
  }
}
