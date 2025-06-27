import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GalleryModalComponent, GalleryImage } from '../../components/gallery-modal/gallery-modal.component';

@Component({
  selector: 'app-work-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, GalleryModalComponent],
  template: `
    <br>
    <br>
    <header>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a routerLink="/">Inicio</a></li>
        <li class="breadcrumb-item"><a routerLink="/obras">Obras</a></li>
        <li class="breadcrumb-item active">{{ sectionTitle }}</li>
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
export class WorkDetailComponent implements OnInit {
  section: string = '';
  sectionTitle: string = '';
  images: GalleryImage[] = [];
  isModalVisible = false;
  currentImageIndex = 0;

  private workSections: { [key: string]: { title: string, images: GalleryImage[] } } = {
    obras1: {
      title: 'Obras 1',
      images: [
        { src: 'https://i.imgur.com/DhVAvdc.jpg', title: 'Calentamiento global', footer: 'Travertino 27cm x 54cm x 57cm - 2010' },
        { src: 'https://imgur.com/B1Aq0Dk.jpg', title: 'Cara abajo', footer: 'Talla directa en granito 20cm x 25cm x 15cm - 2009' },
        { src: 'https://imgur.com/WsSZEkM.jpg', title: 'Cigarra', footer: 'Madera, hierro y cuero 45cm x 34cm x 12cm - 2010' },
        { src: 'https://imgur.com/JudA8Gl.jpg', title: 'Figura', footer: 'Travertino y Hierro 10cm x 10cm x 50cm - 2013' },
        { src: 'https://imgur.com/Ey6iqWp.jpg', title: 'Figura', footer: 'Travertino y Hierro 10cm x 10cm x 50cm - 2013' },
        { src: 'https://imgur.com/DsBq9DL.jpg', title: 'Gusano', footer: 'Granito y travertino 38cm x 22cm x 22cm - 2012' }
      ]
    },
    obras2: {
      title: 'Obras 2',
      images: [
        { src: 'https://i.imgur.com/xdIPrn5.jpg', title: 'Identidad [242]', footer: 'Madera y dolomita 80cm x 60cm x 40cm' },
        { src: 'https://i.imgur.com/XpXIGOf.jpg', title: 'Oclusador', footer: 'Piedra y metal - 2012' },
        { src: 'https://i.imgur.com/CWqOVdn.jpg', title: 'Oclusador', footer: 'Piedra y metal - 2012' },
        { src: 'https://i.imgur.com/TOzMMlX.jpg', title: 'Pesadilla', footer: 'Mueble intervenido con talla directa en dolomita - 2014' },
        { src: 'https://i.imgur.com/t8qYQKh.jpg', title: 'Trampa', footer: 'Piedra y metal - 2012' },
        { src: 'https://i.imgur.com/U5SdM7O.jpg', title: 'Trampa', footer: 'Piedra y metal - 2012' }
      ]
    },
    encargos: {
      title: 'Encargos-Monumentos',
      images: [
        { src: 'https://i.imgur.com/3pWwNEU.jpg', title: 'Encargo privado, Centro de Diagnóstico Médico De Martino, Tandil, Pcia de Bs As', footer: 'Fundición gris 200cm x 40cm x 40cm - 2019' },
        { src: 'https://i.imgur.com/eTPXEE2.jpg', title: 'Encargo privado, Centro de Diagnóstico Médico De Martino, Tandil, Pcia de Bs As', footer: 'Fundición gris 200cm x 40cm x 40cm - 2019' },
        { src: 'https://i.imgur.com/UuaP1Qm.jpg', title: 'Monumento El Fundidor, Tandil, Pcia de Bs.As', footer: 'Fundición en hierro gris 400cm - 2006' },
        { src: 'https://i.imgur.com/rmxNFdT.jpg', title: 'Monumento El Fundidor, Tandil, Pcia de Bs.As', footer: 'Fundición en hierro gris 400cm - 2006' },
        { src: 'https://i.imgur.com/08us065.jpg', title: 'Relieve de rostro Mapuche Tandil, Pcia. de Bs.As.', footer: 'Talla directa sobre bochon de granito - 2006' },
        { src: 'https://i.imgur.com/o6rlrZW.jpg', title: 'Relieve de rostro Mapuche Tandil, Pcia. de Bs.As.', footer: 'Talla directa sobre bochon de granito - 2006' }
      ]
    }
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.section = params['section'];
      const sectionData = this.workSections[this.section];
      if (sectionData) {
        this.sectionTitle = sectionData.title;
        this.images = sectionData.images;
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