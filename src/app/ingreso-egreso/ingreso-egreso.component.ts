import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ingreso-egreso',
  templateUrl: './ingreso-egreso.component.html',
  styleUrl: './ingreso-egreso.component.css',
})
export class IngresoEgresoComponent implements OnInit {
  ingresoFrom!: FormGroup;
  tipo: string = 'ingreso';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.ingresoFrom = this.fb.group({
      descripcion: ['', Validators.required],
      monto: ['', Validators.required],
    });
  }

  guardar() {
    if (this.ingresoFrom.invalid) return;
    console.log(this.ingresoFrom.value);
    console.log(this.tipo);
  }
}
