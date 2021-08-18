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
import { EmployeeForm } from "./employees/EmployeeForm"
import { LocationForm } from "./locations/LocationForm"
import { KennelProvider } from "./kennels/KennelProvider"
import { AnimalDetail } from "./animal/AnimalDetail"



export const ApplicationViews = () => {
    return (
        <>
            <LocationProvider>
                <EmployeeProvider>
                    <AnimalProvider>
                        <CustomerProvider>
                            <Route exact path="/">
                                <KennelProvider />
                            </Route>

                            <Route exact path="/locations">
                                <LocationList />
                            </Route>

                            <Route path="/locations/create">
                                <LocationForm />
                            </Route>

                            <Route exact path="/employees">
                                <EmployeeList />
                            </Route>

                            <Route path="/employees/create">
                                <EmployeeForm />
                            </Route>

                            <Route path="/customers">
                                <CustomerList />
                            </Route>

                            <Route exact path="/animals">
                                <AnimalList />
                            </Route>

                            <Route path="/animals/edit/:animalId(\d+)">
                                <AnimalForm />
                            </Route>

                            <Route exact path="/animals/detail/:animalId(\d+)">
                                <AnimalDetail />
                            </Route>

                            <Route path="/animals/create">
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