'use client'

import React, { useState, useEffect } from 'react';

function Quotes() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    ApiCall();
  }, []); 

  const ApiCall = async () => {
    const url = 'https://api.api-ninjas.com/v1/quotes?category=education';
    const headers = new Headers({
      'X-Api-Key': 'ROcZSdwqJlnUTZZfvfmOIQ==dSJjiobAHb51C0OB'
    });
 
    try { 
      let response = await fetch(url, {
        method: 'GET',
        headers: headers
      });

      if (response.ok) {
        let data = await response.json();
        if (data.length > 0) {
          setQuote(data[0]);
        } else {
          console.error("No quotes found.");
        }
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <h1>Quote</h1>
      <h2>{quote.quote}</h2>
      <h3>by ~~ {quote.author}  </h3> 
      <button onClick={ApiCall} >New One</button>
    </div>
    
  );
}

export default Quotes;
