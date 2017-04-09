import { Component, OnInit, Inject } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GDPService } from '../../services/GDP.service';
import { NgZone } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
  providers: [ GDPService ]
})
export class BarChartComponent implements OnInit {
// lineChart
  public lineChartData:Array<any> = [
    { data: [], label: "GDP in USA ($'000) " }
  ];
  public lineChartLabels:Array<any> = [];
  public lineChartType:string = 'line';

  

  constructor(private GDPService: GDPService) { 
    // NgZone.assertInAngularZone();
  }

  ngOnInit() {
    this.getData();
  }
  
  getData() {
    this.GDPService.getData()
      .subscribe(data => {
        data.data.map((n, i) => {
          this.lineChartLabels.push(n[0]);
          this.lineChartData[0]['data'].push(n[1]);
        });
      });
  }
 
  randomizeType() {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    console.log(this.lineChartType, this.lineChartLabels)
  }
 
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
}
