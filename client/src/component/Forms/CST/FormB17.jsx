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


function FormB17() {
  var formb16 = setLocalStorage("formb16", { B0: "", B1: "", B2: "", B3: "", B4: [],  B5_dt: "", B6: "", B7: "", B8: "", B9: "", B10: "", B11_if: "", B12: "", B13: "", B14: "", B15: "", B16: "", B17_1: "",B17_2:"",B18:"", B19: "", B20: "", B21: "", B22_1: "",B22_2:"", B23_1: "",B23_2:"", B24: "", B25: "", B26: [], B27: "", B28: "", B29: "", B30: "", B31: "", B32: "", B33: "", B34: "" })
  const [formB16, setFormB16] = useState(JSON.parse(formb16))
  turnOffbutton();
  return (
    <div>
      <Heading h2="Community Survey Tool"></Heading>
      <section id='site-info'>
        <SidePanel id={"11"} />
        <div className='siteInfo'>
          <div className="formhdr">
            <div>
              <h2>A Socio-demographic Characteristics</h2>
            </div>
            <div>
              <h3>
                Initial Healthcare Seeking Pathway
              </h3>
            </div>
          </div>

          <div className="formcontent cont_extra">
            <h3>Now, I will be asking you about the emergency conditions and your approach for seeking healthcare during the entire event of healthcare emergency.</h3>
            <InputField onChange={handleChange(setFormB16)} h3="B.5	When did this incident take place?" placeholder="Type here" name="B5_dt" type={"datetime-local"} value={formB16.B5_dt}/>
            <Radio
              h3="B.6 How sure/confident are you about the time of Incident?"
              CheckbobItems={[
                "Not confident at all",
                "Slightly confident",
                "Somewhat confident",
                "Fairly confident",
                "Completely Confident"
              ]}
              name="B6"
              onClick={handleChange(setFormB16)}
              byDefault={formB16.B6}
            />
            <Radio
              h3="B.7 Where did the medical emergency situation arise?"
              CheckbobItems={[
                "At home",
                "At work",
                "While travelling",
                "Others (specify)"
              ]}
              otherArray={[0, 0, 0, 1]}
              name="B7"
              onClick={handleChange(setFormB16)}
              byDefault={formB16.B7}
            />
            <InputField onChange={handleChange(setFormB16)} h3="B.8	Which was the first symptom you/ or the person expressed or complaint of during emergency condition?" placeholder="Type here" name="B8" value={formB16.B8} />
            <InputField onChange={handleChange(setFormB16)} h3="B.9	When was the first symptom of a medical emergency recognised? [Time of onset of symptom]" placeholder="Type here" name="B9" value={formB16.B9} />
            <Radio h3="B.10	At the start of symptoms was any medication taken/ given at home to alleviate symptoms?" CheckbobItems={["Yes", "No"]} name="B10" onClick={handleChange(setFormB16)} byDefault={formB16.B10} />

            <InputField onChange={handleChange(setFormB16)} h3="B.11	If yes, what medication was given?" placeholder="Type here" name="B11_if" value={formB16.B11_if} />
            <InputField onChange={handleChange(setFormB16)} h3="B.12	Which was the first symptom recognised as serious?" placeholder="Type here" name="B12" value={formB16.B12} />
            <Radio
              h3="B.13 Who first recognized the symptoms to be serious?"
              CheckbobItems={[
                "Family member",
                "Patient",
                "Others (Specify)"
              ]}
              otherArray={[0, 0, 1]}
              name="B13"
              onClick={handleChange(setFormB16)}
              byDefault={formB16.B13}
            />
            <Radio
              h3="B.14 What was your first course of action on identifying the emergency condition?"
              CheckbobItems={[
                "Visited allopathic health care facility",
                "Home visit by a doctor",
                "Consulted traditional healers/ spiritual healers",
                "Local remedy/ Self-medication at home",
                "AYUSH facility",
                "Home consultation",
                "Did not visit health facility"
              ]}
              name="B14"
              onClick={handleChange(setFormB16)}
              byDefault={formB16.B14}
            />
            <Buttons formName="formb16" formData={formB16} prev="/socio-demographicprofileofthepatientinthehhwithemergencycondition" next={formB16.B14 == "Visited allopathic health care facility"?"/initialhealthcareseekingpathway-3" : formB16.B14 == "Home visit by a doctor" ? "/initialhealthcareseekingpathway-2" : "/barriers-and-facilitators1"} prevText="Previous" nextText="Save & Next" />
          </div>
        </div>
      </section>
    </div>
  )

}

export default FormB17