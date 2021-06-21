import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  candidateList: any;

  pic1: string = "assets/images/images (1).jpg";
  pic2: string = "assets/images/gadgets.png";
  pic3: string = "assets/images/ICT.png";


  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get('http://localhost:7000/candidates').subscribe(result => {
      this.candidateList = result;
      console.log(this.candidateList);
    }, error => {
      console.error(error);
    })
  }

}
2