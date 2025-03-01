import React from "react";
import Event from "./Events"

const Calender = () => {
    return (
        <div className="Calender">
           <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <td></td>
                        <Event event = "Cleaning River" location = "Somewhere in Memohis"color = "lightgreen"/>
                        <Event event = "Cleaning River" color = "lightgreen"/>
                        <Event event = "Cleaning River" color = "lightgreen"/>
                        <Event event = "Cleaning River" color = "lightgreen"/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <Event event = "Cleaning River" color = "lightgreen"/>
                        <Event event = "Cleaning River" color = "lightgreen"/>
                        <Event event = "Cleaning River" color = "lightgreen"/>
                        <Event event = "Cleaning River" color = "lightgreen"/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 am</td>
                        <td></td>
                        <Event event = "Cleaning River" color = "lightgreen"/>
                        <Event event = "Cleaning River" color = "lightgreen"/>
                        <Event event = "Cleaning River" color = "lightgreen"/>
                        <Event event = "Cleaning River" color = "lightgreen"/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <Event event = "Cleaning River" color = "lightgreen"/>
                        <Event event = "Cleaning River" color = "lightgreen"/>
                        <Event event = "Cleaning River" color = "lightgreen"/>
                        <Event event = "Cleaning River" color = "lightgreen"/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <Event event = "Arrive at Memphis, Tennessee" color = "lightblue" link = "./cat.jpg"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <Event event = "BBQ Dinner🎩" color = "pink"/>
                        <td></td>
                        <Event event = "Buffet Dinner🎩" color = "pink"/>
                        <td></td>
                        <Event event = "Chipotle Dinner🎩" color = "pink"/>
                        <Event event = "Leave for Michigan" color = "lightblue"/>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Calender;