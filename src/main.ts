import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  window.addEventListener("scroll",()=>{
    const header =document.querySelector("header");
    header?.classList.toggle("scrolled",window.scrollY>0)
  })
