import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MissionService } from './_services/mission.service';

import { InteractionRoutingModule } from './interaction-routing.module';
import { InteractionComponent } from './interaction.component';
import { HeroChildComponent } from './hero-parent/hero-child.component';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { NameParentComponent } from './name-parent/name-parent.component';
import { NameChildComponent } from './name-parent/name-child.component';
import { VersionParentComponent } from './version-parent/version-parent.component';
import { VersionChildComponent } from './version-parent/version-child.component';
import { VotetakerComponent } from './votetaker/votetaker.component';
import { VoterComponent } from './votetaker/voter.component';
import { CountdownLocalVarParentComponent } from './countdown-local-var-parent/countdown-local-var-parent.component';
import { CountdownTimerComponent } from './countdown-local-var-parent/countdown-timer.component';
import { MissionComponent } from './mission/mission.component';
import { AstronautComponent } from './mission/astronaut.component';

@NgModule({
  declarations: [
    InteractionComponent,
    HeroChildComponent,
    HeroParentComponent,
    NameParentComponent,
    NameChildComponent,
    VersionParentComponent,
    VersionChildComponent,
    VotetakerComponent,
    VoterComponent,
    CountdownLocalVarParentComponent,
    CountdownTimerComponent,
    MissionComponent,
    AstronautComponent,
  ],
  imports: [
    CommonModule,
    InteractionRoutingModule
  ],
  // providers: [MissionService]
})
export class InteractionModule { }
