import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" routerLink="/">Mariana Debaz</a>
        
        <button class="navbar-toggler" type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarResponsive" 
                aria-controls="navbarResponsive" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link nav-color" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-color" routerLink="/muestras" routerLinkActive="active">Muestras</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-color" routerLink="/obras" routerLinkActive="active">Obras</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-color" routerLink="/muebles" routerLinkActive="active">Muebles de Autor</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-color" routerLink="/esculturas-bolsillo" routerLinkActive="active">Esculturas de bolsillo</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-color" routerLink="/biografia" routerLinkActive="active">Biografía</a>
            </li>
            <li class="nav-item">
              <a class="nav-link nav-color" routerLink="/contacto" routerLinkActive="active">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {}