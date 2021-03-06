const { graphQLClient } = require('./apiClient.js');
 
module.exports = {
  
  // Returns a list of products
    getProducts(auth) {
        const query = `{
                  products(first: 10) {
                    edges {
                        node {
                           title
                        }
                    }
                }
              }`;
 
        return graphQLClient(query, auth);
    },
    
    // Returns shop data
    getShopData(auth) {
      const query = `{
                shop {
                  id
                  name
                  email
                  myshopify_domain
                }
            }`;

      return graphQLClient(query, auth);
    },
}
