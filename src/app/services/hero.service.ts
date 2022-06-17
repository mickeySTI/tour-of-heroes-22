import { MessageService } from './message.service';
import { HEROES } from './../models/mock-heroes';
import { Hero } from './../models/hero.interface';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class HeroService{


  getHeroes():Observable<Hero[]
  >{
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes')
    return heroes
  }

  constructor(private messageService: MessageService){}

}
