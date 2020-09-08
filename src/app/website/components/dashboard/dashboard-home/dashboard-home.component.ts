import { Component, OnInit } from '@angular/core';
import { faPlusCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from 'src/app/website/shared/services/projects.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

    faMessages = faEnvelope;
    faAdd = faPlusCircle;

    projects = [];

    constructor(private projectsService: ProjectsService) { }

    ngOnInit(): void {
        this.projectsService.getProjects().subscribe((projects)=>{
            this.projects = projects;
            this.projects.reverse();
        })
    }

}
