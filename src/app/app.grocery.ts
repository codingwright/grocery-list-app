import { Component } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';

@Component({
    selector: 'app-grocery',
    templateUrl: './app.grocery.html',
    styleUrls: ['../assets/css/bootstrap.min.css']
})

export class GroceryComponent {
    task: string;
    tasks: string[] = [];

    onClick() {
        // this.tasks.splice(0, 0, this.tasks);
        this.tasks.push(this.task);
        this.task = '';
    }
}

