import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import axios from 'axios';
import './cFtable.css';

// Define your columns to match the data structure
const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "nom", headerName: "Nom", width: 150 },
    { field: "prenom", headerName: "Prénom", width: 150 },
    { field: "password", headerName: "Password", width: 200 },
    { field: "role", headerName: "Role", width: 150 },
];

const CFtable = () => {
    const [data, setData] = useState([]);  // Initialize with an empty array

    // Fetch data from backend
    useEffect(() => {
        axios.get('http://localhost:8082/adposts/')
            .then(res => {
                // Set the fetched data to the state
                setData(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    // Delete function
    const handleDelete = (nom) => {
        setData(data.filter((item) => item.nom !== nom));  // Filter out the deleted item by "nom"
    };

    // Define action column
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <div className="viewButton">
                            <Link to="/adposts/Cmodifier" className="link">
                                Modifier
                            </Link>
                        </div>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.nom)}  // Use params.row.nom for the delete action
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className='datatable'>
            <div className="datatableTitle">
                Les utilisateurs
                <Link to="/adposts/Cnew" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                rows={data}  // Dynamic data from the API
                columns={userColumns.concat(actionColumn)}  // Columns + action column
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}  // Pagination options
                checkboxSelection
            />
        </div>
    );
};

export default CFtable;
