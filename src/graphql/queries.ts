import {gql} from "@apollo/client"

const GET_ALL_BLOGS = gql `query
{      
   blogNames(pagination:{
       limit: 50 
   }) {
     data {
       id
       attributes{
         Headline
         Image {
           data {
             id 
             attributes {
               name
               alternativeText
               caption
               url
               width
               height
               formats
             }
           }
         }
         BlogBody 
         TableofContent
         FAQs
         createdAt
         publishedAt
         JSONLD
         Category
         Slug
       }
       
     }
   }
}`
const GET_INDIVIDUAL_BLOG = gql`query ($ID: ID!){
  blogNames(filters: {id: {eq: $ID}}){
    data {
      id
      attributes{
        Headline
        Image {
          data {
            id 
            attributes {
              name
              alternativeText
              caption
              url
              width
              height
              formats
            }
          }
        }
        BlogBody 
        TableofContent
        FAQs
        createdAt
        publishedAt
        JSONLD
        Category
        Slug
      } 
    } 
  }
}
`
export {GET_ALL_BLOGS, GET_INDIVIDUAL_BLOG}