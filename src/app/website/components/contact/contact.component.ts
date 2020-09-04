import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { faUser, faEnvelope, faCommentAlt } from '@fortawesome/free-regular-svg-icons'
import { ContactService } from '../../shared/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

// Icons
    faName = faUser;
    faMail = faEnvelope;
    faMessage = faCommentAlt;

    contactForm: FormGroup;

    constructor(private fb: FormBuilder, private contact: ContactService) { }

    ngOnInit(): void {
        this.contactForm = this.fb.group({
            name: ['', Validators.required ],
            email: ['', [Validators.required, Validators.email] ],
            message: ['', Validators.required ]
        })
    }

    send(form) {
        let message = {
            date: new Date(),
            name: form.name,
            email: form.email,
            message: form.message
        }
        this.contact.send(message);
        this.contactForm.reset();
    }

}
