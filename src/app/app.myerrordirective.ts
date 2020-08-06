import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector:'[my-error]'
})

export class MyErrorDirective{
  constructor(elref:ElementRef){
    elref.nativeElement.style.background='red';
  }
}
