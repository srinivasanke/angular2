import {Component} from '@angular/core';

@Component({
	selector:'pm-app',
	template:`<div><h1>This is Angular2</h1>
	<book-app></book-app>
	<pm-products></pm-products>
	<pm-order></pm-order>
	</div>`
})

export class AppComponent{
	
}