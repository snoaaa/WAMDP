// Angular import
import { Component } from '@angular/core';

// project import

import { CardComponent } from 'src/app/admin/theme/shared/components/card/card.component';

@Component({
  selector: 'app-typography',
  imports: [CardComponent],
  templateUrl: './typography.component.html',
  styleUrl: './typography.component.scss'
})
export class TypographyComponent {}
