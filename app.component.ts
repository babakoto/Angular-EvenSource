import {Component, OnDestroy, OnInit} from '@angular/core';
import {StreamService} from './stream.service';
import {concat, Observable, Observer, Subscription} from 'rxjs';
import {makeRe} from 'minimatch';
import {User} from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   users = new Set();
   constructor(private service:StreamService){}
   ngOnInit(): void {
        this.update()
   }

   update(){
     this.service.getAll().subscribe((data)=>{
       this.users.add(data)
       console.log(this.users)
     })
   }


}
