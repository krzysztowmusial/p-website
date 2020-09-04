import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-project',
  templateUrl: './dashboard-project.component.html',
  styleUrls: ['./dashboard-project.component.scss']
})
export class DashboardProjectComponent implements OnInit {

    // Icons
    faName = faUser;

    // Form
    projectForm: FormGroup = this.fb.group({
        name: '',
        category: '',
        desc: '',
        tags: '',
        repo: '',
        www: ''
    });

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
    }

    send(form) {
        console.log(form);
    }

}
