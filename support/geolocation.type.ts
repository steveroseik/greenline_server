import { UserInputError } from "@nestjs/apollo";
import { GraphQLScalarType, Kind } from "graphql"

export const GeoLocation  = new GraphQLScalarType({
    name: "GeoLocation",
    description: "Geo location representation.",
    serialize: (value:string) => {
        const newVal = value.replace('POINT(', "").replace(")", "").split(' ');
        return {
            long: newVal[0],
            lat: newVal[1]
        }
    },

    parseValue: (value:string) => {
        const parsed = JSON.parse(value);
        console.log('parsed to: ', parsed);
        return parsed;
    },
    parseLiteral: (ast) => {
        if (ast.kind == Kind.STRING){
             const parsed = JSON.parse(ast.value);
             console.log('parsed: ', parsed);
             return parsed;
        }
        throw new UserInputError('cannot parse');
    }
})