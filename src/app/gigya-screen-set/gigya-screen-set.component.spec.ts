import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigyaScreenSetComponent } from './gigya-screen-set.component';

describe('GigyaScreenSetComponent', () => {
  let component: GigyaScreenSetComponent;
  let fixture: ComponentFixture<GigyaScreenSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GigyaScreenSetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GigyaScreenSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
