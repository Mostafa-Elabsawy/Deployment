import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { User } from "./components/user/user";
import { Profiles } from "./components/profiles/profiles";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Profiles],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
