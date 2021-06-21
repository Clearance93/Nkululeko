import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {


  pic1: string = "assets/images/full stack.png";
  pic2: string = "assets/images/project management.jpg";
  pic3: string = "assets/images/software developer.jpeg";

  constructor() { }

  ngOnInit(): void {
  }

}
