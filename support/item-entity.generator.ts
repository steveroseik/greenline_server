import { BatchItemInput } from "src/item/dto/batch-item.input";
import { CreateMultipleItems } from "src/item/dto/create-multiple-item.input";
import { ItemSingleInput } from "src/item/dto/item-single.input";
import { GenerateItemSku as generateItemSku } from "./item-sku.generator";


export function generateItemEntities(input:CreateMultipleItems[]): BatchItemInput[]{

    let batch:BatchItemInput[] = [];

    for (let i = 0; i< input.length; i++){


        if (input[i].sizes !== undefined && input[i].sizes.length !== 0){

            let items:ItemSingleInput[] = [];
            for (let j = 0; j < input[i].sizes.length ; j++){

                const singleBatch = generateColorIterations(input[i], input[i].sizes[j]);
                if (singleBatch !== null){
                    items = [...items, ...singleBatch];
                }else{
                    throw Error('cannot generate batch');
                }
            }

            batch.push({itemPrices: input[i].itemPrices, items: items})

        }else{
            const items = generateColorIterations(input[i]);
            batch.push({itemPrices: input[i].itemPrices, items: items})

        }
    }

    return batch;
}

export function generateColorIterations(input: CreateMultipleItems, size?: string): ItemSingleInput[] | null{

    let items:ItemSingleInput[] = [];

    const colorDefined = input.colors !== undefined
    const hexDefined = input.colorsHex !== undefined

    if (colorDefined){
        if (input.colors.length !== input.imageUrls.length) throw Error('incorrect colors length.');
    } 

    if (hexDefined){
        if (input.colorsHex.length !== input.imageUrls.length) throw Error('incorrect hex colors length.');
    } 

    for (let i = 0; i < input.imageUrls.length; i++){

        items.push({
            sku: generateItemSku(input.name, input.merchantId, colorDefined ? input.colors[i] : null,
                hexDefined ? input.colorsHex[i] : undefined, size),
            merchantId: input.merchantId,
            name: input.name,
            description: input.description,
            imageUrl: input.imageUrls[i],
            color: colorDefined ? input.colors[i] : undefined,
            colorHex: hexDefined ? input.colorsHex[i] : undefined,
            size: size,
        });
    }

    return items;

}