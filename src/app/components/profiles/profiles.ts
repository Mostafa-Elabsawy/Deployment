import { Component, inject, signal } from '@angular/core';
import { User } from '../user/user';
import { UserProfiles } from '../../services/user-profiles';
interface User_Info {
  name: string;
  email: string;
  bio: string;
}
@Component({
  selector: 'app-profiles',
  imports: [User],
  templateUrl: './profiles.html',
  providers: [UserProfiles],
})
export class Profiles {
  profiles =signal< User_Info[]>([]);
  service = inject(UserProfiles);
  ngOnInit() {
    this.service.getProfiles().subscribe({
      next: (res) => {
        this.profiles.set(res.users); 
      },
    });
  }
}
