import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { setContext } from "apollo-link-context";
import { ApolloLink } from "apollo-link";
import { createHttpLink } from 'apollo-link-http';


const uri = 'https://shrouded-bastion-06544.herokuapp.com/graphql'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink){
  const token = localStorage.getItem("currentUser");
  const auth = setContext((operation, context) => {
    if (token)
      return {
        headers: {
          Authorization: `Bearer ${token}`
        }
      };
  });

  const link = ApolloLink.from([auth, createHttpLink({ uri })]);
  
  return {
    link: link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
