import { CreateMultipleItems } from "src/item/dto/create-multiple-item.input";

export function GenerateItemSku(name:string, merchantId:number, color?:string, colorHex?:string, 
    size?:string){
    
    const truncatedName = name.replace(/\s+/g, '').toUpperCase().slice(0, Math.min(3, name.length));
    let sku = `${truncatedName}`;

    if (color !== undefined){
        const truncatedColor = color.replace(/\s+/g, '').toUpperCase().slice(0, Math.min(3, color.length));
        sku = `${sku}-${truncatedColor}`;
    }
    
    
    if (size !== undefined){

        const truncatedSize = size.toUpperCase();
        sku = `${sku}-${truncatedSize}`;
    }

    if (colorHex !== undefined){
        const truncatedHex = colorHex.replace(/\s+/g, '').toUpperCase().slice(0, 3);
        sku = `${sku}-${truncatedHex}${merchantId}`
    }else{
        sku = `${sku}-${merchantId}`
    }
    

    return sku;
}