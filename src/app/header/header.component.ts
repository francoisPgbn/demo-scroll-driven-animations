import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  
  @ViewChild('bg', { static: true }) bg! :ElementRef<HTMLDivElement>;
  
  ngOnInit(): void {
  }
 
}
