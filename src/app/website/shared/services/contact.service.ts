import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private afs: AngularFirestore) { }

  send(message) {
    this.afs.collection<any>('messages').doc(this.afs.createId()).set(message);
  }

}
