import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { SupabaseService } from '../supabase.service';
import { async } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements   OnInit{
  signInForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private supabaseService: SupabaseService,
    private router: Router
  ){
    this.signInForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {}
  async onsubmit(){
      const {email, password} = this.signInForm.value;
      try {
        const user = await this.supabaseService.signIn(email, password);
        console.log('user signed in succesfully',user);
        this.router.navigate(['/']);
      } catch(error){
        console.error('error signing in');
      }
    }
  }

