import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../progress.service';


@Component({
  selector: 'app-pro-bar',
  templateUrl: './pro-bar.component.html',
  styleUrl: './pro-bar.component.scss'
})
export class ProBarComponent implements OnInit {
  showProgress: boolean = false;
  countries: any;
  res: any;
  commonapi: any;
  searchCountryVal!: string;
  searchVal: any;

  constructor(private progressService: ProgressService, private service: ProgressService) {}
  ngOnInit(): void {
   
  }


  

  addData(){
    const user = {
      name: 'Test',
      phone: '9876543212'
    }

    this.progressService.addData(user);
  }

  getCountries(){
    this.service.getCountries().subscribe((res:any)=>{
      this.countries = res??[];
      console.log(res);
    })
  }

  searchCountry() {
    this.service.searchCountry(this.searchCountryVal).subscribe((res:any)=> {
      this.countries = this.res??[];
      console.log(this.res)
    })
  }

  fetchData(){
    this.commonapi.getCountries().subscribe((res:any)=>{
      console.log(res);
    })
  }

  searchData(){
    this.commonapi.getSearchCountries(this.searchVal).subscribe((res:any)=>{
      console.log(res);
      this.commonapi.searchCounties = res;
    })
  }
 
}
 
