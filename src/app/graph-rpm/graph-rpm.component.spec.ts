import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphRpmComponent } from './graph-rpm.component';

describe('GraphRpmComponent', () => {
  let component: GraphRpmComponent;
  let fixture: ComponentFixture<GraphRpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphRpmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraphRpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
