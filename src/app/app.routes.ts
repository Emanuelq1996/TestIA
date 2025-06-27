import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'muestras',
    loadComponent: () => import('./pages/exhibitions/exhibitions.component').then(m => m.ExhibitionsComponent)
  },
  {
    path: 'obras',
    loadComponent: () => import('./pages/works/works.component').then(m => m.WorksComponent)
  },
  {
    path: 'obras/:section',
    loadComponent: () => import('./pages/work-detail/work-detail.component').then(m => m.WorkDetailComponent)
  },
  {
    path: 'muebles',
    loadComponent: () => import('./pages/furniture/furniture.component').then(m => m.FurnitureComponent)
  },
  {
    path: 'muebles/:item',
    loadComponent: () => import('./pages/furniture-detail/furniture-detail.component').then(m => m.FurnitureDetailComponent)
  },
  {
    path: 'esculturas-bolsillo',
    loadComponent: () => import('./pages/pocket-sculptures/pocket-sculptures.component').then(m => m.PocketSculpturesComponent)
  },
  {
    path: 'esculturas-bolsillo/:item',
    loadComponent: () => import('./pages/pocket-detail/pocket-detail.component').then(m => m.PocketDetailComponent)
  },
  {
    path: 'biografia',
    loadComponent: () => import('./pages/biography/biography.component').then(m => m.BiographyComponent)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];