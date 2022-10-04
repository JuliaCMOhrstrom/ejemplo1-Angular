import { Component, OnInit } from '@angular/core';

import {faCoffee} from '@fortawesome/free-solid-svg-icons';
import {faFilm} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  icon = faCoffee;
  film = faFilm;

  constructor() { }

  ngOnInit(): void {
  }

}
