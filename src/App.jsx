import { useState, useEffect } from "react";
import FormComponent from "./components/FormComponent";
import TableView from "./components/TableView";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [tableData, setTableData] = useState([]);
  const [updateId, setUpdateId] = useState(0);

  //API to Create the records:
  const handleSubmit = async (formValue) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValue),
        }
      );
      if (response.ok) {
        setTableData([...tableData, formValue]);
        setFormData({ title: "", body: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //API to read the records
  const getPosts = async () => {
    try {
      const apiResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const results = await apiResponse.json();
      setTableData(results);
    } catch (error) {}
  };

  //API To Delete the records
  const getDeletePosts = async (postsId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postsId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        alert("Are you sure you want to delete the record ??");
        setTableData(
          tableData.filter((item) => {
            return item.id !== postsId;
          })
        );
      } else {
        console.log("Failed to delete");
      }
    } catch (error) {}
  };

  //APi to Edit the records
  const getEditPosts = async (editId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${editId}`
      );
      const results = await response.json();
      setFormData(results);
    } catch (error) {}
  };

  const getUpdatePosts = async (updateId) => {
    // try {
    //   const response = await fetch(
    //     `https://jsonplaceholder.typicode.com/posts/1`,
    //     {
    //       method: "PUT",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   );
    //   const results = await response.json();
    //   console.log(results);
    // } catch (error) {}
  };
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container center">
      <FormComponent
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        getUpdatePosts={getUpdatePosts}
      />
      <TableView
        tableData={tableData}
        getDeletePosts={getDeletePosts}
        getEditPosts={getEditPosts}
        setUpdateId={setUpdateId}
      />
    </div>
  );
}

export default App;
