import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../shared/services/projects.service';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    faName = faUser;
    faContact = faEnvelope;

    home = null;
    skills = [];
    projects = [];

    constructor(private projectsService: ProjectsService) { }

    ngOnInit(): void {

        this.projectsService.getProjects().subscribe((projects)=>{
            this.projects = projects;
            this.projects.reverse();
        })
        
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
            }
        }

        this.skills = [
            {
                title: 'HTML',
                class: 'html'
            },
            {
                title: 'CSS',
                subtitle: 'Sass, BEM',
                class: 'css'
            },
        ]

    }

}
