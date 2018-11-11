import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FraudeContentComponent } from './fraude-content.component';

describe('FraudeContentComponent', () => {
  let component: FraudeContentComponent;
  let fixture: ComponentFixture<FraudeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FraudeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FraudeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
