import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

import { gsap } from 'gsap';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

    @Input() items;

    faLeft = faAngleLeft;
    faRight = faAngleRight;

    @ViewChild('slider') slider: ElementRef;

    // items = ['1', '2', '3', '4', '5'];
    item = {
        // padding: 40,
        width: 250 + 40,
        position: 0
    }
    touches = [];
    itemsPerScreen = null;
    itemsOut = 0;

    constructor() { }

    ngOnInit(): void {

        if (window.innerWidth >= 1000) {
            let width = 940;
            this.itemsPerScreen = Math.floor(width / this.item.width);
        } else {
            this.itemsPerScreen = Math.floor(window.innerWidth / this.item.width);
        }

    }

    move(direction: string) {

        if (direction == 'right' && this.itemsOut < this.items.length - this.itemsPerScreen) {
            let distance = -this.item.width
            let x = distance + this.item.position;
            gsap.to(this.slider.nativeElement, {x: x})
            this.item.position = x;
            this.itemsOut += 1;
        } else if (direction == 'left' && this.item.position < 0) {
            let distance = this.item.width
            let x = distance + this.item.position;
            gsap.to(this.slider.nativeElement, {x: x})
            this.item.position = x;
            this.itemsOut -= 1;
        }

    }

    touchstart(event) {
        this.touches.push(event.touches[0].clientX);
    }
    touchmove(event) {
        this.touches.push(event.touches[0].clientX);
    }
    touchend() {
        let start = this.touches[0];
        let end = this.touches.pop();
        if (start > end) {
            this.move('right')
            this.touches = [];
        } else {
            this.move('left')
            this.touches = [];
        }
    }

}
