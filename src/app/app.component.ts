import { isPlatformBrowser , DOCUMENT} from '@angular/common';
import { environment } from '../environments/environment';
import { Component, OnInit , Inject, PLATFORM_ID} from '@angular/core';
import { CallServerService } from './call-server.service';
import { DataModel } from './data-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-console';
  public data: DataModel;
  constructor(
    private callServerService: CallServerService
  ) { }

  ngOnInit() {
    this.getData();
}

    public getData() {
      this.callServerService.getData().subscribe((res: any) => {
      console.log(res);
     // this.data = res;
     // console.log(this.data);
      });
    }

    public functionClick() {
      const abc = {
        name: 'thienvu',
        content: '',
        author: '',
        index: 1
       };
     // this.data = abc;
      // this.data[0].author = 'thienvu';
    }

    public functionClick2() {
      console.log(this.data);
    }
}
