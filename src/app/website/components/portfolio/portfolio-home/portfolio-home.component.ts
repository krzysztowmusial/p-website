import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/website/shared/services/projects.service';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.scss']
})
export class PortfolioHomeComponent implements OnInit {

    projects = null;

    constructor(private projectsService: ProjectsService) { }

    ngOnInit(): void {
        this.projectsService.getProjects().subscribe((projects)=>{
            this.projects = projects;
            this.projects.reverse();
        })
    }

}
