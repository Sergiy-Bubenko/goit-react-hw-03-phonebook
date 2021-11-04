import { Component } from 'react/cjs/react.production.min';

class Filter extends Component {
  render() {
    return (
      <label>
        Find contact by name
        <br />
        <input type="text" name="filter" onChange={this.props.handleChange} />
      </label>
    );
  }
}

export default Filter;
