import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ErrorModal } from '../static/error-modal/error-modal';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-register',
  imports: [RouterLink, FormsModule, ErrorModal],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  email: string = '';
  password: string = '';
  rePass: string = '';

  showErrorModal: boolean = false;
  errorModalMessage: string = '';

  constructor(
    private supabaseService: SupabaseService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {}

  onRegister() {
    if (!this.email || !this.password || !this.rePass) {
      this.showError('Попълнете всички полета!');
      this.password = '';
      this.rePass = '';
      return;
    }

    if (!this.isValidEmail(this.email)) {
      this.showError('Невалиден имейл');
      this.email = '';
      this.password = '';
      this.rePass = '';
      return;
    }

    if (this.password.length < 6) {
      this.showError('Паролата трябва да съдържа най-малко 6 символа');
      this.password = '';
      this.rePass = '';
      return; // ← СПИРАМЕ
    }

    if (this.password !== this.rePass) {
      this.showError('Паролите не съвпадат');
      this.password = '';
      this.rePass = '';
      return; // ← СПИРАМЕ
    }

    this.supabaseService.register(this.email, this.password).subscribe({
      next: (response) => {
        if (response.error) {
          let errorMessage = 'Грешка при регистрация';
          if (response.error.message?.includes('already registered')) {
            errorMessage = 'Този имейл вече е регистриран';
          }
          this.showError(errorMessage);
          this.password = '';
          this.rePass = '';
          this.cdr.detectChanges();
        } else if (response.user) {
          this.router.navigate(['/laptops']);
        } else {
          this.showError('Нещо се обърка, опитай пак');
          this.cdr.detectChanges();
        }
      },
      error: (err) => {
        this.showError(`Възникна грешка: ${err.message || err}`);
        this.cdr.detectChanges();
      },
    });
  }

  showError(message: string) {
    this.errorModalMessage = message;
    this.showErrorModal = true;
    this.cdr.detectChanges();
  }

  closeErrorModal() {
    this.showErrorModal = false;
    this.errorModalMessage = '';
    this.cdr.detectChanges();
  }

  private isValidEmail(email: string): boolean {
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');
    return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
  }
}
