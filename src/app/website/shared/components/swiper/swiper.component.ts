import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { faAngleLeft, faAngleRight, faTerminal, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJsSquare, faAngular, faNodeJs, faAdobe, faFigma } from '@fortawesome/free-brands-svg-icons';
import { gsap } from 'gsap';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {

    // icons
    faLeft = faAngleLeft;
    faRight = faAngleRight;
    // list icons
    faHtml = faHtml5;
    faCss = faCss3Alt;
    faJavascript = faJsSquare;
    faAngular = faAngular;
    faNode = faNodeJs;
    faOther = faTerminal;
    faAdobe = faAdobe;
    faSql = faDatabase;
    faNosql = faDatabase;
    faFigma = faFigma;

    @ViewChild('swiper') swiper: ElementRef;
    @Input() mode;              // defines the style of swiper component: 'skills', 'gallery' or 'projects'
    @Input() elements = [];     // list of elements
    @Input() element = {
        width: 250 + 40,        // width of element + padding
        position: 0             // starting position
    }

    touches = [];               // list of touches in mobile version
    elementsPerScreen = null;   // number of elements visible on screen
    elementsOut = 0;            // number of elements swiped out of the screen on left
    temp = 0;                   // length of the list of elements

    constructor() { }

    ngOnInit(): void {
        // define the length of the list of elements
        if (this.mode == 'skills') {
            this.temp = this.elements.length / 3;   // divided by number of the rows
        } else {
            this.temp = this.elements.length;       // since there is only one row, the length of the lists of elements == elements.length
        }

        // calculate the number of visible elements on user's screen
        if (window.innerWidth >= 1000) {
            let width = 940;
            this.elementsPerScreen = Math.floor(width / this.element.width);
        } else {
            this.elementsPerScreen = Math.floor(window.innerWidth / this.element.width);
        }
    }

    move(direction: string) {

        if (direction == 'right' && this.elementsOut < this.temp - this.elementsPerScreen) {
            let distance = -this.element.width
            let x = distance + this.element.position;
            gsap.to(this.swiper.nativeElement, {marginLeft: x})
            this.element.position = x;
            this.elementsOut += 1;
        } else if (direction == 'left' && this.element.position < 0) {
            let distance = this.element.width
            let x = distance + this.element.position;
            gsap.to(this.swiper.nativeElement, {marginLeft: x})
            this.element.position = x;
            this.elementsOut -= 1;
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

        let abs = Math.abs(start - end);

        if (abs > 100) {
            if (start > end) {
                this.move('right')
                this.touches = [];
            } else {
                this.move('left')
                this.touches = [];
            }
        } else {
            console.log('swipe too short')
        }

    }

}
