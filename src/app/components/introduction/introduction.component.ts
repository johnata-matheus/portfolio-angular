import { Component } from '@angular/core';
import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';

@Component({
  selector: 'app-introduction',
  standalone: true,
  imports: [PrimaryBtnComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss'
})
export class IntroductionComponent {
  link: string = '#contact'
}
