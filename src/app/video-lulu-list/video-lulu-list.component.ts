import { Component, OnInit } from '@angular/core';
import {VideoLulu} from "../models/video-lulu.model";
import {VideoLuluService} from "../services/video-lulu.service";

@Component({
  selector: 'app-video-lulu-list',
  templateUrl: './video-lulu-list.component.html',
  styleUrls: ['./video-lulu-list.component.scss']
})
export class VideoLuluListComponent implements OnInit {

  videoLulus!: VideoLulu[];

  constructor( private videoLuluService: VideoLuluService) {}

  ngOnInit(): void {
    this.videoLulus = this.videoLuluService.getAllVideoLulus();
  }

}
