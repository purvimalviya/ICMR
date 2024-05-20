import React, { useState } from 'react'
import SidePanel from '../child-comp/SidePanel.jsx'
import Table from '../child-comp/Table.jsx'
import { turnOffbutton } from '../helpers.js'
import { Link } from 'react-router-dom'
import Buttons from '../child-comp/Buttons.jsx'

function FormAC4() {
    turnOffbutton();
    return (
        <section id='relationship-with-head'>
            <SidePanel id={"4"} />
            <div className='siteInfo'>
                <div className='formhdr'>
                    <div>
                        <h2>A Socio-demographic Characteristics</h2>
                    </div>

                    <div>
                        <h3>
                            Relationship with Head of the Household
                        </h3>
                    </div>
                </div>
                <div className='formcontent'>
                    <Table />
                    <Buttons prev="/formsac-householdschedule" next="/formsac-trauma&burns" />
                </div>
            </div>
        </section>
    )
}

export default FormAC4