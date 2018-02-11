import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../services/loading-service';

@Component({
  selector: 'app-global-loader',
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.css']
})
export class GlobalLoaderComponent implements OnInit {

  constructor(public loadingService: LoadingService) { }

  ngOnInit() {
  }

}
