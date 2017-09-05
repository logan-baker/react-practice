var NewItem = React.createClass({
  handleClick() {
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: {
        item: {
          name: name,
          description: description
        }
      },
      success: (item) => {
        this.props.handleSubmit(item);
      }
    });
  },
  render() {
    return (
      <div>
        <input ref='name' placeholder='Enter the name of the item'/>
        <input ref='description' placeholder='Enter a description'/>
        <button onClick={this.handleClick}>Submit</button>
      </div>

    )
  }
});

// What’s needed to create a new item? We must create two input fields and send them to the server via POST request. When the new item is created, we have to reload our list of items so that they include the newly created one.

// Everything looks familiar, except for the ref attribute. The ref attribute is used to reference the element in the component. Its function is similar to the name attribute in AngularJS. Instead of finding elements by id or by class, we do it by ref. In this particular case, the ref will be used to get the value of the text field and send it to the server.
//
// If you tried to click the submit button, you’ll notice that nothing happens. So let’s add an event handler! To do this, we need to slightly alter the html of the button: <button onClick={this.handleClick}>Submit</button>
