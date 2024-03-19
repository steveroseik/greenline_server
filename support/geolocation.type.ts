import { UserInputError } from "@nestjs/apollo";
import { GraphQLScalarType, Kind } from "graphql"

export const GeoLocation = new GraphQLScalarType({
    name: "GeoLocation",
    description: "Geo location representation.",
    serialize: (value:string) => {
        const newVal = value.replace('POINT(', "").replace(")", "").split(' ');
        return {
            long: newVal[0],
            lat: newVal[1]
        }
    },

    parseValue: (value:JSON) => {
        console.log('parsed to: ', value);
        return `POINT(${value['lat']} ${value['long']})`;
    },
    parseLiteral: (ast) => {
        if (ast.kind == Kind.OBJECT){
           let long:number;
           let lat;
           ast.fields[1].name
           ast.fields.forEach((field) => {
            if (field.name.value == 'long') long = field.value['value'];
            if (field.name.value == 'lat') lat = field.value['value'];
           })


           if (long === undefined || lat === undefined) throw new UserInputError('cannot parse location input');
            
            return `POINT(${lat} ${long})`;
        }
        throw new UserInputError('cannot parse location input');
    }
})