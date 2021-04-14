import React from "react"
import './style.css';
import Navbar from '../Navbar';
import MediaQuery, { useMediaQuery } from 'react-responsive';


const Rules = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1024px)'
    });
    
    const isTabletOrPhone = useMediaQuery({
        query: '(max-device-width: 1023px)'
    });

     return (
         <div className="rules-main">
             {isDesktopOrLaptop && <>
             <div className="rules-nav">
             <Navbar></Navbar>
             </div>
             
             <div className="golf-ball-img-div">
             <div className="rules-title-div">
             TOURNAMENT RULES
             </div>
             
             
             <div className="rules-list-div">
               <ol>
                   <li>
                        The First Name In Each Foursome On The Pairing Sheets And Highlited On Each Scorecard Is The Team Captain. All Decisions Are Up To Him And They Are Final. It Is The Responsibility Of The Team Captain To See That All Score Cards Are Kept Correctly, Checked, Signed And Turned In To A Starter At The End Of The Round. No Score Higher Than A Double Bogey Is To Be Entered. Put The Number Of Points Made To The Upper Right Of The Score In The Same Box.
                   </li>
                   <li>
                        "Gimmes" Are Allowed And Count As One Stroke. They Are Measured With The Captains Putter. (Inside The Leather)No belly putters or long putters.
                   </li>
                   <li>
                        Ball Out Of Bounds Or A Lost Ball . Put Another Ball In Play At The Approximate Location The Ball Is Lost Or Out Of Bounds And Take A One Stroke (1) Penalty.
                   </li>
                   <li>
                        Provisional Balls Are Not Allowed. If You Have A Lost Ball Or Ball Out Of Bounds, Then Proceed Under Rule #3 Or Use A Mulligan. If You Use A Mulligan, You Must Play The Mulligan.
                   </li>
                   <li>
                        A Ball May Be Moved One Club Length( Not Nearer The Hole) Anywhere On The Course. Exceptions Are Hazards, Bunkers, Out Of Bounds Or On The Green.
                   </li>
                   <li>
                        Do Not Delay Play Looking For Lost Balls. If You Can't Find Your Ball After A Quick Look Then Proceed Under Rule #3.
                   </li>
                   <li>
                        When You Have Reached A Score Equal To Bogey On Any Hole, Before You Have Holed Out. You Must Pick Up Your Ball And Take A Double Bogey As Your Score.
                   </li>
                   <li>
                        Please Be Considerate Of All Other Golfers On The Course.
                   </li>
                   <li>
                         All Other Local Rules And Rules Of Golf Apply.
                   </li>
                   <li>
                         First Time Players Will Not Be Assigned Points The First Day. This Will Be Your Qualifying Round And Your Points Will Be What You Make. You Will Be Even The First Day And Your Points Will Be The Same On Thursday.
                   </li>
               </ol>
             </div>

             <div className="one-more-thing">
                 PLEASE MAKE EVERY EFFORT TO ADHERE TO RULE  # 7
             </div>
            
             </div>
             </>}

             {isTabletOrPhone && <>
             <div className="rules-nav">
             <Navbar></Navbar>
             </div>
             
             <div className="golf-ball-img-div">
             <div className="rules-title-div rules-title-res">
             TOURNAMENT RULES
             </div>
             

             <div className="rules-list-div">
               <ol>
                   <li>
                        The First Name In Each Foursome On The Pairing Sheets And Highlited On Each Scorecard Is The Team Captain. All Decisions Are Up To Him And They Are Final. It Is The Responsibility Of The Team Captain To See That All Score Cards Are Kept Correctly, Checked, Signed And Turned In To A Starter At The End Of The Round. No Score Higher Than A Double Bogey Is To Be Entered. Put The Number Of Points Made To The Upper Right Of The Score In The Same Box.
                   </li>
                   <li>
                        "Gimmes" Are Allowed And Count As One Stroke. They Are Measured With The Captains Putter. (Inside The Leather)No belly putters or long putters.
                   </li>
                   <li>
                        Ball Out Of Bounds Or A Lost Ball . Put Another Ball In Play At The Approximate Location The Ball Is Lost Or Out Of Bounds And Take A One Stroke (1) Penalty.
                   </li>
                   <li>
                        Provisional Balls Are Not Allowed. If You Have A Lost Ball Or Ball Out Of Bounds, Then Proceed Under Rule #3 Or Use A Mulligan. If You Use A Mulligan, You Must Play The Mulligan.
                   </li>
                   <li>
                        A Ball May Be Moved One Club Length( Not Nearer The Hole) Anywhere On The Course. Exceptions Are Hazards, Bunkers, Out Of Bounds Or On The Green.
                   </li>
                   <li>
                        Do Not Delay Play Looking For Lost Balls. If You Can't Find Your Ball After A Quick Look Then Proceed Under Rule #3.
                   </li>
                   <li>
                        When You Have Reached A Score Equal To Bogey On Any Hole, Before You Have Holed Out. You Must Pick Up Your Ball And Take A Double Bogey As Your Score.
                   </li>
                   <li>
                        Please Be Considerate Of All Other Golfers On The Course.
                   </li>
                   <li>
                         All Other Local Rules And Rules Of Golf Apply.
                   </li>
                   <li>
                         First Time Players Will Not Be Assigned Points The First Day. This Will Be Your Qualifying Round And Your Points Will Be What You Make. You Will Be Even The First Day And Your Points Will Be The Same On Thursday.
                   </li>
               </ol>
             </div>

             <div className="one-more-thing one-more-thing-res">
                 <div className="p-one-more-res">
                 PLEASE MAKE EVERY EFFORT TO ADHERE TO RULE # 7
                 </div>
             </div>
            
             </div>
             </>}



         </div>
        
     );

}

export default Rules;