import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphTempComponent } from './graph-temp.component';

describe('GraphTempComponent', () => {
  let component: GraphTempComponent;
  let fixture: ComponentFixture<GraphTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphTempComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
