import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  images: string[] = [
    "/images/poert1.png",
    "/images/port2.png",
    "/images/port3.png",
    "/images/poert1.png",
    "/images/port2.png",
    "/images/port3.png",
  ]
  indexx: number = 0;
  srcimg: string = '';
  flag: boolean = true;
  showContainer(src: string, index: number): void {
    this.srcimg = src;
    this.flag = false;
    this.indexx = index;
  }

  slide(step: number): void {
    this.indexx = this.indexx + step;
    if (this.indexx < 0) {
      this.indexx = this.images.length - 1;
    }
    else if (this.indexx === this.images.length) {
      this.indexx = 0;
    }
    this.srcimg = this.images[this.indexx];
  }

  closeSlie(eInfo: MouseEvent): void {
    this.flag = true;
  }

  notCloseSlie(eInfo: MouseEvent): void {
    eInfo.stopPropagation();
  }



  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.slide(1);
    } else if (event.key === 'ArrowLeft') {
      this.slide(-1);
    }
  }
}
