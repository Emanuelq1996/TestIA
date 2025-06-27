import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-furniture',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <br>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-4" *ngFor="let item of furnitureItems">
              <a [routerLink]="['/muebles', item.route]">
                <img class="work-image" [src]="item.image" [alt]="item.title">
              </a>
              <a [routerLink]="['/muebles', item.route]" style="text-decoration:none; color:inherit;">
                <p style="text-align: center;" [innerHTML]="item.title"></p>
              </a>
            </div>
          </div>
        </div>
        
        <div class="col-md-3">
          <small>
            <p align="center" class="text-muebles">
              Muebles únicos. Mobiliario con tallas o elementos escultóricos incorporados, 
              que hacen del utilitario un objeto artístico.
            </p>
          </small>
          <small>
            <p align="center" class="text-muebles-small">
              En las imágenes publicadas se aprecian algunos ejemplos a la venta. 
              Comunicarse por encargues.
            </p>
          </small>
        </div>
      </div>
    </div>
  `
})
export class FurnitureComponent {
  furnitureItems = [
    {
      title: 'Banqueta',
      route: 'banqueta',
      image: 'https://i.imgur.com/Y2wvFf7.jpg'
    },
    {
      title: 'Mueble/Obra<br>Pide pan, no le dan',
      route: 'mesa',
      image: 'https://i.imgur.com/YDBNThv.jpg'
    },
    {
      title: 'Silla Canguro',
      route: 'silla',
      image: 'https://i.imgur.com/KxGaZZd.jpg'
    },
    {
      title: 'Silla Guardaespaldas',
      route: 'guardaespaldas',
      image: 'https://i.imgur.com/RKubvAv.jpg'
    },
    {
      title: 'Sentauro',
      route: 'sentauro',
      image: 'https://i.imgur.com/LrBjtcc.jpg'
    }
  ];
}