import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { EmployeeContext } from "../employees/EmployeeProvider"
import "./Employees.css"
import { useHistory } from 'react-router-dom';


export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)


    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0,
    });

    const history = useHistory();

    useEffect(() => {
        getLocations()
    }, [])

    const handleControlledInputChange = (event) => {
        const newEmployee = { ...employee }
        newEmployee[event.target.id] = event.target.value
        setEmployee(newEmployee)
    }

    //This function above is going to take the information in the form give it an ID and then run it thorough our setter above to add it into the JSON. Pretty cool!

    const handleClickSaveEmployee = (event) => {
        event.preventDefault() //New item, this prevents automatic submission of form. Good to know.

        const locationId = parseInt(employee.locationId)
        //Here we are simply making a variable and using parseInt to take the integer out in order to use it later.

        if (locationId === 0) {
            window.alert("Fill out your form fool.")
        } else {
            const newEmployee = {
                name: employee.name,
                locationId: locationId,
            }
            addEmployee(newEmployee)
                .then(() => history.push("/employees"))
        }
    }
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Employee name" value={employee.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select name="locationId" id="locationId" className="form-control" value={employee.locationId} onChange={handleControlledInputChange}>
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
                Save Employee
            </button>
        </form>
    )

}
