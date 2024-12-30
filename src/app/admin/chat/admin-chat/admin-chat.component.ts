import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';

import { Router } from '@angular/router';
import { ChatService } from '../../../services/chat.service';

@Component({
  selector: 'app-admin-chat',
  templateUrl: './admin-chat.component.html',
  styleUrl: './admin-chat.component.css'
})
export class AdminChatComponent {
 
  chatService = inject(ChatService);
  inputMessage = "";
  messages: any[] = [];
  router = inject(Router);
  loggedInUserName = sessionStorage.getItem("user");
  roomName = sessionStorage.getItem("room");

  @ViewChild('scrollMe') private scrollContainer!: ElementRef;


  ngOnInit(): void {
    this.chatService.messages$.subscribe(res=>{
      this.messages = res;
      console.log(this.messages)
    });

    this.chatService.connectedUsers$.subscribe(res=>{
      console.log(res);

    })
  }

  ngAfterViewChecked(): void {
    this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }

  sendMessage(){
    this.chatService.sendMessage(this.inputMessage)
    .then(()=>{
      this.inputMessage = '';
    }).catch((err)=>{
      console.log(err);
    })
  }

  leaveChat(){
    this.chatService.leaveChat()
    .then(()=>{
      this.router.navigate(['admin/admin-welcome']);
      setTimeout(() => {
        location.reload();
      }, 0);
    }).catch((err)=>{
      console.log(err);
    })
  }
}