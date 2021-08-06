import { animate, query, stagger, style, transition } from '@angular/animations';
import { trigger } from '@angular/animations';


export const weatherAnimation = trigger('weatherAnimation', [
  transition(':enter', [
    style({
      opacity: 0,
      transform: 'translateY(100%)'
    }),
    
    animate('500ms ease', style({
      opacity: 1,
      transform: 'translateY(0%)'
    }))
  ])
]);


export const daysWeather = trigger('daysWeather', [
  transition(':enter', [
        query('li', [
          style({
            opacity: 0,
            transform: 'translateX(50%)'
            })
        ], { optional: true }),
    
    query('li', [
          stagger('100ms', [
            animate('300ms 500ms ease', style({opacity: 1, transform: 'translateX(0%)'}))
          ])
        ], {optional: true})
    ])
]);


export const loading = trigger('loading', [
  transition(':enter', [
    style({
      opacity: 0,
      top: '-10%'
    }),

    animate('300ms ease', style({
      opacity: 1,
      top: '*'
    }))
  ]),

  transition(':leave', [
    animate('300ms ease', style({
      opacity: 0,
      top: '-10%'
    }))
  ])
])