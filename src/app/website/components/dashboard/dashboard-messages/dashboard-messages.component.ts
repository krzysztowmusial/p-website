import { Component, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/website/shared/services/messages.service';

@Component({
  selector: 'app-dashboard-messages',
  templateUrl: './dashboard-messages.component.html',
  styleUrls: ['./dashboard-messages.component.scss']
})
export class DashboardMessagesComponent implements OnInit {

    messages = [];
    value = null;

    constructor(private ms: MessagesService) { }

    ngOnInit(): void {
        this.ms.getMessages().subscribe((messages)=>{
            this.messages = messages;
            this.messages.reverse();
        })
    }

    expand(message, i) {
        
        if (this.value == i) {
            this.value = null;
        } else {
            this.value = i;
        }
        
        // if (message.status == 'unread') {
        //     let object = {
        //         status: 'read'
        //     }
        //     this.firebase.updateDoc('messages', message.id, object);
        // } else {
        //     return;
        // }
    }

}
