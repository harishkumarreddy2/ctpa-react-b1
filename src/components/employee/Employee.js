import './Employee.css';
import { useState, useEffect, useContext } from 'react';
import moment from 'moment';

import empData from './data';
import AppContext from '../../AppContext';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAdmin, setIsAdmin } from '../../redux/appReducer';


const Employee = () => {
    const [dob, setDob] = useState('');
    const [ststusFilter, setStatusFilter] = useState('');
    const [data, setData] = useState([]);
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const isAdmin$ = useSelector(selectIsAdmin);
    const dispactch = useDispatch();

    // use context api to set data into AppContext
    // const { setEmp } = useContext(AppContext);

    useEffect(() => {
        fetchEmployees();
    }, []);

    useEffect(() => {
        if (ststusFilter === '') {
            setData(empData);
        } else {
            setData(() => {
                return empData.filter((emp) => {
                    return emp.status === ststusFilter;
                });
            });
        }
    }, [ststusFilter])

    const fetchEmployees = () => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const getEmployeeDeatils = (id) => {
        setIsLoading(true);
        const options ={
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authentication': 'barer kfLASKDFLASNDAJND,AMSDNKJASNDADkhbkjbkjbnJKBHKjbkjBHKJBJ'
            }
        }
        // fetch(`https://jsonplaceholder.typicode.com/users/${id}`, options)
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((data) => {
        //         setUser(data);
        //         setIsLoading(false);
        //     })

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`, options)
            .then((res) => {
                setUser(res.data);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    };

    const statusFilterHandler = (e) => {
        setStatusFilter(e.target.value);
    }

    const getEmp = (index) => {
        // set into AppContext
        // setEmp(empData[index]);
    }

    const changeAdmin = (e) => {
        dispactch(setIsAdmin(e.target.checked));
    }

    return (
        <div>
             is Admin <input type='checkbox' onChange={changeAdmin} />
            <h1>Is Admin {isAdmin$? "Yes": "No"}</h1>
            <h1>Employees</h1>
            <div className='emp-form'>
                <div>
                    Status:
                    <label><input type='radio' name='status' value='Active' onChange={statusFilterHandler} /> Active</label>
                    <label><input type='radio' name='status' value='Inactive' onChange={statusFilterHandler} /> Inactive</label>
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row'
            }}>
            <table border="1" cellPadding="5">
                <thead>
                    <tr>
                        <th>##</th>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>Date of Joining</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((emp, i) => {
                            return (
                                <tr key={emp.id}>
                                    <td>{i + 1}</td>
                                    <td>{emp.id}</td>
                                    <td>
                                        <a href='#' onClick={(e) => {
                                            e.preventDefault();
                                            getEmployeeDeatils(emp.id);
                                        }}>{emp.name}</a>
                                    </td>
                                    <td>{emp.designation}</td>
                                    <td>{emp.department}</td>
                                    <td>{emp.salary}</td>
                                    <td>{emp.dateOfJoining}</td>
                                    <td>{emp.status}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div className='emp-details'>
                <h1>Employee Details</h1>
                {isLoading? 
                <img src='https://www.icegif.com/wp-content/uploads/2023/07/icegif-1259.gif' style={{
                    width: '250px',
                    height: '200px' 
                }} />
                :<table border="1" cellPadding="5">
                    <tr>
                        <th>Id</th>
                        <td>{user.id}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <th>Phone</th>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>
                            <p>
                                {user.address?.street}<br />
                                {user.address?.suite}<br />
                                {user.address?.city}<br />
                                {user.address?.zipcode}<br />
                            </p>
                        </td>
                    </tr>
                    <tr>
                        <th>Employment Details</th>
                        <td>
                            <p>
                                {user.company?.name}<br />
                                {user.company?.catchPhrase}<br />
                                {user.company?.bs}<br />
                            </p>
                        </td>
                    </tr>
                </table>
                }
            </div>
            </div>
        </div>
    );
};

export default Employee;