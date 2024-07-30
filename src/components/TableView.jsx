import React from "react";
import "./form.css";

const TableView = ({
  tableData,
  getDeletePosts,
  getEditPosts,
  setUpdateId,
}) => {
  const onDelete = (deletedId) => {
    getDeletePosts(deletedId);
  };

  const onEdit = (editId) => {
    getEditPosts(editId);
  };
  return (
    <div className="col-12 form-container">
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tableData && tableData.length > 0 ? (
            tableData.map((tableItems, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{tableItems?.title}</td>
                    <td>{tableItems?.body}</td>
                    <td>
                      {" "}
                      <button
                        type="button"
                        className="btn btn-primary mx-2"
                        onClick={(e) => {
                          onEdit(tableItems?.id), setUpdateId(tableItems?.id);
                        }}
                      >
                        Edit
                      </button>{" "}
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={(e) => onDelete(tableItems?.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })
          ) : (
            <>No Data Found</>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
