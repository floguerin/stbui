import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';


@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ChatsComponent implements OnInit {

  chats: any[];
  activeChat: any;

  chatName: string = 'demo';

  constructor(@Inject('ChatsService') private service) {
  }

  ngOnInit() {
    this.getChatsList();
  }

  getChatsList() {
    this.service.getChatsList().subscribe(chats => {
      this.chats = chats;
      this.activeChat = chats[0];
    });
  }

  createChat() {
    let d = {
      "picture": "assets/images/avatars/2.jpg",
      "name": this.chatName,
      "messages": [
        {
          "message": "Hello",
          "when": 1,
          "who": "me"
        },
        {
          "message": "How are you ？",
          "when": 1,
          "who": "partner"
        }
      ],
      "lastMessageTime": 1,
      "lastMessage": "me"
    };
    this.service.createChat(d);
  }

  sendChat(chat) {
    this.service.updateChatMessage(chat.$key, chat);
  }

  onActiveChat(chat) {
    this.activeChat = chat;
  }

}
