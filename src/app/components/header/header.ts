import { Component, inject, signal } from '@angular/core';
import { UserProfiles } from '../../services/user-profiles';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  providers: [UserProfiles],
})
export class Header {
  
}
