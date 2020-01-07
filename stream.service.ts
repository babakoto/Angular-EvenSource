import {Injectable, NgZone} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, observable, Observable} from 'rxjs';
import {User} from './User';
import {EventSourcePolyfill} from 'ng-event-source';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  /*private userSources = new BehaviorSubject(new User());
  _userSources:Observable<User> = this.userSources.asObservable();

  constructor(private http:HttpClient, private zone:NgZone) {
    this.getAllUser().subscribe((data)=>{
      this.userSources.next(new User().deserialize(data))
    }, error => {
      console.log(error)
    })
  }


  getAllUser(): Observable<any[]> {
    return new Observable(obs=>{
      let es = new EventSource("http://localhost:8080/users");
      es.onmessage = (event)=>{
        let json = JSON.parse(event.data);
        console.log("json",json)
        if (json !== undefined && json !== '') {
          this.zone.run(() => obs.next(json));

        }
      };
      es.onerror = (error) => {
        if (es.readyState === 2) {
          console.log('The stream has been closed by the server.');
          es.close();
          obs.complete();
        } else {
          obs.error('EventSource error: ' + error);
        }
      }
    })
  }*/

  constructor(private http:HttpClient, private zone:NgZone){}

  getAll(){
   return new Observable((observable)=>{
     const evSource = new EventSource("http://localhost:8080/users");
     evSource.onmessage = event=>{

       console.log("==========>",evSource.readyState)
       this.zone.run(() => observable.next(event.data));
     };
     evSource.onerror = (error) => {
       if(error){
         console.log(">> Error:",error)
       }

     }
   })
  }


}
