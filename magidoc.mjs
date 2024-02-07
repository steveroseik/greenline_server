export default {
  introspection: {
    type: 'url',
    url: 'http://localhost:3001/graphql',
  },
  website: {
    template: 'carbon-multi-page',
    options: {
      queryGenerationFactories: {
        'GraphqlCursor': '{"afterCursor": "sdgHJhdnxhjDA==", "beforeCursor": "jSDAjJenHAS=="}',
        'GeoLocation': '{"lat": 0.023023, "long": -1.232343}'
      },
    }
  },
}