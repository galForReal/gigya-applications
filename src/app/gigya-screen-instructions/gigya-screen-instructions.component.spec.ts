import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigyaScreenInstructionsComponent } from './gigya-screen-instructions.component';

describe('GigyaScreenInstructionsComponent', () => {
  let component: GigyaScreenInstructionsComponent;
  let fixture: ComponentFixture<GigyaScreenInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigyaScreenInstructionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigyaScreenInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
