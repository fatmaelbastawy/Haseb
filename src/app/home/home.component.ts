import { Component, OnInit, ViewChild, ElementRef,AfterViewInit , HostListener} from '@angular/core';
import AOS from 'aos';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
constructor(private router: Router){}
  ngOnInit():void {  
      this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      window.scrollTo(0, 0);
    }
  });}

  @HostListener('window:load', ['$event'])
  onLoad(event: Event): void {
    window.scrollTo(0, 0);
  }


  openWhatsApp(): void {
    const phoneNumber = '+201018802070'; 
    const message = encodeURIComponent(".");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }
 
}
