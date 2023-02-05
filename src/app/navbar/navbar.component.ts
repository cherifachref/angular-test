import { Component } from '@angular/core';
import { SharServiceService } from '../services/shar-service.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  verifAdmin:any
  constructor(private share:SharServiceService){
    this.verifAdmin=this.share.isAdmin
  }

  name="achref"
  id="123"

}
