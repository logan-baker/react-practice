// The <Main /> component has two child components; <Header /> and <Body />. Let’s start with the <Header /> first.

// And change our <Main /> component so that it will render <Header /> in its render function.

var Header = React.createClass({
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
            </div>
        )
    }
});
