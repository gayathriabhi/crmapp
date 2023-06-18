import React, { useState } from 'react'

function FAQContentForm() {
    const [title, setTitle] = useState('');
    const [answer, setAnswer] = useState('');

    const handleChange = (element, event) => {
        if(element === 'title')
            setTitle(event.target.value);
        if(element === 'answer')
            setAnswer(event.target.value);
    }

    const handleSubmit = async (event) => {
       event.preventDefault();
       const response = await fetch('http://localhost:3000/faqcontent', {
                 method: 'POST',
                 headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                 },
                 body: JSON.stringify({
                    questionTitle: title,
                    questionAnswer: answer
                  })
       });
       if(response.status === 201){
            alert('The record added to the database');
            setTitle('');
            setAnswer('');
       } else {
            console.log('Error', response);
            alert('Error occured');
       }
    }

    return (
    <>
        <h2> FAQ Content Form </h2>
        <form onSubmit={handleSubmit}>
            <label style={{margin: '20px'}}>Question Title</label>
            <input style={{width: '275px', height: '75px'}} 
                type="text" 
                value={title}
                onChange={(event) => handleChange('title', event)}>
            </input> <br/><br/>
            <label style={{margin: '20px'}}>Question Answer</label>
            <input style={{width: '300px', height: '75px'}} 
                    type="text"
                    value={answer}
                    onChange={(event) => handleChange('answer', event)}></input> <br/><br/>
            <h3 id="response-text"></h3>
            <input type="submit"></input>
        </form>
    </>
    );
}

export default FAQContentForm;
