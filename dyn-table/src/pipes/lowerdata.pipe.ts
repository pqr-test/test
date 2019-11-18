import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"abclower"
})
export class LowerDataPipe implements PipeTransform {
    transform(val){
        return "Userid:"+val
    }
}