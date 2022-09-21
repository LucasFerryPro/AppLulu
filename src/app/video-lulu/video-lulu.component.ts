import {Component, Input, OnInit} from '@angular/core';
import {VideoLulu} from "../models/video-lulu.model";

@Component({
  selector: 'app-video-lulu',
  templateUrl: './video-lulu.component.html',
  styleUrls: ['./video-lulu.component.scss']
})
export class VideoLuluComponent implements OnInit {

  @Input() videoLulu!: VideoLulu;

  constructor() {}

  ngOnInit(): void {
  }

}
