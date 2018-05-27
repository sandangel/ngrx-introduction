import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAuth from './auth/store';
import { Observable } from 'rxjs';
import { User } from './auth/store/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  user$: Observable<User> = this.store.select('auth', 'status', 'user');

  constructor(private store: Store<fromAuth.State>) { }

  ngOnInit() {
  }

}
