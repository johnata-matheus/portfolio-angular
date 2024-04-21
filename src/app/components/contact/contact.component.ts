import { Component, ViewChild } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';
import { EmailService } from '../../services/email.service';
import { IEmail } from '../../interfaces/IEmail';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [TitleComponent, PrimaryBtnComponent, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  stateForm: boolean = false;

  @ViewChild('form') emailForm!: NgForm;

  constructor(private emailService: EmailService, private toastr: ToastrService){}
  
  sendEmail(form: IEmail){
    this.emailService.sendEmail(form).subscribe(
      {
        next: () => {
          this.stateForm = true;
          this.toastr.success("Mensagem enviada com sucesso!");
          this.emailForm.resetForm();
        },
        error: (e) => {
          this.toastr.error("Erro ao enviar a mensagem, tente novamente mais tarde.");
          this.stateForm = false;
        }
      }
    );
  }
}
