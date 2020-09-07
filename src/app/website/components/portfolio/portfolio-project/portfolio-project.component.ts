import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/website/shared/services/projects.service';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss']
})
export class PortfolioProjectComponent implements OnInit {

    @ViewChild('preview') preview: ElementRef;

    id = null;
    project = null;
    tags = [];
    images = [];

    constructor(private route: ActivatedRoute, private projects: ProjectsService) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id')

        this.projects.getProject(this.id).subscribe((project)=>{
            this.project = project;
            let tags = project.tags.split(',');
            tags.forEach(tag => {
                this.tags.push(tag);
            });
            project.images.forEach(image => {
                if (image.name !== 'preview') {
                    this.images.push(image);
                }
            });
            this.images.reverse();
            let temp = {
                name: 'preview',
                url: project.preview
            }
            this.images.unshift(temp);
            this.preview.nativeElement.style.background = "url('" + project.preview + "')";
        })
    }

    changePreview(index) {
        this.preview.nativeElement.style.background = "url('" + this.images[index].url + "')";
    }

}
