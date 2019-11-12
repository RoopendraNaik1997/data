import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history:any;
  cool:boolean;
  constructor(private historyservice:HistoryService) { }

  ngOnInit() {
    console.log("history called")
    this.historyservice.getHistory().subscribe(
      response=>{this.history=response;this.cool=true;console.log("data came");console.log(history)},
      error=>{this.history="you don't have any history";this.cool=false}
    )
  }

}
