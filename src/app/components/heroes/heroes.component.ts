import { HEROES } from './../../models/mock-heroes';
import { Hero } from './../../models/hero.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES
  @Input() selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }


  onSelect(hero:Hero){
    this.selectedHero = hero
  }

}
