import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',//组件名
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes=HEROES ;
	onSelect(hero: Hero): void {
		console.log(hero);
	  this.selectedHero = hero;
	}
  constructor() {
  	console.log(HEROES)
  }
  // OnInit 生命周期钩子,在创建组件后立即调用;
  ngOnInit() {
  		console.log("aaa")
  }

}
