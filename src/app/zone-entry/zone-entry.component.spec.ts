import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneEntryComponent } from './zone-entry.component';

describe('ZoneEntryComponent', () => {
  let component: ZoneEntryComponent;
  let fixture: ComponentFixture<ZoneEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
