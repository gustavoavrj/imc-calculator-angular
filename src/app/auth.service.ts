import { Injectable } from '@angular/core';
import { Apollo } from "apollo-angular";
import gql from "graphql-tag";
import { BehaviorSubject, Observable } from 'rxjs';
import { Router} from '@angular/router';
let apiUrl = "https://shrouded-bastion-06544.herokuapp.com/graphql";
const AuthenUser = gql`
  mutation AuthenUser(
    $username: String!
    $password: String!

  ) {
    authenUser(username: $username, password: $password) {
      token
    }
  }
`;

const CreateNewUser = gql`
  mutation CreateNewUser(
    $username: String!
    $password: String!
    $fullname: String!

  ) {
    user(username: $username, password: $password, fullname: $fullname) {
      ok
    }
  }
`;

function extractFirstText(str){
  const matches = str.match(/'(.*?)'/);
  return matches
    ? matches[1]
    : str;
}



@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
  
    public data: any = null;
    constructor(private apollo: Apollo, private router: Router) {  
      this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
      this.currentUser = this.currentUserSubject.asObservable();

      }
      public get currentUserValue() {
        return this.currentUserSubject.value;
      }
 

    login(username, password) {
        
       this.apollo
        .mutate({
          mutation: AuthenUser,
          variables: {
            username: username,
            password: password
          }})
          .subscribe(
            ({ data }) => {
              this.data = data;
              console.log(extractFirstText(this.data.authenUser.token))
              localStorage.setItem("currentUser", extractFirstText(this.data.authenUser.token));
              this.currentUserSubject.next(extractFirstText(this.data.authenUser.token));
              this.router.navigate(['/dashboard'])
            },
            error => {
              console.log("there was an error sending the query", error);
              alert("Datos incorrectos");
            }
          );

    }
    register(name, username, password) {
      this.apollo
        .mutate({
          mutation: CreateNewUser,
          variables: {
            username: username,
            password: password,
            fullname: name
          }})
          .subscribe(
            ({ data }) => {
              this.data = data;
              alert("Registrado!");
              this.router.navigate(['/dashboard']);
            },
            error => {
              console.log("there was an error sending the query", error);
              alert("Datos incorrectos");
            }
          );


    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}