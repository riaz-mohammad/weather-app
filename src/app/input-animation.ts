import { animate, state, style, transition, trigger } from "@angular/animations";

export const inputAnimation = trigger('inputAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateX(50%)',
      backgroundColor: 'transparent'
    }),

    animate('500ms 300ms ease', style({
      opacity: 1,
      transform: 'translateX(0%)'
    }))
  ])
])


export const buttonAnimation = trigger('buttonAnimation', [
  state('false', style({
    right: '0%',
    width: '25%'
  })),

  transition('* => false', [
     animate('400ms ease')
   ])

]);


export const searchedCity = trigger('searchedCity', [
  transition(':enter', [
    style({
      transform: 'scaleY(0)',
      opacity: 0,
      transformOrigin: 'top'
    }),
    animate('350ms ease', style({
      opacity: 1,
      transform: 'scaleY(1)'
    }))
  ]),


  transition(':leave', [
    style({
      opacity: 1
      
    }),
    animate('300ms ease', style({
      opacity: 0
    }))
  ])
]);