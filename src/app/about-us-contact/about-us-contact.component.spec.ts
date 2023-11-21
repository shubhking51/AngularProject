import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsContactComponent } from './about-us-contact.component';

describe('AboutUsContactComponent', () => {
  let component: AboutUsContactComponent;
  let fixture: ComponentFixture<AboutUsContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutUsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
