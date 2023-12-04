import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  about: any  = '';
  constructor(
    private _about: MyServiceService
  ) { }

  ngOnInit(): void {
    this._about.getAbout().subscribe((response: any)=> {
      console.log(response);
      this.about= response;
    })
  }

}
