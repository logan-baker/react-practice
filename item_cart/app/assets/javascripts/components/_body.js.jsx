// We must add the <AllItems /> and <NewItem /> components into the body component, just like we included. In the <Body /> component, we’ll include the rest of the nested components, respectively:
var Body = React.createClass({
  getInitialState() {
    return {items: []}
  },

  componentDidMount() {
    $.getJSON('/api/v1/items.json', (response) => {
      this.setState({items: response})
    });
  },

  handleSubmit(item) {
    var newState = this.state.items.concat(item);
    this.setState({items: newState})
  },

  handleDelete() {
    console.log('in handle delete');
  },

  render() {
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit}/>
        <AllItems items={this.state.items} handleDelete={this.handleDelete}/>
      </div>
    )
  }
});
