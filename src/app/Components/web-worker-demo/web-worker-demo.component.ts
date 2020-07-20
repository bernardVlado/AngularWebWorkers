import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-worker-demo',
  templateUrl: './web-worker-demo.component.html',
  styleUrls: ['./web-worker-demo.component.css']
})
export class WebWorkerDemoComponent implements OnInit {
  private baseUrl: String = "http://jsonplaceholder.typicode.com/posts";
  public articles;

  constructor() { }

  ngOnInit() {  }

  loadDataFromApiUsingWebWorker() {
    if (typeof Worker !== 'undefined') {

      // Create a new Web Worker
      const worker = new Worker('../../web-worker-demo.worker', { type: 'module' });

      // Receiving data from Web Worker
      worker.onmessage = ({ data }) => {
        this.articles = data;
        console.log("Web Worker responded: ", this.articles);
      };

      // sending data to Web Worker
      worker.postMessage(this.baseUrl);

    } else {

      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
      console.error("Your browser does not support Web Workers");
    }
  }

}
