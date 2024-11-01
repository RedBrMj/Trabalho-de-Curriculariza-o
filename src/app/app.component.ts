import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { GalleriaModule } from 'primeng/galleria';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations'; // Manter BrowserAnimationsModule
import { CommonModule } from '@angular/common'; // Manter CommonModule para as diretivas comuns

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    GalleriaModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrigir styleUrl para styleUrls
})
export class AppComponent {
  title = 'Projeto-Zimbabue';
  visible: boolean = false;
  yourConfirmFunction(): void {
    this.visible = true;
  }
}
