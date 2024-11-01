import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, SidebarModule, ButtonModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  navbarAberta: boolean = true;
  @ViewChild('barraDeNavegacao') navbar: ElementRef | undefined;

  rotaAtiva: string = '';

  HOME = '/';
  SOBRE = '/sobre-nos';
  EVENTOS = '/eventos';
  ENSINO = '/ensino';
  PREMIACOES = '/premiacoes';

  constructor(
    private router: Router,
  ) {}
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.rotaAtiva = this.router.url;
        this.alterarNavbar();
      }
    });
  }

  alterarNavbar() {
    this.navbarAberta = !this.navbarAberta;
  }
}
