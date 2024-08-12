import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-property-upload',
  standalone: true,
  imports: [CommonModule, HttpClientModule,ReactiveFormsModule,RouterOutlet],
  templateUrl: './property-upload.component.html',
  styleUrl: './property-upload.component.css'
})
export class PropertyUploadComponent implements OnInit {
  propertyForm: FormGroup;
  images: File[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient, private supabaseService: SupabaseService) {
    this.propertyForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required],
      location: ['', Validators.required],
      images: [null]
    });
  }

  ngOnInit(): void {}

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.images = Array.from(event.target.files);
    }
  }
  async onSubmit(){
    if(this.propertyForm.valid){
      const imageUrls: string[] = [];
      try {
        for (const file of this.images){
          const {data, error} = await this.supabaseService.uploadImage(file);
          if (error) throw new Error(error.message);
          imageUrls.push(data.key);
        }
      } catch (error){
        console.error('error uploading images:',error);
        return;
      }
      const propertyData = {
        name: this.propertyForm.get('name')!.value,
        description: this.propertyForm.get('description')!.value,
        price:this.propertyForm.get('price')!.value,
        location: this.propertyForm.get('location')!.value,
        images: imageUrls
      };
      try{
        const response = await this.supabaseService.insertProperty(propertyData);
        console.log ('property uploaded successfully',response);
      } catch (error){
        console.error('error uploading property:', error)
      }

    }
  }
  /*async onSubmit() {
    if (this.propertyForm.valid) {
      const propertyData = {
        name: this.propertyForm.get('name')!.value,
        description: this.propertyForm.get('description')!.value,
        price: this.propertyForm.get('price')!.value,
        location: this.propertyForm.get('location')!.value,
        images: this.images.map(file => file.name) // Assuming you handle file upload separately
      };
      console.log('Property Data:', propertyData)

      try {
        const response = await this.supabaseService.insertProperty(propertyData);
        console.log('Property uploaded successfully', response);
      } catch (error) {
        console.error('Error uploading property');
      }
    }
  }*/
}

  /*async onSubmit() {
    if (this.propertyForm.valid) {
      const formData = new FormData();
      formData.append('name', this.propertyForm.get('name')!.value);
      formData.append('description', this.propertyForm.get('description')!.value);
      formData.append('price', this.propertyForm.get('price')!.value);
      formData.append('location', this.propertyForm.get('location')!.value);

      this.images.forEach((file, index) => {
        formData.append(`images[${index}]`, file);
      });

      this.http.post('supabase/properties', formData).subscribe(response => {
        console.log('Property uploaded successfully', response);
      }, error => {
        console.error('Error uploading property', error);
      });
    }
  }*/

