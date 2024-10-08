import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: ` <router-outlet></router-outlet>`,
  styleUrl: './auth-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthPageComponent { }
