
import { useState } from "react";

function serchfilter() {
    const [query,setQuery] = useState("");
    const name = ["apple","banana","oranges","papays"];
    const namefilter  = name.filter((name)=>
        name.toLowerCase().includes(query.toLowerCase())
    )
  return (
    <div>
      <input 
      type="text"
      value={query}
      placeholder="Serch names"
      onChange={(e) =>setQuery(e.target.value)}
      />
      <div>
        {namefilter.length > 0 ? (
          <ul>
            {namefilter.map((name,index)=>(
                <li key={index}>{name}</li>
            ))}
          </ul>
        ):(
         <p>name is not found  </p>
        )}
      </div>
    </div>
  )
}

export default serchfilter
