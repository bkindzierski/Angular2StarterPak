import { PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './product';

@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform{

    transform(value: IProduct[], args: string[]): IProduct[]{
        
        //fix for property in product-list not being set to default
        if (args == null){
            return value;
        }
        //console.log('args: ' + args[0]);
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        // for (let i in args) { <-- example for loop n typescript
        //     //console.log(args[i]); // "0", "1", "2",
        //     //console.log(filter); // "0", "1", "2",
        // }
        return filter ? value.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filter) !=-1) : value;        
    }
}