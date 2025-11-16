import React from "react";
import "./App.css";


const Modalwindow = function() {


 // Function to close the modal
 const closemodalwindow = () => {
   const modal = document.querySelector(".modalwindow");
   if (modal) modal.style.display = "none";
 }


 return (
   <>
     {/* modal window */}
     <section className="modalwindow" style={{ display: "flex" }}>
       <div className="modalcontent">
         <header className="modalheader">
           <p>Add Feedback to <b className="modulausername"></b></p>
           <p className="closemodal" onClick={closemodalwindow}>&#x58;</p>
         </header>


         <main className="modalbody">
           <input
             className="commentarea"
             type="text"
             placeholder="Type your comments..."
             maxLength={200}
           />
           <p className="description_comment">Max 200 characters</p>
           <button className="btnpostfeedback">Post Feedback</button>
         </main>
       </div>
     </section>
   </>
 );
};


export default Modalwindow;
