import SidePanel from './SidePanelCST.jsx';
import Checkbox from '../child-comp/Checkbox.jsx';
import Radio from '../child-comp/Radio.jsx';
import { Link } from 'react-router-dom';
import "../Form.css"
import React, { useEffect, useState } from 'react'
import Buttons from '../child-comp/Buttons.jsx';
import InputField from '../child-comp/InputField.jsx';
import { turnOffbutton, handleChange } from '../helpers.js';
import setLocalStorage from '../setLocalStorage.js';
import Heading from '../../Heading/Heading';
import Table from '../child-comp/Table.jsx'
import DropDown from '../child-comp/DropDown.jsx';
import Table1 from '../child-comp/Table1.jsx';
import CSTButton from '../child-comp/CSTButton.jsx';

function FormC23() {
    var formc23 = setLocalStorage("formc23", { C20: "", C21: "" })
    const [formC23, setFormC23] = useState(JSON.parse(formc23))
    turnOffbutton();

    const [isSidebarVisible, setSidebarVisible] = useState(
        window.innerWidth > 1024
      );
    
      const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
      };
      const handleResize = () => {
        if (window.innerWidth >= 1025) {
          setSidebarVisible(true);
        }
      };
    
      useEffect(() => {
        window.addEventListener("resize", handleResize);
        // AOS.init({ duration: 2000 });
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    useEffect(() => {
        if ((formC23.C20 !== "Partially recovered & discharged") && (formC23.C20 !== "Fully Recovered & discharged") && (formC23.C20 !== "Recovered with disability & discharged") && (formC23.C20 !== "Self-Discharged") && (formC23.C20 !== "Admitted in Hospital") && (formC23.C20 !== "Death")) {
            setFormC23({ ...formC23, C21: "" })
        }
    }, [formC23.C20])

    return (
        <div>
            <div className="header">
                <div className="burger-menu" onClick={toggleSidebar}>
                &#9776;
                </div>
                <Heading h2="Community Survey Tool"></Heading>
            </div>
            <section id='site-info' className="form-main">
                {isSidebarVisible && (
                <>
                    <SidePanel id={"23"} />
                    <div className="grayedover" onClick={toggleSidebar}></div>
                </>
                )}
                <div className='siteInfo'>
                    <div className="formhdr">
                        <div>
                            <h2>A Socio-demographic Characteristics</h2>
                        </div>
                        <div>
                            <h3>
                                Referral Facility
                            </h3>
                        </div>
                    </div>

                    <div className="formcontent cont_extra">

                        <Radio onClick={handleChange(setFormC23)} h3="C.20  What was the final outcome of visiting the referral facility?" CheckbobItems={["Referred to higher facility", "Went against medical advice to different facility", "Partially recovered & discharged", "Fully Recovered & discharged", "Recovered with disability & discharged", "Self-Discharged", "Admitted in Hospital", "Death"]} name="C20" byDefault={formC23.C20} />

                        {
                            ((formC23.C20 === "Partially recovered & discharged") || (formC23.C20 === "Fully Recovered & discharged") || (formC23.C20 === "Recovered with disability & discharged") || (formC23.C20 === "Self-Discharged") || (formC23.C20 === "Admitted in Hospital") || (formC23.C20 === "Death")) &&
                            <>

                                <InputField onChange={handleChange(setFormC23)} h3="C.21  What was the final diagnosis on consultation with the doctor or mentioned in the final discharge summary? (Specify)" placeholder="Type here" name="C21" value={formC23.C21} />
                            </>
                        }


                        {/* capture using tab camera */}

                        <CSTButton formName="formc23" formData={formC23} prev="/referral-facility3"
                            //  next={(formC23.C21 === "") ? "/barriers-and-facilitators1" : "/barriers-and-facilitators2"} 
                            next={
                                ((formC23.C20 === "Partially recovered & discharged") || (formC23.C20 === "Fully Recovered & discharged") || (formC23.C20 === "Recovered with disability & discharged") || (formC23.C20 === "Self-Discharged") || (formC23.C20 === "Admitted in Hospital") || (formC23.C20 === "Death"))
                                    ?
                                    "/barriers-and-facilitators2" : "/referral-facility1"
                            }
                            prevText="Previous" nextText="Save & Next" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FormC23