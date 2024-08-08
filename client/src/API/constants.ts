export const GRAPHQL_IPI: string = 'http://localhost:4000/api';


export const GETALL_CARS_QUERY: string = `
query cars {
  cars {
    id
    img_src
    brand
    model
    model_year
    color
    price
    availability
  }
}
`