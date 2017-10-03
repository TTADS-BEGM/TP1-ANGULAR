import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trailervideo',
  templateUrl: './trailervideo.component.html',
  styleUrls: ['./trailervideo.component.css']
})
export class TrailervideoComponent {


  @Input()youtubeurl : any;

  constructor() { }

  ngOnInit() {
  }

}
