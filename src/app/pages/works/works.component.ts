import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <br>
    <br>
    <br>
    <div class="container">
      <div class="row">
        <div class="col-md-4" *ngFor="let section of workSections">
          <a [routerLink]="['/obras', section.route]">
            <img class="work-image" [src]="section.image" [alt]="section.title">
          </a>
          <a [routerLink]="['/obras', section.route]" style="text-decoration:none; color:inherit;">
            <p style="text-align: center;">{{ section.title }}</p>
          </a>
        </div>
      </div>
    </div>
    <br>
    <br>
    
    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Bootstrap 2020</p>
      </div>
    </footer>
  `
})
export class WorksComponent {
  workSections = [
    {
      title: 'Obras 1',
      route: 'obras1',
      image: 'https://i.imgur.com/DhVAvdc.jpg'
    },
    {
      title: 'Obras 2',
      route: 'obras2',
      image: 'https://i.imgur.com/U5SdM7O.jpg'
    },
    {
      title: 'Obras 3',
      route: 'obras3',
      image: 'https://i.imgur.com/U9zTibb.jpg'
    },
    {
      title: 'Obras 4',
      route: 'obras4',
      image: 'https://i.imgur.com/7LLaYLC.jpg'
    },
    {
      title: 'Obras 5',
      route: 'obras5',
      image: 'https://imgur.com/DETA9Y2.jpg'
    },
    {
      title: 'Encargos-Monumentos',
      route: 'encargos',
      image: 'https://i.imgur.com/3pWwNEU.jpg'
    }
  ];
}