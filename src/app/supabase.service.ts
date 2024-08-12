import { Injectable } from '@angular/core';
import { createClient ,SupabaseClient} from '@supabase/supabase-js'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  uploadImage(file: File): { data: any; error: any; } | PromiseLike<{ data: any; error: any; }> {
    throw new Error('Method not implemented.');
  }
  private supabaseUrl: string ='https://htkwcnzolvstseaiinrf.supabase.co';
  private supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0a3djbnpvbHZzdHNlYWlpbnJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0OTE2NzksImV4cCI6MjAzODA2NzY3OX0.8fYY2jZujESQNuvhqH88aNZ-daGl8ph-3s7QpO3Qc2Q';
  private supabase: SupabaseClient;
  
  constructor() { 
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
  }
  private delay (ms: number): Promise<void>{
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async signUp(email: string, password: string, name: string, phone: string): Promise<any> {
    try {
      const { data, error } = await this.supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            phone
          }
        }
      });
      if (error) {
        throw error;
      }
      return data.user;
    } catch (error: any) {
      console.error('Error during sign-up:', error.message);
      throw error;
    }
  }
  async signIn(email: string, password: string): Promise<any> {
    try {
      const { data, error } = await this.supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        throw error;
      }
      return data.user;
    } catch (error: any) {
      console.error('Error during sign-in:', error.message);
      throw error;
    }
  }
  async insertProperty(propertyData: any): Promise<any> {
    console.log('inserting property data:' ,propertyData)
    const { data, error } = await this.supabase
      .from('properties')
      .insert([propertyData]);
    if (error) {
      console.error('supabase insert error:', error)
      throw new Error(error.message);
    }
    return data;
  }
  async getProperties(): Promise<any[]>{
    
    const { data, error} = await this.supabase
    .from('properties')
    .select('*');
    //console.log(data)
    if (error){
      throw new Error(error.message);
    }
    return data;

  }

}






//LGbsJIhFAkKkavJ0
// https://htkwcnzolvstseaiinrf.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0a3djbnpvbHZzdHNlYWlpbnJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0OTE2NzksImV4cCI6MjAzODA2NzY3OX0.8fYY2jZujESQNuvhqH88aNZ-daGl8ph-3s7QpO3Qc2Q
//postgresql://postgres.htkwcnzolvstseaiinrf:[YOUR-PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:6543/postgres




