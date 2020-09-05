import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faUser, faImage } from '@fortawesome/free-solid-svg-icons';
import { ProjectsService } from 'src/app/website/shared/services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dashboard-project',
  templateUrl: './dashboard-project.component.html',
  styleUrls: ['./dashboard-project.component.scss']
})
export class DashboardProjectComponent implements OnInit {

    // Icons
    faName = faUser;
    faImages = faImage;

    // Form
    projectForm: FormGroup = this.fb.group({
        name: ['', Validators.required],
        category: ['', Validators.required],
        desc: ['', Validators.required],
        tags: ['', Validators.required],
        repo: [''],
        www: ['']
    });

    // Files local
    images: Array<any> = [];
    project;

    constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder, private projects: ProjectsService) { }

    ngOnInit(): void {
        this.projects.initialize(this.route.snapshot.paramMap.get('id'));

        if (this.route.snapshot.paramMap.get('id')) {
            this.projects.getProject(this.route.snapshot.paramMap.get('id')).subscribe((project)=>{
                this.project = project;
                this.projectForm = this.fb.group({
                    name: [project.name, Validators.required],
                    category: [project.category, Validators.required],
                    desc: [project.desc, Validators.required],
                    tags: [project.tags, Validators.required],
                    repo: [project.repo],
                    www: [project.www]
                })
            });
        }
    }

    // Submit
    submit(form) {
        this.projects.upload(this.images);

        setTimeout(()=>{
            this.projects.submit(form);
            this.projectForm.reset();
            this.images = [];
            this.router.navigate(['/dashboard']);
        }, 2000)
    }
    
    // Files
    files(event: any) {
        this.images.push(event.target.files[0]);
    }
}



















// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { faUser, faImage } from '@fortawesome/free-solid-svg-icons';
// import { ProjectsService } from 'src/app/website/shared/services/projects.service';

// @Component({
//   selector: 'app-dashboard-project',
//   templateUrl: './dashboard-project.component.html',
//   styleUrls: ['./dashboard-project.component.scss']
// })
// export class DashboardProjectComponent implements OnInit {

//     // Icons
//     faName = faUser;
//     faImages = faImage;

//     // Form
//     projectForm: FormGroup = this.fb.group({
//         name: ['', Validators.required],
//         category: ['', Validators.required],
//         desc: ['', Validators.required],
//         tags: ['', Validators.required],
//         repo: [''],
//         www: ['']
//     });

//     // Files
//     images = [];

//     constructor(private fb: FormBuilder, private projects: ProjectsService) { }

//     ngOnInit(): void {
//     }

//     send(form) {
//         console.log(form);

//         // this.projects.uploadImages(this.images, '').then((data) => {
//         //     this.test = data;
//         // });

//         // setTimeout(()=>{
//         //     this.projects.submit(form, this.test);
//         // }, 2000)
//     }
    
//     // Files
//     files(event: any) {
//         this.images.push(event.target.files[0]);
//     }
// }
