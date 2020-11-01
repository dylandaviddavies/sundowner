import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'sundowner';
  theme = 'light';

  switchTheme(): void {
    switch (this.theme) {
      case 'light':
        this.theme = 'dark';
        document.documentElement.setAttribute('data-theme', this.theme);
        break;
      case 'dark':
        this.theme = 'light';
        document.documentElement.setAttribute('data-theme', this.theme);
        break;
    }
  }
}
