import React, { useState } from 'react'
import Select from 'react-select'
import { useNavigate } from "react-router-dom";
import history from './history';

function ContentSelectForm() {
    const navigate = useNavigate();
  const options = [
    { value: 'faq_content', label: 'FAQ content' },
    { value: 'help_article', label: 'Help Article' },
  ]

  const [contentValue, SetContentValue] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    if(contentValue == 'faq_content'){
        history.push('/');
        navigate('/faqcontent', { replace: true });
    } 
    if(contentValue == 'help_article'){
        history.push('/');
        navigate('/helparticle', { replace: true });
    } 
  }

  return (
      <>
        <form onSubmit={handleSubmit}>
            <h1>Select one of the forms for the content</h1>
            <div className="mt-5 m-auto w-50">
                <Select onChange={(event) => SetContentValue(event.value)} options={options}></Select> 
            </div>
            <input style={{margin: '20px'}} type="submit" value="Submit" />
        </form>
      </>
  );
}

export default ContentSelectForm;
