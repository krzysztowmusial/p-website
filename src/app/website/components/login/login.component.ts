import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    faMail = faEnvelope;
    faPassword = faKey;

    loginForm: FormGroup;

    constructor(private fb: FormBuilder, private auth: AuthService) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.email] ],
            password: ['', Validators.required ]
        })
    }

    login(form) {
        this.auth.login(form.email, form.password);
        this.loginForm.reset();
    }

}
