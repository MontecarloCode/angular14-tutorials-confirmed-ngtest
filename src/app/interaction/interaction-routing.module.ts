import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InteractionComponent } from './interaction.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { CountdownLocalVarParentComponent } from './countdown-local-var-parent/countdown-local-var-parent.component';
import { MissionComponent } from './mission/mission.component';

const routes: Routes = [
  { path: "interaction", component: InteractionComponent, children: [
    { path: "pass-data", component: HeroParentComponent },
    { path: "setter", component: NameParentComponent },
    { path: "ngonchanges", component: VersionParentComponent },
    { path: "vote", component: VotetakerComponent },
    { path: "countdown", component: CountdownLocalVarParentComponent },
    { path: "mission", component: MissionComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteractionRoutingModule { }
