import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharServiceService {

  data={
    name:'mounir',
    age:'34'
  }

  isAdmin=true

  constructor() { }

  print(){
    console.log(this.data.name)
    console.log(this.data.age)
  }
}
