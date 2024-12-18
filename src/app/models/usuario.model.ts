interface FirebaseUser {
  email: string;
  uid: string;
  nombre: string;
}

export class Usuario {
  static fromFirebase({ email, uid, nombre }: FirebaseUser): Usuario {
    return new Usuario(uid, nombre, email);
  }

  constructor(
    public uid: string,
    public nombre: string,
    public email: string
  ) {}
}
