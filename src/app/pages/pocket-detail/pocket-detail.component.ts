import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalleryModalComponent, GalleryImage } from '../../components/gallery-modal/gallery-modal.component';

@Component({
  selector: 'app-pocket-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, GalleryModalComponent],
  template: `
    <br>
    <br>
    <header>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a routerLink="/">Inicio</a></li>
        <li class="breadcrumb-item"><a routerLink="/esculturas-bolsillo">Esculturas de bolsillo</a></li>
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
export class PocketDetailComponent implements OnInit {
  item: string = '';
  itemTitle: string = '';
  images: GalleryImage[] = [];
  isModalVisible = false;
  currentImageIndex = 0;

  private pocketItems: { [key: string]: { title: string, images: GalleryImage[] } } = {
    obra1: {
      title: 'Obra 1',
      images: [
        { src: 'https://i.imgur.com/CJFNpAD.jpg', footer: 'Técnica: talla. Material: mármol de Carrara' },
        { src: 'https://i.imgur.com/iio25zx.jpg', footer: 'Técnica: talla. Material: mármol de Carrara' },
        { src: 'https://i.imgur.com/DP9gtkw.jpg', footer: 'Técnica: talla. Material: mármol de Carrara' },
        { src: 'https://i.imgur.com/4XWPGRs.jpg', footer: 'Técnica: talla. Material: mármol de Carrara' },
        { src: 'https://i.imgur.com/c1MsdJQ.jpg', footer: 'Técnica: talla. Material: mármol de Carrara' },
        { src: 'https://i.imgur.com/qbDCS43.jpg', footer: 'Técnica: talla. Material: mármol de Carrara' }
      ]
    },
    obra2: {
      title: 'Obra 2',
      images: [
        { src: 'https://i.imgur.com/XhKVjvb.jpg', footer: 'Técnica: talla. Material: mármol de Carrara' },
        { src: 'https://i.imgur.com/srN6y9k.jpg', footer: 'Técnica: talla. Material: mármol de Carrara' },
        { src: 'https://i.imgur.com/Q6i0aRo.jpg', footer: 'Técnica: talla. Material: mármol de Carrara' },
        { src: 'https://i.imgur.com/LrDOE2Y.jpg', footer: 'Técnica: talla. Material: mármol de Carrara' },
        { src: 'https://i.imgur.com/OmufoLa.jpg', footer: 'Técnica: talla. Material: mármol de Carrara' },
        { src: 'https://i.imgur.com/kST0POI.jpg', footer: 'Técnica: talla. Material: mármol de Carrara' }
      ]
    },
    dientes: {
      title: 'Dientes',
      images: [
        { src: 'https://i.imgur.com/NllXefO.jpg', footer: 'Técnica: talla. Material: Dolomita (piedra)' },
        { src: 'https://i.imgur.com/9S7qyKV.jpg', footer: 'Técnica: talla. Material: Dolomita (piedra)' },
        { src: 'https://i.imgur.com/MckO5K1.jpg', footer: 'Técnica: talla. Material: Dolomita (piedra)' },
        { src: 'https://i.imgur.com/xpqB3tC.jpg', footer: 'Técnica: talla. Material: Dolomita (piedra)' }
      ]
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.item = params['item'];
      const itemData = this.pocketItems[this.item];
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