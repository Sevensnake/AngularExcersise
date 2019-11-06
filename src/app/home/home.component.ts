import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import {Leaders} from '../shared/lead';
import {LeaderService } from '../services/leader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: Leaders;
  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leadservice: LeaderService) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish => this.dish = dish); // = this.dishservice.getFeaturedDish();
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion); // = this.promotionservice.getFeaturedPromotion();
    this.leadservice.getFeaturedLeaders().subscribe(leader => this.leader = leader); // = this.leadservice.getFeaturedLeaders();
  } // this.promotion = this.promotionservice.getFeaturedPromotion();
}
