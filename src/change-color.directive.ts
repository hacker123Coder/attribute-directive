import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private el:ElementRef, private render:Renderer2){ 
    
    this.changecolor("blue");
}
private changecolor(color: string) {
  this.render.setStyle(this.el.nativeElement, 'color', color);
}
@HostListener ('mouseenter')
M1(){
this.changecolor("red");
}
@HostListener ('mouseleave')
M2(){
  this.changecolor("green");
}


}