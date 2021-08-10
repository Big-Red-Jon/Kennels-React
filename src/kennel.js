import React from "react"
import "./kennel.css"
import { NavBar } from "./components/nav/NavBar"
import { ApplicationViews } from "./components/ApplicationViews"



export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <article>
        <NavBar />
        <ApplicationViews />
        </article>
    </>
)