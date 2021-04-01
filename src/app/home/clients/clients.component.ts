import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/mock_data_(3).json';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  listData: Array<{
    id: number, 
    first_name: string,
    last_name: string, 
    gender: string,
    company: string,
    uk_based: boolean,
  }>;


  constructor() { }

  ngOnInit(): void {
    this.listData = data.default;
    console.log(this.listData)
  }

}
