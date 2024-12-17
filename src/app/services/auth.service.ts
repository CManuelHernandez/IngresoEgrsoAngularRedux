import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  crearUsuario(usuario: string, correo: string, password: string) {
    console.log({ usuario, correo, password });
    return createUserWithEmailAndPassword(this.auth, correo, password);
    // return this.auth.createUserWithEmailAndPassword(correo, password)
  }
}
