import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLuluComponent } from './video-lulu.component';

describe('VideoLuluComponent', () => {
  let component: VideoLuluComponent;
  let fixture: ComponentFixture<VideoLuluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoLuluComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoLuluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
