import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-project';
  showComponent: boolean =  true;

  constructor(private router: Router) {  
    if(localStorage.getItem("accessToken")){
      this.router.navigateByUrl(`/dashboard`);
    }else{
      this.router.navigateByUrl(`/login`);
    }    
  	this.router.events.subscribe(event => this.modifyHeader(event));
  };

  modifyHeader(path){
  		var str = this.router.url;
 	 	console.log(str);
 	 	 if (str === "/login") {
	      this.showComponent = false;
	    } else {
	      this.showComponent = true;
	    }
  }
}
