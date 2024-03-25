import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';

export default function Details() {
  const [values, setValues] = useState({
    hospitalName: '',
    hospitalNumber: '',
    hospitalEmail: '',
    hospitalPhoneNumber: '',
    hospitalPhoneNumber2: '',
    hospitalPhoneNumber3: '',
    hospitalTelePhone: '',
    physicalAddress: '',
    town: '',
    certificate: null,
    mainBranchName: '',
  });

  const [mainBranch, setMainBranch] = useState('Yes');
  const [hasBranches, setHasBranches] = useState('No');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setValues({
      ...values,
      certificate: file
    });
  };

  const handleBranchesChange = (event) => {
    setHasBranches(event.target.value);
    if (event.target.value === 'no') {
      setMainBranch('Yes');
    }
  };

  const autoRefresh = (event) => {
    handleBranchesChange(event);
    if (event.target.value === 'no') {
      setMainBranch('Yes');
    }
  };

  const handleMianBranchChange = (event) => {
    setMainBranch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const branchValues = {
      mainBranch: mainBranch === 'Yes',
      hasBranches: hasBranches === 'Yes',
    };
    const formData = new FormData();
    Object.entries({ ...values, ...branchValues }).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Get the user's email from your application's session or wherever it's stored
    const userEmail = 'm@gmail.com'; // Replace this with the actual emai

    // Append the user's email to the form data
    formData.append('email', userEmail);

    try {
      const response = await axios.post('http://127.0.0.1:8000/users/hospital_details/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data); // handle response
    } catch (error) {
      console.error('Submission failed:', error);
    }
  };

  return (
    <div className="detailsHome">
      <AdminNavbar />
      <div style={{display:'grid',justifyContent:'center'}}>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="hospitalDetails">
          <input type="text" id='input' placeholder="Hospital's Name" name="hospitalName" value={values.hospitalName} onChange={handleInputChange} required />
          <input type="text" id='input' placeholder="Hospital's Registration Id" name="hospitalNumber" value={values.hospitalNumber} onChange={handleInputChange} required />
          <input type="text" id='input' placeholder="Hospital's Email" name="hospitalEmail" value={values.hospitalEmail} onChange={handleInputChange} required />
          <input type="text" id='input' placeholder="Hospital's Phone number" name="hospitalPhoneNumber" value={values.hospitalPhoneNumber} onChange={handleInputChange} required />
          <input type="text" id='input' placeholder="Hospital's Phone number2" name="hospitalPhoneNumber2" value={values.hospitalPhoneNumber2} onChange={handleInputChange} />
          <input type="text" id='input' placeholder="Hospital's Phone number3" name="hospitalPhoneNumber3" value={values.hospitalPhoneNumber3} onChange={handleInputChange} />
          <input type="text" id='input' placeholder="Telephone" name="hospitalTelePhone" value={values.hospitalTelePhone} onChange={handleInputChange} />
          <input type="text" id='input' placeholder="Physical Address" name="physicalAddress" value={values.physicalAddress} onChange={handleInputChange} required />
          <input type="text" id='input' placeholder="City/Town/Shopping Center" name="town" value={values.town} onChange={handleInputChange} required />
          <label>Hospitals License</label>
          <input type="file" id='input' name="certificate" onChange={handleFileChange} />

          <div className="branches-section">
            <label>Branches</label>
            <select name="branches" id='input' value={hasBranches} onChange={autoRefresh}>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>

            {hasBranches === 'Yes' && (
              <div className='branches-section'>
                <label>Are You the Main Branch</label>
                <select name="branches" id='input' value={mainBranch} onChange={handleMianBranchChange}>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            )}
           {mainBranch === 'No' &&  (
  <div className='branches-section'>
    <label>Enter the Main Branch</label>
    <input
      type="text"
      id="input"
      name='mainBranchName'
      value={values.mainBranchName}
      onChange={handleInputChange}
    />
  </div>  
)}
          </div>
        </div>
        <div className='detailSubmit'>
          <button id="button" type="submit">Submit</button>
        </div>
      </form>
      </div>
    </div>
  );
}
