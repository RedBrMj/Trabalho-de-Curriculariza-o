import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsinoComponent } from './ensino.component';

describe('EnsinoComponent', () => {
  let component: EnsinoComponent;
  let fixture: ComponentFixture<EnsinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnsinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnsinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
