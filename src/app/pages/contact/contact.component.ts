import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mb-4">
          <br>
          <br>
          <a href="https://www.instagram.com/debaz_esculturas/" target="_blank">
            <img id="insta" src="https://lh3.googleusercontent.com/2sREY-8UpjmaLDCTztldQf6u2RGUtuyf6VT5iyX3z53JS4TdvfQlX-rNChXKgpBYMw" alt="Instagram">
          </a>
          <br>
          <br>

          <div>
            <span><h2>Email: </h2></span> 
            <span>marianadebaz&#64;hotmail.com</span>
          </div>

          <br>
          <br>
        </div>
      </div>
    </div>
    <br>
    <br>
  `
})
export class ContactComponent {}