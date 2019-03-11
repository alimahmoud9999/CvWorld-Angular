import { Component, OnInit } from '@angular/core';
declare var $:any;
import 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Counter Number .sec4

    $(window).scroll(function () {
      var pT = $('.sec3');
      if (!pT.length) {
          return;
      }
      var pTT = pT.offset().top;
      var hH = $('.sec3').outerHeight(),
          wH = $(window).height(),
          wS = $(this).scrollTop();
      if (wS > (pTT + hH - wH)) {
          $(function () {
              $('.counter').each(function () {
                  var $this = $(this),
                      countTo = $this.attr('data-count');
                  $({
                      countNum: $this.text()
                  }).animate({
                      countNum: countTo
                  }, {
                      duration: 2000,
                      easing: 'linear',
                      step: function () {
                          $this.text(Math.floor(this.countNum));
                      },
                      complete: function () {
                          $this.text(this.countNum);
                      }
                  });
              });
          });
      }
  });
  }

}
