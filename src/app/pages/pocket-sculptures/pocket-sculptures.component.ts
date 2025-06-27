import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pocket-sculptures',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <br>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-md-4" *ngFor="let item of sculptureItems">
              <a [routerLink]="['/esculturas-bolsillo', item.route]">
                <img class="work-image" [src]="item.image" [alt]="item.title">
              </a>
              <a [routerLink]="['/esculturas-bolsillo', item.route]" style="text-decoration:none; color:inherit;">
                <p style="text-align: center;">{{ item.title }}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PocketSculpturesComponent {
  sculptureItems = [
    {
      title: 'Obra 1',
      route: 'obra1',
      image: 'https://i.imgur.com/CJFNpAD.jpg'
    },
    {
      title: 'Obra 2',
      route: 'obra2',
      image: 'https://i.imgur.com/XhKVjvb.jpg'
    },
    {
      title: 'Dientes',
      route: 'dientes',
      image: 'https://i.imgur.com/NllXefO.jpg'
    }
  ];
}