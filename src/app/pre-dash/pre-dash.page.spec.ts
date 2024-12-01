import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreDashPage } from './pre-dash.page';

describe('PreDashPage', () => {
  let component: PreDashPage;
  let fixture: ComponentFixture<PreDashPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreDashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
