import React, { PureComponent } from 'react';
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import { Clearfix, Grid } from "react-bootstrap";

import './Calendar.css';

import intro6 from '../images/intro/6.jpg';

export default class Calendar extends PureComponent {
  render() {
    return (
      <div>
        <BackgroundImage src={intro6}/>
        <h1 className="page-title">Calendar</h1>
        <div id="calendar" className="text-center">
          <div className="calendar-section">
            <Grid bsClass="container" className="calendar-container">
              <h2 className="main-h2">Upcoming Events</h2>
              <Clearfix visibleXsBlock>
                <iframe
                  title="extra small calendar"
                  src="https://www.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=fairviewrobotics%40gmail.com&amp;color=%23060D5E&amp;ctz=America%2FDenver"
                  style={{ borderWidth: 0 }} width="100%" height="300" frameBorder="0" scrolling="no" />
              </Clearfix>
              <Clearfix visibleSmBlock>
                <iframe
                  title="small calendar"
                  src="https://www.google.com/calendar/embed?showTitle=0&amp;showTabs=0&amp;showCalendars=0&amp;showPrint=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=fairviewrobotics%40gmail.com&amp;color=%23711616&amp;ctz=America%2FDenver"
                  style={{ borderWidth: 0 }} width="100%" height="400" frameBorder="0" scrolling="no" />
              </Clearfix>
              <Clearfix visibleMdBlock>
                <iframe
                  title="medium calendar"
                  src="https://www.google.com/calendar/embed?showTitle=0&amp;showTabs=0&amp;showCalendars=0&amp;showPrint=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=fairviewrobotics%40gmail.com&amp;color=%23711616&amp;ctz=America%2FDenver"
                  style={{ borderWidth: 0 }} width="90%" height="400" frameBorder="0" scrolling="no" />
              </Clearfix>
              <Clearfix visibleLgBlock>
                <iframe
                  title="large calendar"
                  src="https://www.google.com/calendar/embed?showTitle=0&amp;showTabs=0&amp;showCalendars=0&amp;showPrint=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=fairviewrobotics%40gmail.com&amp;color=%23711616&amp;ctz=America%2FDenver"
                  style={{ borderWidth: 0 }} width="80%" height="500" frameBorder="0" scrolling="no" />
              </Clearfix>
            </Grid>
            {/*<div className="container">*/}
            {/*<h2 className="main-h2">Upcoming Events</h2>*/}
            {/*<div className="visible-xs">*/}
            {/*<iframe*/}
            {/*src="https://www.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=fairviewrobotics%40gmail.com&amp;color=%23060D5E&amp;ctz=America%2FDenver"*/}
            {/*style=" border-width:0 " width="100%" height="300" frameBorder="0" scrolling="no"></iframe>*/}
            {/*</div>*/}
            {/*<div className="visible-sm">*/}
            {/*<iframe*/}
            {/*src="https://www.google.com/calendar/embed?showTitle=0&amp;showTabs=0&amp;showCalendars=0&amp;showPrint=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=fairviewrobotics%40gmail.com&amp;color=%23711616&amp;ctz=America%2FDenver"*/}
            {/*style=" border-width:0 " width="100%" height="400" frameBorder="0" scrolling="no"></iframe>*/}
            {/*</div>*/}
            {/*<div className="visible-md">*/}
            {/*<iframe*/}
            {/*src="https://www.google.com/calendar/embed?showTitle=0&amp;showTabs=0&amp;showCalendars=0&amp;showPrint=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=fairviewrobotics%40gmail.com&amp;color=%23711616&amp;ctz=America%2FDenver"*/}
            {/*style=" border-width:0 " width="90%" height="400" frameBorder="0" scrolling="no"></iframe>*/}
            {/*</div>*/}
            {/*<div className="visible-lg">*/}
            {/*<iframe*/}
            {/*src="https://www.google.com/calendar/embed?showTitle=0&amp;showTabs=0&amp;showCalendars=0&amp;showPrint=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=fairviewrobotics%40gmail.com&amp;color=%23711616&amp;ctz=America%2FDenver"*/}
            {/*style=" border-width:0 " width="80%" height="500" frameBorder="0" scrolling="no"></iframe>*/}
            {/*</div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    );
  }
}
