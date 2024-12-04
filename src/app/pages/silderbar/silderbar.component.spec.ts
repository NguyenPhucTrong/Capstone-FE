import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SilderbarComponent } from './silderbar.component';

describe('SilderbarComponent', () => {
  let component: SilderbarComponent;
  let fixture: ComponentFixture<SilderbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SilderbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SilderbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
