import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTransferService } from '../data-transfer.service';


@Component({
  selector: 'app-name-details',
  templateUrl: './name-details.component.html',
  styleUrls: ['./name-details.component.scss']
})
export class NameDetailsComponent implements OnInit {
  display:any;

  constructor(private dataTransfer : DataTransferService) { }

  ngOnInit(): void {
    this.display = this.dataTransfer.Details.data;
   
  
    
  }

}
