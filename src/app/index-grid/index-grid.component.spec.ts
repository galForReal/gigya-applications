import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexGridComponent } from './index-grid.component';

describe('IndexGridComponent', () => {
  let component: IndexGridComponent;
  let fixture: ComponentFixture<IndexGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
