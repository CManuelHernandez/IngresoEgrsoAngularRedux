import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  initAuthListener() {
    this.auth.onAuthStateChanged((user) => {
      console.log(user?.email);
      console.log(user?.uid);
    });
  }

  crearUsuario(usuario: string, correo: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, correo, password);
    // return this.auth.createUserWithEmailAndPassword(correo, password)
  }

  loginUsuario(correo: string, password: string) {
    return signInWithEmailAndPassword(this.auth, correo, password);
  }

  logout() {
    return this.auth.signOut();
  }

  isAuth() {
    return new Observable((subscriber) => {
      const unsubscribe = this.auth.onAuthStateChanged(subscriber);
      return { unsubscribe };
    }).pipe(map((fUser) => fUser != null));
  }
}
