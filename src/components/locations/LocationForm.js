import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../locations/LocationProvider"
import "./Locations.css"
import { useHistory } from 'react-router-dom';

export const LocationForm = () => {
    const { addLocation } = useContext(LocationContext)


    const [location, setLocation] = useState({
        name: "",
        address: "",
    });

    //This is saying that the starting state is a blank string and if that changes we wil render after saving.

    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newLocation = { ...location }
        newLocation[event.target.id] = event.target.value
        setLocation(newLocation)
    }


    const handleClickSaveLocation = (event) => {
        event.preventDefault()

        if (!location.name || !location.address) {
            window.alert("Fill out your form fool.")
        } else {
            const newLocation = {
                name: location.name,
                address: location.address,
            }
            addLocation(newLocation)
                .then(() => history.push("/locations/create"))
        }
    }
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Branch Name:</label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Branch Name" value={location.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Branch Address:</label>
                    <input type="text" id="address" required autoFocus className="form-control" placeholder="Branch Address" value={location.address} onChange={handleControlledInputChange} />
                </div>
            </fieldset>

            <button className="btn btn-primary" onClick={handleClickSaveLocation}>
                Save Employee
            </button>
        </form>
    )
}