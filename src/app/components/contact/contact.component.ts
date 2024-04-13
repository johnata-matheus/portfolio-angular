import { Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TitleComponent, PrimaryBtnComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  
}
