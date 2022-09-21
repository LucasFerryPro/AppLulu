import { Injectable } from '@angular/core';
import {VideoLulu} from "../models/video-lulu.model";

@Injectable({
  providedIn: 'root'
})
export class VideoLuluService {
  videoLulus: VideoLulu[] = [
    {
      title: "test",
      sender: "lucas",
      description:"description 1",
      videoPath:""
    },
    {
      title: "test2",
      sender: "thomas",
      description:"description 2",
      videoPath:""
    },
    {
      title: "test3",
      sender: "lilian",
      description:"description 3",
      videoPath:""
    },
  ];

  getAllVideoLulus(): VideoLulu[] {
    return this.videoLulus;
  }
}
