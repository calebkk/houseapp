import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit{
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;

  constructor(){}
  ngOnInit(): void {
    
  }


}
