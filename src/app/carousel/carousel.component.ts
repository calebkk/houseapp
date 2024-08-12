import { AfterViewInit, Component,  } from '@angular/core';



@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    document.getElementById('next')?.addEventListener('click',() =>{
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1)% slides.length;
      slides[currentSlide].classList.add('active');
    });
    document.getElementById('prev')?.addEventListener('click',()=>{
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide - 1 + slides.length)% slides.length;
      slides[currentSlide].classList.add('active');
    });
  }

}
