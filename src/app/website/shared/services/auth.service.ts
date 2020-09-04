import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    user;

    constructor(private auth: AngularFireAuth, private router: Router) {
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    login(email, password) {
        this.auth.signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.user = user;
                localStorage.setItem('user', JSON.stringify(user));
                this.router.navigateByUrl('/dashboard');
            }).catch(function(error) {
                console.log(error.code)
                console.log(error.message)
            });
    }
    logout() {
        this.auth.signOut();
        this.user = null;
        localStorage.clear();
        this.router.navigateByUrl('');
    }
    authCheck() {
        if (this.user)
            return true;
        else
            return false;
    }

}
