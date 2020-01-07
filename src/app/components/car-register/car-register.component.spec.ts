import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRegisterComponent } from './car-register.component';
import { AdminComponent } from '../admin/admin.component';
import { DriverRegisterComponent } from '../driver-register/driver-register.component';
import { LoginComponent } from '../login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

describe('CarRegisterComponent', () => {
  let component: CarRegisterComponent;
  let fixture: ComponentFixture<CarRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminComponent, CarRegisterComponent, DriverRegisterComponent, LoginComponent],
      imports: [HttpClientModule, AppRoutingModule, FormsModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
