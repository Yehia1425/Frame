import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  navbarfixed:boolean=false;
  @HostListener('window.scroll',['$event']) onscroll(){
    if(window.scrollY>0){
      this.navbarfixed=true
    }
    else{
      this.navbarfixed=false
    }
  }

}
