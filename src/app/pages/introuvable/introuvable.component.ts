import { Component } from '@angular/core';
import { BtnDesignComponent } from '../../components/ui/btn-design/btn-design.component';
import { CustomBtnComponent } from '../../components/ui/custom-btn/custom-btn.component';

@Component({
  selector: 'app-introuvable',
  standalone: true,
  imports: [BtnDesignComponent, CustomBtnComponent],
  templateUrl: './introuvable.component.html',
  styleUrl: './introuvable.component.css',
})
export class IntrouvableComponent {}
