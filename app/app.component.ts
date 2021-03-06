import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// {{}} interpolation - Component to DOM
// []   property binding - Component to DOM
// ()   event binding - DOM to Component

interface PCHResponse {
  id: number;
  content: string;
}

@Component({
  selector: 'pet-come-home-app', // to use me, put <pet-come-home-app> in index.html
//  templateUrl: './app.location.html',  //not sure if needed. Taken from Tom's video2'
  template: `
<!--  <h1>{{name}}</h1> -->

<!-- <p><i>{{name}} is at {{street}} in {{city}} in the {{region}} region.</i></p> -->

  <br>

  <fieldset>
    <label>Location Name:
     <input [(ngModel)]="name" placeholder="Location Name"> 
     </label>
     </fieldset>
  <br>

<!--  <label><input type="checkbox" [(ngModel)]="hideAddress"> Hide Address</label> -->
  
  <!-- <pre>{{street | json}}</pre> --> 

  <div [hidden]="hideAddress">

    <fieldset>
      <label>Address: 
      <input [(ngModel)]="street" placeholder="Street">
      </label>
    </fieldset>
    <fieldset>
      <label>City: 
      <input [(ngModel)]="city" placeholder="City">
      </label>
    </fieldset>
    <fieldset>
      <label>State: 
        <input [(ngModel)]="state" placeholder="State">
      </label>
    </fieldset>
<!--    <fieldset> -->
<!--      <label> -->
<!--        Region: -->
<!--        <!-- <select (change)="regionchange($event.target.value)"> -->
<!--        <select [(ngModel)]="region"> -->
<!--          <option>North</option> -->
<!--          <option>South</option> -->
<!--          <option>East</option> -->
<!--          <option>West</option> -->
<!--        </select> -->
<!--      </label> --> 
<!--    </fieldset> -->

<!-- <button (click)="locationClick()">Add Location</button> -->
<button type="submit" class="btn" ng-click="save()" ng-disabled="myForm.$invalid">Add Location</button>
  </div>
  `,
})

export class AppController implements OnInit {
  name = 'Central Park';
  city = 'Somewhere';
  street = '123 Main St';
  state = 'NH';
  region = 'East';
  hideAddress = false;
  results: PCHResponse;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<PCHResponse>('http://localhost:8080/api/v1/pet').subscribe(data => {
      this.results = data;
    });
  }

}
