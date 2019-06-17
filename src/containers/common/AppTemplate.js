import React from 'react';
import AppHeader from '../../components/common/AppHeader'


function AppTemplate(props) {
  return (
    <div>
      <AppHeader currentUser={{ name: 'John' }}/>
      <div>
          {props.children}
      </div>
    </div>
  );
}

export default AppTemplate;
