import React from "react"
import { Route } from "react-router-dom"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { CustomerList } from "./customers/CustomerList"
import { AnimalForm } from "./animal/AnimalForm"


export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>
                <EmployeeProvider>
                    <AnimalProvider>
                        <CustomerProvider>
                            <Route path="/locations">
                                <LocationList />
                            </Route>

                            <Route path="/employees">
                                <EmployeeList />
                            </Route>

                            <Route path="/customers">
                                <CustomerList />
                            </Route>

                            <Route path="/animals">
                                <AnimalList />
                            </Route>

                            <Route exact path="/animals/create">
                                <AnimalForm />
                            </Route>
                        </CustomerProvider>
                    </AnimalProvider>
                </EmployeeProvider>
            </LocationProvider>
        </>
    )
}
//Create Animal Form and import it to make this work.
//Exact, denotes that is must go exactly to a route that has a similar name to another element.