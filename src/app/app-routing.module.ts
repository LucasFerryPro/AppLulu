import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {VideoLuluListComponent} from "./video-lulu-list/video-lulu-list.component";

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'videos', component: VideoLuluListComponent},
];

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {

}
