import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  getName=''
  getId=''

  constructor(private route:ActivatedRoute){
    this.route.queryParams.subscribe(data=>{
      this.getName=data.name
      this.getId=data.id

    })
  } 


}
