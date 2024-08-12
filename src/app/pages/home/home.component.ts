import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SupabaseService } from '../../supabase.service';
import { routes } from '../../app.routes';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { BuyComponent } from '../../buy/buy.component';
import { RentComponent } from '../../rent/rent.component';
import { BlogComponent } from '../../blog/blog.component';
import { CarouselComponent } from '../../carousel/carousel.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, CommonModule, RouterOutlet,HeaderComponent,FooterComponent,BuyComponent,RentComponent,BlogComponent,CarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  customOptions: any = {
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0:{
        items:1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };
  properties: any[] = [];
  constructor(private supabaseService: SupabaseService){}
  ngOnInit(): void {
    this.loadProperties();
    
  }
  async loadProperties(){
    try{
      this.properties = await this.supabaseService.getProperties();
      //console.log(this.properties);
      this.properties.forEach(property => {
        console.log('images:',property.images);
      });
    }catch (error){
      console.error('error fetching properties:',error);
    }
  }

}


