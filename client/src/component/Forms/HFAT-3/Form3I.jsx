import React, { useState, useEffect } from 'react'
import Checkbox from '../child-comp/Checkbox';
import SidePanel from './SidePanelHFAT3';
import Buttons from '../child-comp/Buttons';
import Radio from '../child-comp/Radio';
import InputField from '../child-comp/InputField';
import { handleChange, turnOffbutton } from '../helpers';
import I1 from '../Tables/I1.jsx'
import setLocalStorage from '../setLocalStorage';
import Heading from '../../Heading/Heading.jsx';
import { validateName, validateNumber, validateRequired, validateEmail, validateCheckBox } from '../fv.js';
import OverlayCard from '../OverlayCard.jsx';

function Form3I() {
  var form3i = setLocalStorage("form3i", { H3I1: [""], H3I2: [""], H3I4: "" });
  const [form3I, setForm3I] = useState(JSON.parse(form3i));
  const [errors, setErrors] = useState({});
  const [showOverlay, setShowOverlay] = useState(false);
  turnOffbutton();
  const columns = [
    { key: 'EmergencyCondition', label: 'Emergency Condition', type: 'text' },
    { key: 'SOP', label: 'Have Specific SOP/STW', type: 'radio', options: ['Yes', 'No'] },
    { key: 'FollowsSOP', label: 'Follows SOP', type: 'radio', options: ['Yes', 'No'] },
  ];

  // Define the initial rows
  const initialRows = [
    { EmergencyCondition: 'MI', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Stroke', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Trauma & Burns', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Poisoning', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Snake Bite', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Maternal Emergencies-PPH', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Maternal Emergencies- Eclampsia', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Neonatal Emergencies', SOP: '', FollowsSOP: '' },
    { EmergencyCondition: 'Acute Respiratory Illness', SOP: '', FollowsSOP: '' },
  ];

  const validateForm = () => {
    const newErrors = {};

    setErrors(newErrors);
    setShowOverlay(Object.keys(newErrors).some(key => newErrors[key] !== undefined));

  };

  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach(field => {
        console.log(field + "field");
        if(Array.isArray(form3I[field])){
          console.log(form3I[field]);
          newErrors[field] = validateCheckBox(form3I[field]);
        }else{
          newErrors[field] = validateRequired(form3I[field]);
        }
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [form3I]);

  const isFormValid = () => {
    const requiredFields = ['H3I1', 'H3I2', 'H3I4'];

    const missingFields = requiredFields.filter(field => {
      if (Array.isArray(form3I[field])) {
      return form3I[field].every(item => item === '' || (typeof item === 'string' && item.trim() === ''));
      } else {
      return !form3I[field] || (typeof form3I[field] === 'string' && form3I[field].trim() === '');
      }
    });

    return { isValid: missingFields.length === 0, missingFields };
  };

  useEffect(() => {
    const { isValid, missingFields } = isFormValid();
    setShowOverlay(!isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach(field => {
        console.log(field + "field");
        if(Array.isArray(form3I[field])){
          console.log(form3I[field]);
          newErrors[field] = validateCheckBox(form3I[field]);
        }else{
          newErrors[field] = validateRequired(form3I[field]);
        }
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [form3I]);

  const handleChangeWithValidation = (e) => {
    const { name, value } = e.target;
    let validatedValue = value;
    let error = '';

    switch (name) {
      case 'H3I4':
        error = validateRequired(value);
        if (!error) {
          validatedValue = value;
        } else {
          validatedValue = form2A[name];
          e.preventDefault(); // Prevent default behavior if the input was invalid
        }
        break;
      default:
        break;
    }

    setForm3I(prevValue => ({ ...prevValue, [name]: validatedValue }));

    // Perform additional required validation
    switch (name) {
      case 'H3I4':
        error = error || validateRequired(validatedValue);
        break;
      default:
        break;
    }

    setErrors(prevErrors => ({ ...prevErrors, [name]: error }));
  };


  return (
    <div>
      <Heading h2="Health Facility Assessment Tool 3: Primary Health Centre"></Heading>
      <section>
        <SidePanel id={"9"} />
        <div className="siteInfo">

          <div className="formhdr">
            <div>
              <h3>
                3I. Process/ Policies/SOPs
              </h3>
            </div>
          </div>

          <div className="formcontent">

            <Checkbox h3="3I.1 : What types of registers are maintained at the PHC?" CheckbobItems={["OPD/Treatment Register", "Inventory Register", "Referral Register", "Record for handing over and taking over of critical care equipment", "Medico-legal register", "Patient/Community feedback register", "At Risk Register for vulnerable patients", "Emergency Register", "Mapping of the other Facilities in the block/district"]} other={true} name="H3I1" setFunction={setForm3I} StateValue={form3I} array={form3I.H3I1} />

            <Checkbox h3="3I.2 : Which of the following SOPs for the management of common medical emergencies are followed at your PHC? (Select all that apply)" CheckbobItems={["Use of Standard guidelines for triage", "Post Exposure prophylaxis protocols.", "Protocols for communication among health care teams and with patients and relatives.", "Disaster Management Plan"]} name="H3I2" setFunction={setForm3I} StateValue={form3I} array={form3I.H3I2} other={true} />

            <h3>Whether having Emergency condition specific SOP/STW for emergency care?</h3>
            <I1 columns={columns} initialRows={initialRows} tableName="H3I3" />

            <Radio h3="3I.4 : Does the facility have defined and   established procedure for informing patients about their medical condition,   involving them in treatment planning and facilitating informed decision   making?" CheckbobItems={["Yes", "No"]} name="H3I4" onClick={handleChange(setForm3I)} byDefault={form3I.H3I4} />



            <div className="button-container">
              <Buttons formName={"form3i"} formData={form3I} prevText="Previous" nextText="Save & Next" prev="/leadershipandgovernance-3" next="/referrallinkages-3" />

              <OverlayCard
                isVisible={showOverlay}
                message="Please fill all required fields to proceed."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Form3I