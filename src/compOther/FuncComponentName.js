//Basic starting template - Functional Component


import React from "react";

function FuncComponentName() {
    return (
        <>      {/* if missing: weird parsing error; expecting...  */}
            { } {/* entering JS expression - don't forget */ }

            {someArray.map((eaArrayItem, eaIdx) => {
                return (
                    <button type="submit" onClick={(e) => handleClick(e, eaArrayItem)}> {eaArrayItem} </button>
                );  //always keep `return ();` with map()
            })}
        </>
    );              //another `return ();`
}

export default FuncComponentName;