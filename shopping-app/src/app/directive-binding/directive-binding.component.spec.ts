import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveBindingComponent } from './directive-binding.component';

describe('DirectiveBindingComponent', () => {
  let component: DirectiveBindingComponent;
  let fixture: ComponentFixture<DirectiveBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectiveBindingComponent]
    });
    fixture = TestBed.createComponent(DirectiveBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
