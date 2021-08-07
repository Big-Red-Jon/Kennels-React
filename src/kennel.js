import React from "react"
import { Animal } from "./components/animal/Animal"
import { Location } from "./components/locations/Locations"
import { Employee } from "./components/employees/Employees"
import { Customer } from "./components/customers/Customers"
import "./kennel.css"
import { AnimalProvider } from "./components/animal/AnimalProvider"
import { AnimalList } from "./components/animal/AnimalList"
import { EmployeeProvider } from "./components/employees/EmployeeProvider"
import { EmployeeList } from "./components/employees/EmployeeList"
import { LocationProvider } from "./components/locations/LocationProvider"
import { LocationList } from "./components/locations/LocationList"
import { CustomerProvider } from "./components/customers/CustomerProvider"
import { CustomerList } from "./components/customers/CustomerList"

export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalProvider>
                <AnimalList />
            </AnimalProvider>
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <EmployeeProvider>
                <EmployeeList />
            </EmployeeProvider>
        </article>
        <h2>Locations</h2>
        <article className="locations">
            <LocationProvider>
                <LocationList />
            </LocationProvider>
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <CustomerProvider>
                <CustomerList />
            </CustomerProvider>

        </article>
    </>
)