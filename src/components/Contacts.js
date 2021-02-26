import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";
import swal from "sweetalert";
import { UserConsumer } from "./userContext";

const Contacts = () => {
  var [currentId, setCurrentId] = useState("");
  var [contactObjects, setContactObjects] = useState({});

  // Once components load complete
  useEffect(() => {
    firebaseDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContactObjects({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  const addOrEdit = (obj) => {
    if (currentId == "")
      firebaseDb.child("contacts").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
        swal("Good job!", "Contact added successfully!", "success");
      });
    else
      firebaseDb.child(`contacts/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };

  const onDelete = (id) => {
    // if (window.confirm("Are you sure to delete this record?")) {
    //   console.log("yesss");
    //   firebaseDb.child(`contacts/${id}`).remove((err) => {
    //     if (err) console.log(err);
    //     else setCurrentId("");
    //   });
    //   console.log("no");
    // }

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this contact data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        firebaseDb.child(`contacts/${id}`).remove((err) => {
          if (err) console.log(err);
          else setCurrentId("");
        });
        swal("Poof! Your contact data has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your contact data is safe!");
      }
    });
  };

  return (
    <>
      {/* <UserConsumer>
        {(value) => {
          return <div>Hello {value.fname}</div>;
        }}
      </UserConsumer> */}
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h4 className="display-4 text-center">Contact Manager</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ContactForm
            {...{ currentId, contactObjects, addOrEdit }}
          ></ContactForm>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObjects).map((key) => (
                <tr key={key}>
                  <td>{contactObjects[key].fullName}</td>
                  <td>{contactObjects[key].mobile}</td>
                  <td>{contactObjects[key].email}</td>
                  <td className="bg-light">
                    <a
                      className="btn text-primary"
                      onClick={() => {
                        setCurrentId(key);
                      }}
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </a>
                    <a
                      className="btn text-danger"
                      onClick={() => {
                        onDelete(key);
                      }}
                    >
                      <i className="far fa-trash-alt"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Contacts;
