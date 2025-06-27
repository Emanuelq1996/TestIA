import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-exhibitions',
  standalone: true,
  imports: [CommonModule],
  template: `
    <br>
    <br>
    <div class="container">
      <section class="gallery">
        <div class="item h3 v3" *ngFor="let image of exhibitionImages">
          <img [src]="image.src" [alt]="image.title">
          <div class="item__overlay">
            <button>Ver</button>
          </div>
        </div>
      </section>
    </div>
  `
})
export class ExhibitionsComponent {
  exhibitionImages = [
    { src: 'https://i.imgur.com/NNiManz.jpg', title: 'Muestra 1' },
    { src: 'https://i.imgur.com/V9X0vi1.jpg', title: 'Muestra 2' },
    { src: 'https://i.imgur.com/KWaQMUR.jpg', title: 'Muestra 3' },
    { src: 'https://i.imgur.com/fKyaHH4.jpg', title: 'Muestra 4' },
    { src: 'https://i.imgur.com/USHgzAe.jpg', title: 'Muestra 5' },
    { src: 'https://i.imgur.com/9JnmteE.jpg', title: 'Muestra 6' },
    { src: 'https://i.imgur.com/wtaql03.jpg', title: 'Muestra 7' },
    { src: 'https://i.imgur.com/nKbTaVp.jpg', title: 'Muestra 8' },
    { src: 'https://i.imgur.com/851rTUw.jpg', title: 'Muestra 9' },
    { src: 'https://i.imgur.com/LqrysjY.jpg', title: 'Muestra 10' }
  ];
}