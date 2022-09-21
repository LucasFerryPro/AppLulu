import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLuluListComponent } from './video-lulu-list.component';

describe('VideoLuluListComponent', () => {
  let component: VideoLuluListComponent;
  let fixture: ComponentFixture<VideoLuluListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoLuluListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoLuluListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
