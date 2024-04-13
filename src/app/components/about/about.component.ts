import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TitleComponent, PrimaryBtnComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  link: string = "../../../assets/curriculo-att-2024.pdf"
}
