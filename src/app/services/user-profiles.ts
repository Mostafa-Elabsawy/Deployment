import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
interface User_Info {
  name: string;
  email: string;
  bio: string;
}
interface APi {
  users: User_Info[];
  state:String;
  Number: Number;
}

@Injectable({
  providedIn: 'root',
})
export class UserProfiles {
  Http = inject(HttpClient);
  BaseUrl = 'https://user-profile-viewer.up.railway.app';
  getProfiles() {
    return this.Http.get<APi>(`${this.BaseUrl}/users/`);
  }
}
