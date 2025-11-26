import { Component, Input, input } from '@angular/core';

interface User_Info {
  name: string;
  email: string;
  bio: string;
}
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
})
export class User {
  @Input() info!: User_Info;
}
