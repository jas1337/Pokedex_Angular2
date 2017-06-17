import {Injectable, Pipe} from '@angular/core';

@Pipe({
    name: 'sort-by-id'
})
@Injectable()
export class SortbyIdPipe  {
    transform(items: any[], args: any[]): any {
        return items.filter(item => item.id.indexOf(args[0]) !== -1);
    }
}