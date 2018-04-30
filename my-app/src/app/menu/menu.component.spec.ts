mport { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import {DataService} from "../service/data.service";
import {Router} from "@angular/router";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  const router = jasmine.createSpyObj('Router',['navigate']);
  let service = jasmine.createSpyObj('DataService',['getService']);
  let pathName:string;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      providers: [
        MenuComponent,
        {provide: DataService, useValue: service},
        {provide: Router, useValue: router}
      ]
    });
    // Inject
    component = TestBed.get(MenuComponent);
    service= TestBed.get(DataService);
  });
  
 });