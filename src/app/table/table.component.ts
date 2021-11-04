import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent{
  title = "MulTable";
  counter = 0;

  IncrementCounter(){
    this.counter += 1;
  }

  DecrementCounter(){
    this.counter -= 1;
  }

  NoMessage(){
    var no = "You opted to discontinue!! Hope you enjoyed"
    window.alert(no);
  }



}
