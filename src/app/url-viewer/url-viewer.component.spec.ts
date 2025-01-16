import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlViewerComponent } from './url-viewer.component';

describe('UrlViewerComponent', () => {
  let component: UrlViewerComponent;
  let fixture: ComponentFixture<UrlViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
