import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodsComponent } from './methods.component';

describe('MethodsComponent', () => {
  let component: MethodsComponent;
  let fixture: ComponentFixture<MethodsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [MethodsComponent]
});
    fixture = TestBed.createComponent(MethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
