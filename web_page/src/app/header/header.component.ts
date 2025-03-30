import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  ngOnInit() {
  }

  constructor(public httpClient: HttpClient) {}
  takeQuizFlag = true
  categories: any

  api = 'http://localhost:8081/api/v1/maker'
  getAllCategories(event: Event) {
    event.preventDefault()
      if(!this.takeQuizFlag) {
        this.takeQuizFlag = false
      }
      else {
       this.takeQuizFlag = true
      }
      let evnt = event.target as HTMLAnchorElement

  if(evnt.innerText.trim()!="Take Quiz".trim()) {
     console.log(evnt.innerText)
     this.httpClient.get<any>(this.api+"/category"+"/"+evnt.id+"/categoryName"+"/"+evnt.innerText).subscribe(data => {
      this.categories = data.data
     console.log(this.categories)
  });
}
else {
   this.httpClient.get<any>(this.api).subscribe(data => {
    this.categories = data.data
    console.log(this.categories)
 });
}
}
}