import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    home = null;
    projects = null;

    constructor() { }

    ngOnInit(): void {
        
        this.home = {
            about: {
                name: 'Krzysztof Musiał',
                title: 'Student / Web Developer',
                desc: "Problem-solving always gave me a lot of satisfaction. That's why when I started learning to program, I knew that this is what I want to do in my life. I am very passionate about making my projects not only work well but also to be easy to read and improve in the future. Coding is something you have to learn constantly and I want my work to meet the standards of modern programming.",
                data: {
                    name: 'Krzysztof Musiał',
                    location: 'Poznań, Poland',
                    contact: '#'
                },
                links: {
                    linkedin: '#',
                    github: '#',
                    dribbble: '#',
                }
            },
            skills: {
                frontend: ['html', 'css', 'js'],
                backend: ['html', 'css', 'js'],
                design: ['html', 'css', 'js'],
                other: ['html', 'css', 'js'],
            }
        }

        this.projects = ['1', '2', '3']

    }

}