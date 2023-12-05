import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProBarComponent } from './pro-bar.component';

describe('ProBarComponent', () => {
  let component: ProBarComponent;
  let fixture: ComponentFixture<ProBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
