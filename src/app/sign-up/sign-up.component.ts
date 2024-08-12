import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { SupabaseService } from '../supabase.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private supabaseService: SupabaseService,
    private router: Router
  ){
    this.signUpForm = this.fb.group({
      name:['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      phone: ['',Validators.required],
      password: ['',Validators.required],
    })
  }
  ngOnInit(): void {}

  async onSubmit() {
    if (this.signUpForm.valid) {
      const { name, email, phone, password } = this.signUpForm.value;
      try {
        const user = await this.supabaseService.signUp(email, password, name, phone);
        console.log('User signed up successfully', user);
        this.router.navigate(['/']);
      } catch (error) {
        console.error('Error signing up');
      }
    }
  }
}


