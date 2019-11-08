import { Component, Input, Output,EventEmitter } from "@angular/core";


@Component({
    selector:"app-header",
    templateUrl:"header.component.html",
    styleUrls:["header.component.scss"]
})
export class HeaderComponent{
    @Input()
    public name:any=null;
    @Input()
    public data:any;

    @Output()
    public triggerRename:EventEmitter<any>=new EventEmitter();
    @Output()
    public triggerReset:EventEmitter<any>=new EventEmitter();
    Rename(){
        this.triggerRename.emit();
    }
    Reset(){
        this.triggerReset.emit();
    }
}