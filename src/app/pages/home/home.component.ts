import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TermsPageComponent } from '../terms-page/terms-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet,TermsPageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
