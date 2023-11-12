import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /**Según el tamaño de la pantalla, cambie de estándar a una columna por fila */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 2', cols: 0, rows: 0},
          { title: 'Usuario', cols: 2, rows: 2 }
      
        ];
      }

      return [
        { title: 'Card 2', cols: 2, rows: 2 },
        { title: 'Usuario', cols: 2, rows: 2 }
      ];
    })
  );
}
