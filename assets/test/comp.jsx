'use strict';

import React from 'react/addons';
import $ from 'jquery';

class Input extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || null
    };

    this.onChange = this.onChange.bind(this);
    this.render = this.render.bind(this);
  }

  onChange(e) {
    // let value = { pattern: e.target.pattern, value: e.target.value };
    // console.log({ value }, $);

    // this.setState({ value }, () => {
    //   if (this.props.onChange) {
    //     this.props.onChange(e, value);
    //   }
    // });
  }

  render() {
    return (
      <input
        {...this.props}
        type={this.props.type}
        data-type={this.props.dataType}
        pattern={this.props.pattern}
        value={this.state.value}
        onChange={e => this.onChange(e)} />
    );
  }

}

Input.propTypes = {
  type: React.PropTypes.string.isRequired,
  dataType: React.PropTypes.string.isRequired,
  pattern: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func
};

export default Input;
