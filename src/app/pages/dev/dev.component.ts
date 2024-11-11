import { Component } from '@angular/core';
import { EquipedevComponent } from '../../components/body/equipedev/equipedev.component';

@Component({
  selector: 'app-dev',
  standalone: true,
  imports: [EquipedevComponent],
  templateUrl: './dev.component.html',
})
export class DevComponent {}
