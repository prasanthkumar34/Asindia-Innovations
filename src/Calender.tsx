import React from 'react';
import './App.css';

import { Inject,ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel,  DragAndDrop, Resize } from '@syncfusion/ej2-react-schedule';

class Calendar extends React.Component {
  private localData : EventSettingsModel = {
    dataSource: [{
      EndTime: new Date(2019, 0, 6, 30),
      StartTime: new Date(2019, 0, 11, 4, 0)
    }]
  }
  public render() {
    return <ScheduleComponent currentView= 'Month' eventSettings={this.localData}> 
      <Inject services={[Day, Week, WorkWeek, Month, Agenda, DragAndDrop, Resize]} />
    </ScheduleComponent>
  }
}


export default Calendar;