import './StuRecord.css';
import React, { useState } from 'react';

function StuRecord() {

    const [stuName, setStuName] = useState('');
    const [stuDOB, setStuDOB] = useState('');
    const [stuAge, setStuAge] = useState('');
    const [stuList, setStuList] = useState([]);

    const stuNameHandler = (e) => {
        setStuName(e.target.value);
    }

    const stuDOBHandler = (e) => {
        setStuDOB(e.target.value);
    }

    const addStuHandler = () => {
        let stu = {
            name: stuName,
            dob: stuDOB,
            age: stuAge
        };

        // let stuListCopy = stuList;
        // stuListCopy.push(stu);
        // setStuList(stuListCopy);
        setStuList([...stuList, stu]);

        setStuName('');
        setStuDOB('');
    }

    const deleteStuHandler = (index) => {
        let stuListCopy = stuList;
        stuListCopy.splice(index, 1);
        setStuList([...stuListCopy]);
    }


    return (
        <>
            <div className="StuRecord">
                <div className='stu-form'>
                    {/* add field with name and DOB */}
                    <div className='stu-form-field'>
                        <label>Name</label>
                        <input 
                            type='text' 
                            placeholder='Full Name'
                            value={stuName}
                            onChange={stuNameHandler}   />
                    </div>
                    <div className='stu-form-field'>
                        <label>Date of Birth</label>
                        <input 
                            type='date' 
                            placeholder='DD-MM-YYYY' 
                            value={stuDOB}
                            onChange={stuDOBHandler}/>
                    </div>
                    <div className='stu-form-field'>
                        <button type='button' 
                        onClick={addStuHandler}>+ Add</button>
                    </div>
                </div>
            </div>

            <div className="StuTable">
                <table>
                    <thead>
                        <tr>
                            <th>SNo</th>
                            <th>Name</th>
                            <th>Date of Birth</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stuList.map((stu, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{stu.name}</td>
                                    <td>{stu.dob}</td>
                                    <td>{stu.age}</td>
                                    <td>
                                        <button type='button'>Edit</button>
                                        <button type='button'
                                            onClick={() => deleteStuHandler(index)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                        
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default StuRecord;