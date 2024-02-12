import { useContext } from "react";
import AppContext from "../../AppContext";

const Details = () => {

    const {emp} = useContext(AppContext);

    return (
        <div>
            <h1>Employee Details</h1>
            
            <table cellPadding="5">
                <tbody>
                    <tr>
                        <th>ID</th>
                        <td>: {emp.id}</td>
                    </tr>
                    <tr>
                        <th>Name</th>
                        <td>: {emp.name}</td>
                    </tr>
                    <tr>
                        <th>Designation</th>
                        <td>: {emp.designation}</td>
                    </tr>
                    <tr>
                        <th>Department</th>
                        <td>: {emp.department}</td>
                    </tr>
                    <tr>
                        <th>Salary</th>
                        <td>: {emp.salary}</td>
                    </tr>
                    <tr>
                        <th>Date of Joining</th>
                        <td>: {emp.dateOfJoining}</td>
                    </tr>
                    <tr>
                        <th>Status</th>
                        <td>: {emp.status}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Details;