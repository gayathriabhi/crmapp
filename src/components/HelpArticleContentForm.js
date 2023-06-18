import React, { useState } from 'react'
import history from './history';

function HelpArticleContentForm() {
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [imageURL, setImageURL] = useState('');
    const [paragraph, setParagraph] = useState('');

    const handleChange = (element, event) => {
        if(element === 'title')
            setTitle(event.target.value);
        if(element === 'subtitle')
            setSubTitle(event.target.value);
        if(element === 'iamgeurl')
            setImageURL(event.target.value);
        if(element === 'paragraph')
            setParagraph(event.target.value);
    }

    const handleSubmit = async (event) => {
       event.preventDefault();
       const response = await fetch('http://localhost:3000/help-article', {
                 method: 'POST',
                 headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                 },
                 body: JSON.stringify({
                    title,
                    subTitle,
                    imageURL,
                    paragraph
                  })
       });
       if(response.status === 201) {
            alert('The record added to the database');
            setTitle(''); setSubTitle('');
            setImageURL(''); setParagraph('');
       } else {
            console.log('Error', response);
            alert('Error occured');
       }
    }

    return (
    <>
        <h2> Help Article Content Form </h2>
        <form onSubmit={handleSubmit}>
            <label style={{margin: '20px'}}>Title</label>
            <input style={{width: '275px', height: '75px'}} 
                type="text" 
                value={title}
                onChange={(event) => handleChange('title', event)}>
            </input> <br/><br/>
            <label style={{margin: '20px'}}>subTitle</label>
            <input style={{width: '300px', height: '75px'}} 
                    type="text"
                    value={subTitle}
                    onChange={(event) => handleChange('subtitle', event)}></input> <br/><br/>
            <label style={{margin: '20px'}}>imageURL</label>
            <input style={{width: '300px', height: '75px'}} 
                    type="text"
                    value={imageURL}
                    onChange={(event) => handleChange('iamgeurl', event)}></input> <br/><br/>
            <label style={{margin: '20px'}}>paragraph</label>
            <input style={{width: '300px', height: '75px'}} 
                    type="text"
                    value={paragraph}
                    onChange={(event) => handleChange('paragraph', event)}></input> <br/><br/>
            <h3 id="response-text"></h3>
            <input type="submit"></input>
        </form>
    </>
    );
}

export default HelpArticleContentForm;
