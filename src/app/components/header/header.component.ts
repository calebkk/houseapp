import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch, faHeart, faBars } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  faSearch = faSearch;
  faBars = faBars;
  faHeart = faHeart;
  farHeart = farHeart;
  liked = false;
  menuOpen = false;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;

  toggleLike(){
    this.liked = !this.liked
  }
  constructor (){}
  ngOnInit(): void {
    
  }
  toggleMenu(): void{
    this.menuOpen = !this.menuOpen;
  }

}
