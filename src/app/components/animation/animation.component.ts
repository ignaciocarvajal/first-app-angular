import { animate,  state, style, transition, trigger } from '@angular/animations';

export const fadeIn =
  trigger('fadeIn', [
    state('*', style({
      opacity: 1
    })),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(-10%)'
      }),
      animate('500ms linear'),
      style({
        opacity: 1,
        transform: 'translateY(0)'
      })
    ])
   /* transition(':leave', [
      animate('500ms linear', style({
        opacity: 0
      }))
    ])*/
  ]);
