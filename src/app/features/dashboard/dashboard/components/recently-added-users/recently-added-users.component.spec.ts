import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyAddedUsersComponent } from './recently-added-users.component';

describe('RecentlyAddedUsersComponent', () => {
  let component: RecentlyAddedUsersComponent;
  let fixture: ComponentFixture<RecentlyAddedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentlyAddedUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyAddedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
