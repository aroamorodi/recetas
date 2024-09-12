import { inject, Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private firebase = inject(AngularFireAuth);

  constructor () {}

  /** Crear un usuario con contraseña */

  /** Permitir que un usuario acceda con usuario y contraseña  */

  login (email: string, password: string) {
    return this.firebase.signInWithEmailAndPassword(email,password);
  }
}
