import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent',
  standalone: true,
  imports: [],
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  ngOnInit() {
    this.autoSlide();
  }

  slideIndex = 0;
  slides = document.querySelectorAll('.card');
  totalSlides = this.slides.length;

  showSlide(index: number) {
    if (index >= this.totalSlides) {
      this.slideIndex = 0;
    } else if (index < 0) {
      this.slideIndex = this.totalSlides - 1;
    } else {
      this.slideIndex = index;
    }
    const offset = -this.slideIndex * 100;
    (document.querySelector('.card-container') as HTMLElement).style.transform = `translateX(${offset}%)`;
  }

  moveSlide(n: number) {
    this.showSlide(this.slideIndex + n);
  }

  autoSlide() {
    this.moveSlide(1);
    setTimeout(() => this.autoSlide(), 3000); // Change slide every 3 seconds
  }
}
