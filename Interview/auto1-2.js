// TODO:
// The solution must be close to real life applications
//
// 1) loading users + state management (use Redux-way by creating reducer and actions)
//    - load users
//    - implement pagination (populate existing user list with a list of the next page)
//    - control "loading" status
//    - handle failed request, save error (if any error occured during loading process)
//    - handle successful response

// 2) Load users on init

// 3) Show error message if request failed

// 4) "Next page" button
//    - disable button (use "disabled" class) during users loading and show "Loading..." text
//    - on click, load next part of users

// 5) Implement reusable "Table" and table "Column" components
//    - check the expected result in the App component
//    - the "title" prop of "Column" represents the title of Table column
//    - if no data and loading is in progress - show "Loading..." text
//    - if loading is completed but there is no data - show "No Data." message

// 6) Create a simple Modal box with user photo overview
//    - open modal on image click in "Photo" column
//    - add "close" button that closes the modal on click

import React from "react";

import "./styles.css";

const API_URL = "https://randomuser.me/api/?results=5";

function Table() {
  return (
    <table className="table table-bordered table-striped">
      <thead />
      <tbody />
    </table>
  );
}

export default function App() {
  return (
    <div className="container-lg p-4">
      <h1>Users</h1>

      <Table source={[]}>
        <Table.Column title="Photo" className="text-center">
          {() => "photo"}
        </Table.Column>
        <Table.Column title="Name">{() => "name"}</Table.Column>
        <Table.Column title="Email">{() => "email"}</Table.Column>
        <Table.Column title="Age">{() => "age"}</Table.Column>
      </Table>

      <div className="d-grid col-4 mx-auto">
        <button className="btn btn-dark" type="button" onClick={() => {}}>
          Next page
        </button>
      </div>
    </div>
  );
}
