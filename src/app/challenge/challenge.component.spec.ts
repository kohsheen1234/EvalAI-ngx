import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderStaticComponent } from '../partials/nav/header-static/header-static.component';
import { ChallengeComponent } from './challenge.component';
import { ApiService } from '../services/api.service';
import { GlobalService } from '../global.service';
import { ChallengeService } from '../services/challenge.service';
import { HttpClientModule } from '@angular/common/http';
import { ChallengeoverviewComponent } from '../challengeoverview/challengeoverview.component';
import { ChallengeevaluationComponent } from '../challengeevaluation/challengeevaluation.component';
import { ChallengephasesComponent } from '../challengephases/challengephases.component';
import { ChallengeparticipateComponent } from '../challengeparticipate/challengeparticipate.component';
import { ChallengeleaderboardComponent } from '../challengeleaderboard/challengeleaderboard.component';
import { ChallengesubmitComponent } from '../challengesubmit/challengesubmit.component';
import { ChallengesubmissionsComponent } from '../challengesubmissions/challengesubmissions.component';
import { PhasecardComponent } from '../phasecard/phasecard.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth.service';
import { ForceloginComponent } from '../forcelogin/forcelogin.component';
import { FooterComponent } from '../footer/footer.component';
import { TeamlistComponent } from '../teamlist/teamlist.component';
import { SelectphaseComponent } from '../selectphase/selectphase.component';
import { InputComponent } from '../input/input.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ChallengeComponent', () => {
  let component: ChallengeComponent;
  let fixture: ComponentFixture<ChallengeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengeComponent,
                      HeaderStaticComponent,
                      ChallengeoverviewComponent,
                      ChallengeevaluationComponent,
                      ChallengephasesComponent,
                      ChallengeparticipateComponent,
                      ChallengeleaderboardComponent,
                      ChallengesubmitComponent,
                      ChallengesubmissionsComponent,
                      PhasecardComponent,
                      ForceloginComponent,
                      FooterComponent,
                      TeamlistComponent,
                      SelectphaseComponent ],
      providers: [ ApiService, GlobalService, ChallengeService, AuthService ],
      imports: [ HttpClientModule, RouterTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});