import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperModule } from 'swiper/types';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule, FontAwesomeModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AchApp';
}
