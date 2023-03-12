import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@indian-spices/ui-library';

@Component({
  selector: 'indian-spices-restaurant',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantComponent {}
