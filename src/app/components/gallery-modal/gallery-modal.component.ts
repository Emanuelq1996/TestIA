import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GalleryImage {
  src: string;
  title?: string;
  footer?: string;
}

@Component({
  selector: 'app-gallery-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="modal-overlay" [class.show]="isVisible" (click)="onOverlayClick($event)">
      <div class="modal-content-custom" *ngIf="currentImage">
        <button class="modal-close" (click)="close()">&times;</button>
        
        <button class="modal-nav prev" 
                *ngIf="images.length > 1" 
                (click)="previousImage()"
                [disabled]="currentIndex === 0 && !loop">
          &#10094;
        </button>
        
        <button class="modal-nav next" 
                *ngIf="images.length > 1" 
                (click)="nextImage()"
                [disabled]="currentIndex === images.length - 1 && !loop">
          &#10095;
        </button>
        
        <img [src]="currentImage.src" [alt]="currentImage.title || 'Imagen'">
        
        <div class="modal-info" *ngIf="currentImage.title || currentImage.footer">
          <div class="modal-title" *ngIf="currentImage.title">{{ currentImage.title }}</div>
          <div class="modal-footer-text" *ngIf="currentImage.footer">{{ currentImage.footer }}</div>
        </div>
      </div>
    </div>
  `
})
export class GalleryModalComponent implements OnInit {
  @Input() images: GalleryImage[] = [];
  @Input() currentIndex: number = 0;
  @Input() isVisible: boolean = false;
  @Input() loop: boolean = true;
  @Output() closed = new EventEmitter<void>();
  @Output() indexChanged = new EventEmitter<number>();

  currentImage: GalleryImage | null = null;

  ngOnInit() {
    this.updateCurrentImage();
  }

  ngOnChanges() {
    this.updateCurrentImage();
  }

  updateCurrentImage() {
    if (this.images.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.images.length) {
      this.currentImage = this.images[this.currentIndex];
    }
  }

  close() {
    this.closed.emit();
  }

  onOverlayClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }

  previousImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else if (this.loop) {
      this.currentIndex = this.images.length - 1;
    }
    this.updateCurrentImage();
    this.indexChanged.emit(this.currentIndex);
  }

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else if (this.loop) {
      this.currentIndex = 0;
    }
    this.updateCurrentImage();
    this.indexChanged.emit(this.currentIndex);
  }
}