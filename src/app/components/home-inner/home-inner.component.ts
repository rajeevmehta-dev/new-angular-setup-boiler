import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-home-inner',
  templateUrl: './home-inner.component.html',
  styleUrls: ['./home-inner.component.css']
})
export class HomeInnerComponent implements OnInit {


  messages: any[] = [];
  subscription: Subscription;


  constructor(private messageService:MessageService) {


this.subscription=this.messageService.getMessage().subscribe((data)=>{

  console.log('data in subject');
  console.log(data);
  this.messages.push(data);
})


   }

  ngOnInit() {
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
