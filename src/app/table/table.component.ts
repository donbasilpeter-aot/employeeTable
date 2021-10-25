import { Component,OnInit } from '@angular/core';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public readonly data = [
    {
      "name": "John Pollock",
      "age": "34",
      "balance": "133.33",
      "company": "MOMENTIA"
    },
    {
      "name": "Erik James",
      "age": "32",
      "balance": "1323.57",
      "company": "MOMENTIA"
    },
    {
      "name": "Gentry Hull",
      "age": "20",
      "balance": "2212.91",
      "company": "elentrix"
    },
    {
      "name": "Liza Bullock",
      "age": "30",
      "balance": "1223.57",
      "company": "MOMENTIA"
    },
    {
      "name": "Peter",
      "age": "33",
      "balance": "1223.57",
      "company": "MOMENTIA"
    },
    {
      "name": "Liza",
      "age": "32",
      "balance": "1224.55",
      "company": "MOMENTIA"
    },
    {
      "name": "Henry",
      "age": "40",
      "balance": "3223.57",
      "company": "elentrix"
    },
    {
      "name": "Dixon",
      "age": "35",
      "balance": "1255.57",
      "company": "MOMENTIA"
    },
    {
      "name": "Sam",
      "age": "32",
      "balance": "1423.47",
      "company": "elentrix"
    },
    {
      "name": "Evin",
      "age": "33",
      "balance": "1444.43",
      "company": "MOMENTIA"
    },
    {
      "name": "Liz",
      "age": "26",
      "balance": "1280.32",
      "company": "MOMENTIA"
    }
  ]

  tableDisplay:any;
  input_value:string ="";


  constructor(private dataTransfer : DataTransferService) {
    this.tableDisplay= this.data;
 
  }

  ngOnInit(): void{
   
    
  }
  update(item:any){
    this.dataTransfer.Details = {data:item}
  }

  filter(){
    this.tableDisplay = [];
    this.data.forEach( eachElement => {
      if(((eachElement.company).toLocaleLowerCase()).includes((this.input_value).toLocaleLowerCase())){
        this.tableDisplay.push(eachElement)
      }
      
    });

  }

}




