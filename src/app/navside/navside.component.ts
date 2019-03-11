import { Component, OnInit } from '@angular/core';
declare var $:any;
import 'jquery';

@Component({
  selector: 'app-navside',
  templateUrl: './navside.component.html',
  styleUrls: ['./navside.component.css']
})
export class NavsideComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.tabs ul li ').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
      });
    });
  }

}
