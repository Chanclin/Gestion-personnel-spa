// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import {
//   AbstractControl,
//   FormBuilder,
//   FormGroup,
//   ReactiveFormsModule,
//   Validators,
// } from '@angular/forms';
// import { Router } from '@angular/router';
// import { CustomBtnComponent } from '../../components/ui/custom-btn/custom-btn.component';
// import { CustomLienComponent } from '../../components/ui/custom-lien/custom-lien.component';
// import { AuthService } from '../../services/auth/auth.service';
// import { ChargementComponent } from '../../components/ui/chargement/chargement.component';

// @Component({
//   selector: 'app-connexion',
//   standalone: true,
//   imports: [
//     CommonModule,
//     ReactiveFormsModule,
//     CustomLienComponent,
//     CustomBtnComponent,
//     ChargementComponent,
//   ],
//   templateUrl: './connexion.component.html',
// })
// export class ConnexionComponent {
//   connexionForm: FormGroup;
//   chargement = false;
//   errorMessage: string | null = null;

//   constructor(
//     private fb: FormBuilder,
//     private authService: AuthService,
//     private router: Router
//   ) {
//     this.connexionForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       password: [
//         '',
//         [Validators.required, Validators.minLength(8), this.passwordValidator],
//       ],
//     });
//   }

//   passwordValidator(control: AbstractControl) {
//     const value = control.value;
//     const hasNumber = /[0-9]/.test(value);
//     const hasUpper = /[A-Z]/.test(value);
//     const hasLower = /[a-z]/.test(value);
//     const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
//     const valid = hasNumber && hasUpper && hasLower && hasSpecial;
//     if (!valid) {
//       return {
//         invalidPassword:
//           'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.',
//       };
//     }
//     return null;
//   }

//   onSubmit() {
//     this.errorMessage = null;
//     if (this.connexionForm.valid) {
//       this.chargement = true;
//       const email = this.connexionForm.get('email')?.value;
//       const password = this.connexionForm.get('password')?.value;
//       this.authService.connexion(email, password).subscribe(
//         (response) => {
//           this.chargement = false;
//           if (response) {

//             setTimeout(() => {
//               this.router.navigate(['accueil']);
//             }, 2000);
//           } else {
//             this.errorMessage = 'Identifiants invalides. Veuillez réessayer.'; // Message d'erreur générique
//           }
//         },
//         (error) => {
//           this.chargement = false;
//           this.errorMessage =
//             'Erreur de connexion, veuillez vérifier vos identifiants.'; // Message d'erreur spécifique
//         }
//       );
//     } else {
//       this.errorMessage = 'Veuillez remplir correctement tous les champs.'; // Message d'erreur pour formulaire invalide
//     }
//   }
// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { LienversComponent } from '../../components/ui/lienvers/lienvers.component';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    LienversComponent,
  ],
  templateUrl: './connexion.component.html',
})
export class ConnexionComponent {
  connexionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.connexionForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(8), this.passwordValidator],
      ],
    });
  }

  passwordValidator(control: AbstractControl) {
    const value = control.value;
    const hasNumber = /[0-9]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const valid = hasNumber && hasUpper && hasLower && hasSpecial;
    if (!valid) {
      return {
        invalidPassword:
          'Le mot de passe doit contenir au moins une majuscule, une minuscule, un chiffre et un caractère spécial.',
      };
    }
    return null;
  }

  onSubmit() {
    if (this.connexionForm.valid) {
      const email = this.connexionForm.get('email')?.value;
      const password = this.connexionForm.get('password')?.value;
      this.authService.connexion(email, password).subscribe((response) => {
        if (response) {
          this.router.navigate(['accueil']);
        } else {
          console.error('Invalid credentials');
        }
      });
    } else {
      console.error('Form invalid');
    }
  }
}
