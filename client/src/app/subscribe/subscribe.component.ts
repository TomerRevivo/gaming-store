import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MessengerService } from '../services/messenger.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css'],
})
export class SubscribeComponent implements OnInit {
  email: string = '';
  name: string = '';
  constructor(private messengerService:MessengerService) {}

  ngOnInit(): void {}
  saveUserMail(){
    this.messengerService.saveUserMail(this.email,this.name).subscribe();
  }
}
