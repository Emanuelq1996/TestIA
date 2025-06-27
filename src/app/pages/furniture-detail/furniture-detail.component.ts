import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalleryModalComponent, GalleryImage } from '../../components/gallery-modal/gallery-modal.component';

@Component({
  selector: 'app-furniture-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, GalleryModalComponent],
  template: `
    <br>
    <br>
    <header>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a routerLink="/">Inicio</a></li>
        <li class="breadcrumb-item"><a routerLink="/muebles">Muebles de Autor</a></li>
        <li class="breadcrumb-item active">{{ itemTitle }}</li>
      </ol>
    </header>

    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="row">
            <div class="col-sm-4" *ngFor="let image of images; let i = index">
              <img [src]="image.src" 
                   class="img-fluid box-image" 
                   [alt]="image.title"
                   (click)="openModal(i)"
                   style="cursor: pointer;">
            </div>
          </div>
        </div>
      </div>
    </div>

    <app-gallery-modal
      [images]="images"
      [currentIndex]="currentImageIndex"
      [isVisible]="isModalVisible"
      (closed)="closeModal()"
      (indexChanged)="currentImageIndex = $event">
    </app-gallery-modal>
  `
})
export class FurnitureDetailComponent implements OnInit {
  item: string = '';
  itemTitle: string = '';
  images: GalleryImage[] = [];
  isModalVisible = false;
  currentImageIndex = 0;

  private furnitureItems: { [key: string]: { title: string, images: GalleryImage[] } } = {
    banqueta: {
      title: 'Banqueta',
      images: [
        { src: 'https://i.imgur.com/Y2wvFf7.jpg' },
        { src: 'https://i.imgur.com/OW1eUJV.jpg' }
      ]
    },
    mesa: {
      title: 'Pide pan, no le dan',
      images: [
        { src: 'https://i.imgur.com/YDBNThv.jpg', footer: 'Mueble/Obra' },
        { src: 'https://i.imgur.com/aGwcltH.jpg', footer: 'Mueble/Obra' }
      ]
    },
    silla: {
      title: 'Silla Canguro',
      images: [
        { src: 'https://i.imgur.com/HQqgQ6g.jpg' },
        { src: 'https://i.imgur.com/W9BIzhw.jpg' },
        { src: 'https://i.imgur.com/KxGaZZd.jpg' }
      ]
    },
    guardaespaldas: {
      title: 'Silla Guardaespaldas',
      images: [
        { src: 'https://i.imgur.com/n5v5hGI.jpg' },
        { src: 'https://i.imgur.com/Pc2lgR0.jpg' },
        { src: 'https://i.imgur.com/JstZ7HW.jpg' },
        { src: 'https://i.imgur.com/ls3RBLx.jpg' },
        { src: 'https://i.imgur.com/GB3mYPz.jpg' },
        { src: 'https://i.imgur.com/RKubvAv.jpg' },
        { src: 'https://i.imgur.com/amQTQuX.jpg' }
      ]
    },
    sentauro: {
      title: 'Sentauro',
      images: [
        { src: 'https://i.imgur.com/LrBjtcc.jpg', footer: 'Técnica: talla y ensamble con silla. Material: madera (cedro y paraíso)' }
      ]
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.item = params['item'];
      const itemData = this.furnitureItems[this.item];
      if (itemData) {
        this.itemTitle = itemData.title;
        this.images = itemData.images;
      }
    });
  }

  openModal(index: number) {
    this.currentImageIndex = index;
    this.isModalVisible = true;
  }

  closeModal() {
    this.isModalVisible = false;
  }
}