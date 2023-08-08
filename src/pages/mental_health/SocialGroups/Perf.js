import React, { useEffect, useState }from'react';
import './Perf.css'

function Perf() {
  let[htmlFileString, setHtmlFileString] = useState(); 

  async function fetchHtml() {
    setHtmlFileString(await (await fetch(`homeLobby.html`)).text());
  }
  useEffect(() => {
    fetchHtml();
  }, []);

  return(
    <div className="Perf">
      <div dangerouslySetInnerHTML={{ __html: htmlFileString }}></div>      
    </div>
  );
}

export default Perf;