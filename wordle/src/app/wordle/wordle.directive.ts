import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appWordleInput]'
})
export class WordleDirective {

  @Input() letterNum!:any;
  @Input() attemptNum!:any;
  @Input() color = '';
  
  elementRef:any;

  constructor(el: ElementRef) {
    this.elementRef = el;
  }

  @HostListener('input', ['$event.target']) onInput(input:any) {
    const length = input.value.length;
    const maxLength = input.attributes.maxlength.value;
    const nextElem = this.elementRef.nativeElement.nextSibling;
    const currentElem = this.elementRef.nativeElement;
    
    if (nextElem && nextElem.disabled != undefined && length >= maxLength) {
      nextElem.disabled = false;
      nextElem.focus();
      currentElem.disabled = true;
    }

    currentElem.style.backgroundColor = this.color;
  }

  // @HostListener('window:keyup', ['$event']) onDelete(event: KeyboardEvent) {
  //   console.log(this.attemptNum, this.letterNum);
  //   let currentElem = this.elementRef.nativeElement;
  //   if (event.keyCode == 8) {
  //     let attemptRow = document.getElementsByClassName(currentElem.className);
  //     console.log(attemptRow);
  //     // let prevElem;
  //     // let currentElem = event.target as HTMLInputElement;
  //     // console.log(currentElem.value);
  //     // if (this.letterNum >= attemptRow.length-1 && currentElem.value != '') {
  //     //   prevElem = attemptRow[this.letterNum] as HTMLInputElement;
  //     // } else {
  //     //   prevElem = attemptRow[this.letterNum-1] as HTMLInputElement;
  //     // }
  //     // prevElem.focus();
  //   }
  // }



}
