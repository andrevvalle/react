'use strict';

import React from 'react';

import Input from '../components/recarga/input';

class RecargaApp extends React.Component {

  render() {

    return (
      <div>
        <Input type="text" dataType="test" pattern="11/11/11" />
      </div>
    );

  };

}

export default RecargaApp;
React.render(<RecargaApp/>, document.body);
