import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {StompService, StompState} from '@stomp/ng2-stompjs';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  public state: Observable<string>;

  /** Constructor */
  constructor(private _stompService: StompService) { }

  ngOnInit() {
    console.log('Status init');
    this.state = this._stompService.state
      .map((state: number) => StompState[state]);
  }
}
