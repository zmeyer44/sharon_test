import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EmailList extends Component {
  render() {
    return (
      <div className="container col-10">
        <div className="row">
          <h1 className="mx-auto p-3 mt-5 mb-3 emhead">Central Office Staff</h1>
          </div>
          <div className="row">
          <ul className="emails p-0 mx-auto">
            <li className="individual-line text-center">
              <ul>
                <li>Kathy Sottile</li>
                <li>Superintendent of Schools</li>
                <li>KSottile@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center ">
              <ul>
                <li>Juli Mulcahy</li>
                <li>Assistant Superintendent for Curriculum and Special Services</li>
                <li>JMulcahy@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center ">
              <ul>
                <li>Michael Febiano</li>
                <li>Assistant Superintendent for Business</li>
                <li>MFabiano@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Daniel Cunneely</li>
                <li>Network Administrator</li>
                <li>DCunneely@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Sharon Meyer</li>
                <li>Curriculum Coordinator/CSE Chairperson</li>
                <li>SMeyer@fpbsd.org</li>
              </ul>
            </li>
            
            <li className="individual-line text-center">
              <ul>
                <li>Paul Gustafsson</li>
                <li>Director of Facilities</li>
                <li>PGustafsson@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Tyrone Kelsie</li>
                <li>Transportation Supervisor</li>
                <li>TKelsie@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Susan Rispoli</li>
                <li>CPSE office</li>
                <li>Surispoli@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Maryann Viola</li>
                <li>CSE office</li>
                <li>MViola@fpbsd.org</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="row">
          <h1 className="mx-auto p-3 mt-5 mb-3 emhead">Floral Park Bellerose School</h1>
          </div>
          <div className="row">
          <ul className="emails mx-auto p-0">
            <li className="individual-line text-center">
              <ul>
                <li>Jamie Adams</li>
                <li>Principal</li>
                <li>JaAdams@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Dominique Siebert</li>
                <li>Assistant Principal</li>
                <li>DSiebert@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Nora Epstein</li>
                <li>Nurse</li>
                <li>NEpstein@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Frances Verderosa</li>
                <li>School Psychologist</li>
                <li>FVerderosa@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Jane Helfman</li>
                <li>Social Worker</li>
                <li>JHelfman@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Danielle Reinhardt</li>
                <li>School Psychologist</li>
                <li>DReinhardt@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Kate Tuffy</li>
                <li>Behavior Specialist</li>
                <li>KTuffy@fpbsd.org</li>
              </ul>
            </li>
        
          </ul>
        </div>
        <div className="row">
          <h1 className="mx-auto p-3 mt-5 mb-3 emhead">John Lewis Childs School</h1>
          </div>
          <div className="row">
          <ul className="emails mx-auto p-0">
            <li className="individual-line text-center p-0">
              <ul >
                <li>Susan Fazio</li>
                <li>Principal</li>
                <li>SFazio@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Kristina Lynch</li>
                <li>Assistant Principal</li>
                <li>KLynch@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Kelly O’Sullivan</li>
                <li>Nurse</li>
                <li>KO’Sullivan@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Jane Helfman</li>
                <li>Social Worker</li>
                <li>JHelfman@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Allyson Parla</li>
                <li>School Psychologist</li>
                <li>AParla@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Danielle Reinhardt</li>
                <li>School Psychologist</li>
                <li>DReinhardt@fpbsd.org</li>
              </ul>
            </li>
            <li className="individual-line text-center">
              <ul>
                <li>Kate Tuffy</li>
                <li>Behavior Specialist</li>
                <li>KTuffy@fpbsd.org</li>
              </ul>
            </li>
        
          </ul>
        </div>
      </div>
    );
  }
}
