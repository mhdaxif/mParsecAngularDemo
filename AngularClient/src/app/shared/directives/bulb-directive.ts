import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[bulb]' })
export class BulbDirective {

    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('15px', 'yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('14px');
    }

    private highlight(fontSize: string, color = "") {
        this.el.nativeElement.style.fontSize = fontSize;
        this.el.nativeElement.style.backgroundColor = color;
    }
}

