import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-property-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-listing.component.html',
  styleUrl: './property-listing.component.css'
})
export class PropertyListingComponent implements OnInit {
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
