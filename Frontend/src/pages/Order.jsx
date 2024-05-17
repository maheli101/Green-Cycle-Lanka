import React from "react";
import './Order.css';
import Header from "../components/Header";
import Footer from "../components/Footer";



function Order() {
    return (
      <>
      <Header />
       <form className="box">
                
                <h1>Order Requests</h1>
                </form>

                <table>
                    
                        <tr>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Location</th>
                            <th className="empty"></th>
                            <th className="empty"></th>
                        </tr>
                    
                    
                        <tr>
                            <td>Plastic</td>
                            <td>10kg</td>
                            <td>17/A Wadduwa, Kaluthara</td>
                            <td><button className="A">Accept</button></td>
                            <td><button className="D">Delete</button></td>
                        </tr>
                        <tr>
                            <td>Paper</td>
                            <td>100kg</td>
                            <td>102 Kiribathgoda, Wawala</td>
                            <td><button className="A">Accept</button></td>
                            <td><button className="D">Delete</button></td>
                        </tr>
                        <tr>
                            <td>Plastic</td>
                            <td>5kg</td>
                            <td>17/A Wadduwa, Kaluthara</td>
                            <td><button className="A">Accept</button></td>
                            <td><button className="D">Delete</button></td>
                        </tr>
                    
                </table>

                <button className="back">Back</button>
                <Footer />
            </>
    );
  }
  
  export default Order;