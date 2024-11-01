import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColunmChartComponent } from './colunm-chart.component';

describe('ColunmChartComponent', () => {
  let component: ColunmChartComponent;
  let fixture: ComponentFixture<ColunmChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColunmChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColunmChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
