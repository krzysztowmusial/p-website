import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    url;
    links = [];

    constructor(private router: Router) {}

    ngOnInit(): void {
        let temp = this.router.url.split('/');
        temp.shift();

        let temp2 = [];
        temp.forEach(element => {
            element.split(';')
            temp2.push(element.split(';')[0])
        });

        this.url = temp2;
        // console.log(this.url);
        for (let i = 0; i < this.url.length; i++) {
            let temp = '/';
            for (let j = 0; j <= i; j++) {
                temp += this.url[j] + '/';
            }
            this.links[i] = temp;
            temp = '/';
        }
        // console.log(this.links)
    }

}
