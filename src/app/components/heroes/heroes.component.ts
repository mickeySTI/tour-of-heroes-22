import { HeroService } from './../../services/hero.service';
import { Hero } from './../../models/hero.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes?: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  add(heroName: string): void {
    heroName = heroName.trim();
    if (!heroName) {
      return;
    }
    this.heroService.addHero({ name: heroName } as Hero).subscribe((hero) => {
      this.heroes?.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes?.filter((h) => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
}
