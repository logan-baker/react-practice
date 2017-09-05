// First, let’s start with listing all the items. Listing them will include making a request to the server to fetch all the items into our component using an AJAX request. We need to do it when the component gets rendered into the DOM. React has several built-in methods that handle different events during a component’s lifespan. There are methods that execute before and after component mounts into the DOM or before and after it dismounts from the DOM. In this case, we need a method that will handle the AJAX request when the component mounts. We’ll use componentDidMount(), which is called right after the component is mounted. You can find out about other component methods and how to use them in React’s documentation (https://facebook.github.io/react/docs/react-component.html)

var AllItems = React.createClass({
  // Before we fetch information from the server, we need to know how data is stored in the component. When the component is mounted, its data has to be initialized. This is done by the getInitialState() method.

  // We use the getJSON method with the URL of the items.json as an argument, and we use the setState function of the component to put the response into the items object.

  // We’re going to iterate our items through them in our render() method to get them.
  var AllItems = React.createClass({
    handleDelete(id) {
      $.ajax({
        url: `/api/v1/items/${id}`,
        type: 'DELETE',
        success: () => {
          this.removeItemClient(id);
        }
      });
    },
// Remember to change the syntax of the success function from success (response) {} to success: () => {}, otherwise you’ll be referring to the promise of the response instead of the component itself.
    removeItemClient(id) {
      var newItems = this.state.items.filter((item) => {
        return item.id != id;
      });

      this.setState({items: newItems});
    },

    render() {
      var items = this.props.items.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            // The bind() method will bind the id of the item to this, causing the id to send as an argument. This way we know what item we're deleting
            <button onClick={this.handleDelete.bind(this, item.id)}>Delete</button>
          </div>
        )
      });

      return (
        <div>
          {items}
        </div>
      )
    }
  });

  // Here’s how you implement the componentDidMount() method. Note how the methods are separated: If we take a closer look at the React.createClass function, they’re defined as object properties, and they should be separated by commas. Don’t fret if you don’t see the console.log() message in your application - we still haven’t included it in a parent component and it won’t mount into the DOM!

  // The map method is similar to the each method in the .erb templates. It iterates through the array of items and displays the items’ attributes using bracket notation. The brackets are equivalent to Rails’ <%= => tags. They’re used to inject the item attributes into the html, making it dynamic. It eventually returns the items variable, which now is a DOM element with item attributes wrapped in html elements.

  // But hold on--we’re not done just yet! When we iterate through items in React, there must be a way to identify each item into the component’s DOM. For that, we’ll use a unique attribute of each item, also known as key. To add a key to the item, we need to use the key attribute in the div that wraps it, like this:
  // var items= this.state.items.map((item) => {
  //      return (
  //          <div key={item.id}>
  //              <h3>{item.name}</h3>
  //              <p>{item.description}</p>
  //          </div>
  //      )
  //  });
  //
  //  return(
  //      <div>
  //          {items}
  //      </div>
  //  )
  // }
