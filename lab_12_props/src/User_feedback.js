import React, { useState } from "react";
import './App.css';
import Modalwindow from './Modalwindow';


const UserFeedback = (props) => {
 const [isModalOpen, setIsModalOpen] = useState(false);


 const openModalWindow = () => setIsModalOpen(true);
 const closeModalWindow = () => setIsModalOpen(false);


 return (
   <>
     <div className="feedbackcontainer">
       <section className="feedbackcard">
         <div className="content">{props.username}</div>
         <div className="description">{props.children}</div>
         <div className="cardfooter">
           <p className="addicon" onClick={() =>openModalWindow()}>
             <span>&#10011;</span> Add Feedback
           </p>
         </div>
       </section>
     </div>


     {/* Modal window */}
     {isModalOpen && <Modalwindow onClose={closeModalWindow} />}
   </>
 );
};


export default UserFeedback;
