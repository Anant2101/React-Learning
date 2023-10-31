import React, { useState } from "react";

const ToDo = () => {
  const [val, setVal] = useState([]);
  const [name, setName] = useState("");
  const [sid, setSid] = useState("");
  const [flag, setFlag] = useState(true);

  const inputHnadler = (event) => {
    setName(event.target.value);
  };

  const Update = () => {
    setVal([...val, name]);
    setName("");
  };

  const deleteUser = (id) => {
    let newArr = val.filter((items, index) => {
      return id != index;
    });
    setVal(newArr);
  };

  const EditUser = (uid) => {
    setSid(uid);
    setFlag(false);
    let newArr = val.filter((items, index) => {
      return uid === index;
    });
    setName(newArr[0]);
  };
  const UpdateArray = () => {
    val[sid] = name;
    setName("");
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-sm-6">
          <div className="alert alert-info">
            <h2>ToDo App</h2>
            <div className="form-group">
              <label>Enter Name</label>
              <input
                type="text"
                name="username"
                className="form-control"
                onChange={inputHnadler}
                value={name}
              />
            </div>
            <div className="form-group">
              {flag == true ? (
                <button onClick={Update} className="btn btn-dark">
                  Add User
                </button>
              ) : (
                <button onClick={UpdateArray} className="btn btn-dark ml-3">
                  Edit User
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="alert alert-info">
            <table className="table">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {val.map((items, index) => {
                  return (
                    <tr key={index}>
                      <td>{items}</td>
                      <td>
                        <button
                          onClick={() => deleteUser(index)}
                          className="btn btn-danger btn-sm"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => EditUser(index)}
                          className="btn btn-info btn-sm ml-2"
                        >
                          Update
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
