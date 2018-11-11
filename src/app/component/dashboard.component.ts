/**
 * Created by antoine on 20/06/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Hero } from '../entity/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: '../template/dashboard.html',
  styleUrls: ['../css/dashboard.css']
})

export class DashboardComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1, 5));
  }
}
