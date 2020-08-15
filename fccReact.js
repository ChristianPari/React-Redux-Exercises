// FCC REACT

//* 1: Create a Simple JSX Element
const JSX = <h1>Hello JSX!</h1>;
// could also be writted {"Hello JSX!"} but both are considered valid strings with how Babel compiles the code into JavaScript code

//* 2: Create a Complex JSX Element
/*
JSX must renturn a SINGLE element, so if creating multiple elements within a React Component be sure to always nest within a container element like a DIV
*/

const JSX = <div>
    <h1>Learning REACT</h1>
    <p>Is Fun!</p>
        <ul>
            <li>1 item</li>
            <li>2 items</li>
            <li>3 items</li>
        </ul>
</div>;

//* 3: Add Comments in JSX
// Adding a comment within a JSX element
const JSX = (
    <div>
      {/* THIS IS A COMMENT */}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );
  
//* 4: Render HTML Elements to the DOM
// Use the ReactDOM.render() method to render this component to the page. You can pass defined JSX elements directly in as the first argument and use document.getElementById() to select the DOM node to render them to. There is a div with id='challenge-node' available for you to use. Make sure you don't change the JSX constant.

const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
);
  
ReactDOM.render(JSX, document.getElementById("challenge-node"));

//* 5: Define an HTML Class in JSX
// Add a class of 'myDiv' to the div element

const JSX = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
);
  
//* 6: Learn About Self-Closing JSX Tags
// Fix the errors in the code editor so that it is valid JSX and successfully transpiles. Make sure you don't change any of the content - you only need to close tags where they are needed.

const JSX = (
    <div>
      {/* remove comment and change code below this line
      <h2>Welcome to React!</h2> <br >
      <p>Be sure to close all tags!</p>
      <hr >
      remove comment and change code above this line */}
    </div>
);

const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
);

//* 7: Create a Stateless Functional Component
// The code editor has a function called MyComponent. Complete this function so it returns a single div element which contains some string of text.

const MyComponent = function() {
  
    return (
      <div>
      Hello this is my div
      </div>
    )
  
};
  
//* 8: Create a React Component
//MyComponent is defined in the code editor using class syntax. Finish writing the render method so it returns a div element that contains an h1 with the text Hello React!.

class MyComponent extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
  
            <div>
                <h1>Hello React!</h1>
            </div>
  
        )
    }
};
  
//* 9: Create a Component with Composition
// In the code editor, there is a simple functional component called ChildComponent and a class component called ParentComponent. Compose the two together by rendering the ChildComponent within the ParentComponent. Make sure to close the ChildComponent tag with a forward slash.

const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
class ParentComponent extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          <ChildComponent />
        </div>
      );
    }
};
  
//* 10: Use React to Render Nested Components
// There are two functional components defined in the code editor, called TypesOfFruit and Fruits. Take the TypesOfFruit component and compose it, or nest it, within the Fruits component. Then take the Fruits component and nest it within the TypesOfFood component. The result should be a child component, nested within a parent component, which is nested within a parent component of its own!

const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
const Fruits = () => {
    return (
      <div>
        <TypesOfFruit />
      </div>
    );
};
  
class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits />
        </div>
      );
    }
};
  
//* 11: Compose React Components
// In the code editor, the TypesOfFood component is already rendering a component called Vegetables. Also, there is the Fruits component from the last challenge. Nest two components inside of Fruits — first NonCitrus, and then Citrus. Both of these components are provided for you behind the scenes. Next, nest the Fruits class component into the TypesOfFood component, below the h1 header and above Vegetables. The result should be a series of nested components, which uses two different component types.

class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          <NonCitrus />
          <Citrus />
        </div>
      );
    }
};
  
class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits />
          <Vegetables />
        </div>
      );
    }
};
  
//* 12: Render a Class Component to the DOM
// Both the Fruits and Vegetables components are defined for you behind the scenes. Render both components as children of the TypesOfFood component, then render TypesOfFood to the DOM. There is a div with id='challenge-node' available for you to use.

class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits />
          <Vegetables />
        </div>
      );
    }
};

ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));

//* 13: Write a React Component from Scratch
// Define a class MyComponent that extends React.Component. Its render method should return a div that contains an h1 tag with the text: My First React Component! in it. Use this text exactly, the case and punctuation matter. Make sure to call the constructor for your component, too. Render this component to the DOM using ReactDOM.render(). There is a div with id='challenge-node' available for you to use.

class MyComponent extends React.Component {

    render() {
  
        return (
  
          <div>
            <h1>My First React Component!</h1>
          </div>
  
        )
  
    }
  
};
  
ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));

//* 14: Pass Props to a Stateless Functional Component
// There are Calendar and CurrentDate components in the code editor. When rendering CurrentDate from the Calendar component, pass in a property of date assigned to the current date from JavaScript's Date object. Then access this prop in the CurrentDate component, showing its value within the p tags. Note that for prop values to be evaluated as JavaScript, they must be enclosed in curly brackets, for instance date={Date()}.

const CurrentDate = (props) => {
    return (
      <div>
        
        <p>The current date is: {props.date}</p>
        
      </div>
    );
};
  
class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          
          <CurrentDate date={Date()}/>
          
        </div>
      );
    }
};

//* 15: Pass an Array as Props
// There are List and ToDo components in the code editor. When rendering each List from the ToDo component, pass in a tasks property assigned to an array of to-do tasks, for example ["walk dog", "workout"]. Then access this tasks array in the List component, showing its value within the p element. Use join(", ") to display the props.tasksarray in the p element as a comma separated list. Today's list should have at least 2 tasks and tomorrow's should have at least 3 tasks.

const List = (props) => {
    return <p>{props.tasks.join(", ")}</p>
};
  
class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          <List tasks={["Walk dog", "Walk cat", "Walk myself"]}/>
          <h2>Tomorrow</h2>
          <List tasks={["Walk dogs", "Walk cats", "Walk myself again"]}/>
        </div>
      );
    }
};
  
//* 16: Use Default Props
// The code editor shows a ShoppingCart component. Define default props on this component which specify a prop items with a value of 0.

const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
};

ShoppingCart.defaultProps = {
    items: 0
}

//* 17: Override Default Props
// The ShoppingCart component now renders a child component Items. This Items component has a default prop quantity set to the integer 0. Override the default prop by passing in a value of 10 for quantity.

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}
  
Items.defaultProps = {
    quantity: 0
}
  
class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* change code below this line */ }
      return <Items quantity={10}/>
      { /* change code above this line */ }
    }
};
  
//* 18: Use PropTypes to Define the Props You Expect
// Define propTypes for the Items component to require quantity as a prop and verify that it is of type number.

const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};
  
Items.propTypes = {
    quantity: PropTypes.number.isRequired
}

  Items.defaultProps = {
    quantity: 0
};
  
class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
};
  
//* 19: Access Props Using this.props
// Render an instance of the ReturnTempPassword component in the parent component ResetPassword. Here, give ReturnTempPassword a prop of tempPassword and assign it a value of a string that is at least 8 characters long. Within the child, ReturnTempPassword, access the tempPassword prop within the strong tags to make sure the user sees the temporary password.

class ReturnTempPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
          </div>
      );
    }
};
  
class ResetPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            <h2>Reset Password</h2>
            <h3>We've generated a new temporary password for you.</h3>
            <h3>Please reset this password from your account settings ASAP.</h3>
            <ReturnTempPassword tempPassword={"12345678"} />
           </div>
      );
    }
};

//* 20: Review Using Props with Stateless Functional Components
// The code editor has a CampSite component that renders a Camper component as a child. Define the Camper component and assign it default props of { name: 'CamperBot' }. Inside the Camper component, render any code that you want, but make sure to have one p element that includes only the name value that is passed in as a prop. Finally, define propTypes on the Camper component to require name to be provided as a prop and verify that it is of type string.

class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
};
  
class Camper extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <p>
          {this.props.name}
        </p>
      )
    }
};
  
Camper.defaultProps = {
    name: "CamperBot"
};
  
Camper.propTypes = {
    name: PropTypes.string.isRequired
}

//* 21: Create a Stateful Component
// There is a component in the code editor that is trying to render a name property from its state. However, there is no state defined. Initialize the component with state in the constructor and assign your name to a property of name.

class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "Christian Pari"
      };
  
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
};

//* 22: Render State in the User Interface
// In the code editor, MyComponent is already stateful. Define an h1 tag in the component's render method which renders the value of name from the component's state.

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
};
  
//* 23: Render State in the User Interface Another Way
// In the MyComponent render method, define a const called name and set it equal to the name value in the component's state. Because you can write JavaScript directly in this part of the code, you don't have to enclose this reference in curly braces. Next, in the return statement, render this value in an h1 tag using the variable name. Remember, you need to use the JSX syntax (curly braces for JavaScript) in the return statement.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    const name = this.state.name;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
};

//* 24: Set State with this.setState
// There is a button element in the code editor which has an onClick() handler. This handler is triggered when the button receives a click event in the browser, and runs the handleClick method defined on MyComponent. Within the handleClick method, update the component state using this.setState(). Set the name property in state to equal the string React Rocks!. Click the button and watch the rendered state update. Don't worry if you don't fully understand how the click handler code works at this point. It's covered in upcoming challenges.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({name: "React Rocks!"});
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

//* 25: Bind "this" to a Class Method
// The code editor has a component with a state that keeps track of the text. It also has a method which allows you to set the text to "You clicked!". However, the method doesn't work because it's using the this keyword that is undefined. Fix it by explicitly binding this to the handleClick() method in the component's constructor. Next, add a click handler to the button element in the render method. It should trigger the handleClick() method when the button receives a click event. Remember that the method you pass to the onClick handler needs curly braces because it should be interpreted directly as JavaScript. Once you complete the above steps you should be able to click the button and see You clicked!.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};

//* 26: Use State to Toggle an Element
// MyComponent has a visibility property which is initialized to false. The render method returns one view if the value of visibility is true, and a different view if it is false. Currently, there is no way of updating the visibility property in the component's state. The value should toggle back and forth between true and false. There is a click handler on the button which triggers a class method called toggleVisibility(). Pass a function to setState to define this method so that the state of visibility toggles to the opposite value when the method is called. If visibility is false, the method sets it to true, and vice versa. Finally, click the button to see the conditional rendering of the component based on its state.

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {

    this.setState(state => ({
      visibility: !state.visibility
    }))

  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
};

//* 27: Write a Simple Counter
// The Counter component keeps track of a count value in state. There are two buttons which call methods increment() and decrement(). Write these methods so the counter value is incremented or decremented by 1 when the appropriate button is clicked. Also, create a reset() method so when the reset button is clicked, the count is set to 0.

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);

  }

  increment() {

    this.setState( state => ({
      count: state.count + 1
    }))

  }

  decrement() {

    this.setState( state => ({
      count: state.count - 1
    }))

  }

  reset() {

    this.setState( state => ({
      count: 0
    }))

  }

  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

//* 28: Create a Controlled Input
// The code editor has the skeleton of a component called ControlledInput to create a controlled input element. The component's state is already initialized with an input property that holds an empty string. This value represents the text a user types into the input field. First, create a method called handleChange() that has a parameter called event. When the method is called, it receives an event object that contains a string of text from the input element. You can access this string with event.target.value inside the method. Update the input property of the component's state with this new string. In the render method, create the input element above the h4 tag. Add a value attribute which is equal to the input property of the component's state. Then add an onChange() event handler set to the handleChange() method. When you type in the input box, that text is processed by the handleChange() method, set as the input property in the local state, and rendered as the value in the input box on the page. The component state is the single source of truth regarding the input data. Last but not least, don't forget to add the necessary bindings in the constructor.

class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };

this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {

  const val = event.target.value;
  this.setState(state => ({
    input: val
  }));

}

render() {
    return (
      <div>
        <input value={this.state.input} onChange={this.handleChange}></input>
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};


//* 29: Create a Controlled Form
/*
The MyForm component is set up with an empty form with a submit handler. The submit handler will be called when the form is submitted.

We've added a button which submits the form. You can see it has the type set to submit indicating it is the button controlling the form. Add the input element in the form and set its value and onChange() attributes like the last challenge. You should then complete the handleSubmit method so that it sets the component state property submit to the current input value in the local state.

Note:  You also must call event.preventDefault() in the submit handler, to prevent the default form submit behavior which will refresh the web page.

Finally, create an h1 tag after the form which renders the submit value from the component's state. You can then type in the form and click the button (or press enter), and you should see your input rendered to the page.
*/

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    
    event.preventDefault();
    this.setState({
      submit: this.state.input
    });
    
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          
          <input value={this.state.input} onChange={this.handleChange}></input>
          
          <button type='submit'>Submit!</button>
        </form>
        
        <h1>{this.state.submit}</h1>
        
      </div>
    );
  }
};

//* 30: Pass State as Props to Child Components
/*
The MyApp component is stateful and renders a Navbar component as a child. Pass the name property in its state down to the child component, then show the name in the h1 tag that's part of the Navbar render method.
*/

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         <Navbar name={this.state.name} />
       </div>
    );
  }
};

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name} </h1>
    </div>
    );
  }
};

//* 31: Pass a Callback as Props
/*
There are three components outlined in the code editor. The MyApp component is the parent that will render the GetInput and RenderInput child components. Add the GetInput component to the render method in MyApp, then pass it a prop called input assigned to inputValue from MyApp's state. Also create a prop called handleChange and pass the input handler handleChange to it.

Next, add RenderInput to the render method in MyApp, then create a prop called input and pass the inputValue from state to it. Once you are finished you will be able to type in the input field in the GetInput component, which then calls the handler method in its parent via props. This updates the input in the state of the parent, which is passed as props to both children. Observe how the data flows between the components and how the single source of truth remains the state of the parent component. Admittedly, this example is a bit contrived, but should serve to illustrate how data and callbacks can be passed between React components.
*/

class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
         
        <GetInput input={this.state.inputValue} handleChange={this.handleChange} />
        <RenderInput input={this.state.inputValue} />
        
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};

//* 32: Use the Lifecycle Method componentWillMount
/*
The componentWillMount() method is called before the render() method when a component is being mounted to the DOM. Log something to the console within componentWillMount() - you may want to have your browser console open to see the output.
*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    
    console.log("hello")
    
  }
  render() {
    return <div />
  }
};

//* 33: Use the Lifecycle Method componentDidMount
/*
There is a mock API call in componentDidMount(). It sets state after 2.5 seconds to simulate calling a server to retrieve data. This example requests the current total active users for a site. In the render method, render the value of activeUsers in the h1. Watch what happens in the preview, and feel free to change the timeout to see the different effects.
*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout( () => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
    // using setTimeout to give a slight delay in the reloading to ensure data is gathered from the API
  }
  render() {
    return (
      <div>
        <h1>Active Users: { this.state.activeUsers }</h1>
      </div>
    );
  }
};

//* 34: Add Event Listeners
/*
Attach an event listener in the componentDidMount() method for keydown events and have these events trigger the callback handleKeyPress(). You can use document.addEventListener() which takes the event (in quotes) as the first argument and the callback as the second argument.

Then, in componentWillUnmount(), remove this same event listener. You can pass the same arguments to document.removeEventListener(). It's good practice to use this lifecycle method to do any clean up on React components before they are unmounted and destroyed. Removing event listeners is an example of one such clean up action.
*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  
  handleEnter() {
    this.setState({
      message: this.state.message + 'You pressed the enter key! '
    });
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};

//* 35: Optimize Re-Renders with shouldComponentUpdate
/*
The shouldComponentUpdate() method is added in a component called OnlyEvens. Currently, this method returns true so OnlyEvens re-renders every time it receives new props. Modify the method so OnlyEvens updates only if the value of its new props is even. Click the Add button and watch the order of events in your browser's console as the lifecycle hooks are triggered.
*/

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    
    return nextProps.value % 2 === 0 ? true : false;

  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>
  }
};

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value}/>
      </div>
    );
  }
};

//* 36: Introducing Inline Styles
/*
Add a style attribute to the div in the code editor to give the text a color of red and font size of 72px.

Note that you can optionally set the font size to be a number, omitting the units "px", or write it as "72px".
*/

class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: "red", fontSize: "72px"}}>Big Red</div>
    );
  }
};

//* 37: Add Inline Styles in React
/**
If you have a large set of styles, you can assign a style object to a constant to keep your code organized. Uncomment the styles constant and declare an object with three style properties and their values. Give the div a color of "purple", a font-size of 40, and a border of "2px solid purple". Then set the style attribute equal to the styles constant.
*/

class Colorful extends React.Component {
  render() {
    
    return (
      <div style={styles}>Style Me!</div>
    );
    
  }
};

const styles = {
  color: "purple",
  fontSize: "40px",
  border: "2px solid purple"
};

//* 38: 
/*
In the code provided, the render method has an array that contains 20 phrases to represent the answers found in the classic 1980's Magic Eight Ball toy. The button click event is bound to the ask method, so each time the button is clicked a random number will be generated and stored as the randomIndex in state. On line 52, delete the string "change me!" and reassign the answer const so your code randomly accesses a different index of the possibleAnswers array each time the component updates. Finally, insert the answer const inside the p tags.
*/

const inputStyle = {
  width: 235,
  margin: 5
}

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    }
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Don\'t count on it',
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle} /><br />
        <button onClick={this.ask}>
          Ask the Magic Eight Ball!
        </button><br />
        <h3>Answer:</h3>
        <p>
          {answer}
        </p>
      </div>
    );
  }
};

//* 39: Render with an If-Else Condition
/*
MyComponent contains a boolean in its state which tracks whether you want to display some element in the UI or not. The button toggles the state of this value. Currently, it renders the same UI every time. Rewrite the render() method with an if/else statement so that if display is true, you return the current markup. Otherwise, return the markup without the h1 element.
*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    
    if (this.state.display) {

      return (
          <div>
            <button onClick={this.toggleDisplay}>Toggle Display</button>
            <h1>Displayed!</h1>
          </div>
        );

    } else {

       return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      ); 

    }

  }
};

//* 40: Use && for a More Concise Conditional
/*
Solve the previous example again, so the h1 only renders if display is true, but use the && logical operator instead of an if/else statement.
*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};

//* 41: Use a Ternary Expression for Conditional Rendering
/*
The code editor has three constants defined within the CheckUserAge component's render() method. They are called buttonOne, buttonTwo, and buttonThree. Each of these is assigned a simple JSX expression representing a button element. First, initialize the state of CheckUserAge with input and userAge both set to values of an empty string.

Once the component is rendering information to the page, users should have a way to interact with it. Within the component's return statement, set up a ternary expression that implements the following logic: when the page first loads, render the submit button, buttonOne, to the page. Then, when a user enters their age and clicks the button, render a different button based on the age. If a user enters a number less than 18, render buttonThree. If a user enters a number greater than or equal to 18, render buttonTwo.
*/

const inputStyle = {
  width: 235,
  margin: 5
}

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      input: "",
      userAge: ""
    };

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      input: e.target.value,
      userAge: ''
    });
  }
  submit() {
    this.setState(state => ({
      userAge: state.input
    }));
  }
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange} /><br />
        {
          this.state.userAge === "" 
          ? buttonOne 
          : ( this.state.input >= 18 
            ? buttonTwo 
            : buttonThree )
        }
      </div>
    );
  }
};

//* 42: Render Conditionally from Props
/*
The code editor has two components that are partially defined for you: a parent called GameOfChance, and a child called Results. They are used to create a simple game where the user presses a button to see if they win or lose.

First, you'll need a simple expression that randomly returns a different value every time it is run. You can use Math.random(). This method returns a value between 0 (inclusive) and 1 (exclusive) each time it is called. So for 50/50 odds, use Math.random() >= .5 in your expression. Statistically speaking, this expression will return true 50% of the time, and false the other 50%. On line 30, replace the comment with this expression to complete the variable declaration.

Now you have an expression that you can use to make a randomized decision in the code. Next you need to implement this. Render the Results component as a child of GameOfChance, and pass in expression as a prop called fiftyFifty. In the Results component, write a ternary expression to render the text "You Win!" or "You Lose!" based on the fiftyFifty prop that's being passed in from GameOfChance. Finally, make sure the handleClick() method is correctly counting each turn so the user knows how many times they've played. This also serves to let the user know the component has actually updated in case they win or lose twice in a row.
*/

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
      {
        this.props.fiftyFifty ? "You Win!" : "You Lose!"
      }
      </h1>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    const expression = Math.random() >= .5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression}/>
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};

//* 43: Change Inline CSS Conditionally Based on Component State
/*
The code editor has a simple controlled input component with a styled border. You want to style this border red if the user types more than 15 characters of text in the input box. Add a condition to check for this and, if the condition is valid, set the input border style to 3px solid red. You can try it out by entering text in the input.
*/

class GateKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value })
  }
  render() {
    let inputStyle = {
      border: '1px solid black'
    };
    
    if (this.state.input.length > 15) {
      inputStyle.border = "3px solid red"
    } 

    return (
      <div>
        <h3>Don't Type Too Much:</h3>
        <input
          type="text"
          style={inputStyle}
          value={this.state.input}
          onChange={this.handleChange} />
      </div>
    );
  }
};

//* 44: use Array.map() to Dynamically Render Elements
/*
The code editor has most of the MyToDoList component set up. Some of this code should look familiar if you completed the controlled form challenge. You'll notice a textarea and a button, along with a couple of methods that track their states, but nothing is rendered to the page yet.

Inside the constructor, create a this.state object and define two states: userInput should be initialized as an empty string, and toDoList should be initialized as an empty array. Next, delete the comment in the render() method next to the items variable. In its place, map over the toDoList array stored in the component's internal state and dynamically render a li for each item. Try entering the string eat, code, sleep, repeat into the textarea, then click the button and see what happens.
*/

const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userInput: "",
      toDoList: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const itemsArray = this.state.userInput.split(',');
    this.setState({
      toDoList: itemsArray
    });
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  render() {
    const items = this.state.toDoList.map(elm => {
      return <li>{elm}</li>
    });

    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};

//* 45: Give Sibling Elements a Unique Key Attribute
/*
The code editor has an array with some front end frameworks and a stateless functional component named Frameworks(). Frameworks() needs to map the array to an unordered list, much like in the last challenge. Finish writing the map callback to return an li element for each framework in the frontEndFrameworks array. This time, make sure to give each li a key attribute, set to a unique value. The li elements should also contain text from frontEndFrameworks.

Normally, you want to make the key something that uniquely identifies the element being rendered. As a last resort the array index may be used, but typically you should try to use a unique identification.
*/

const frontEndFrameworks = [
  'React',
  'Angular',
  'Ember',
  'Knockout',
  'Backbone',
  'Vue'
];

function Frameworks() {

  const renderFrameworks = 
    frontEndFrameworks.map(
      framework => {
        // return <li 
        //   key={frontEndFrameworks.indexOf(framework) + 1}
        //   >{framework}</li>
        // OR
        return <li
          key={framework.toLowerCase()}
          >{framework}</li>
          // this way the key is unique for each item without using a simple index...
  })
  
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>
        {renderFrameworks}
      </ul>
    </div>
  );
};

//* 46: Use Array.fitler() to Dynamically Filter an Array
/*
In the code editor, MyComponent's state is initialized with an array of users. Some users are online and some aren't. Filter the array so you see only the users who are online. To do this, first use filter to return a new array containing only the users whose online property is true. Then, in the renderOnline variable, map over the filtered array, and return a li element for each user that contains the text of their username. Be sure to include a unique key as well, like in the last challenges.
*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Jeff',
          online: true
        },
        {
          username: 'Alan',
          online: false
        },
        {
          username: 'Mary',
          online: true
        },
        {
          username: 'Jim',
          online: false
        },
        {
          username: 'Sara',
          online: true
        },
        {
          username: 'Laura',
          online: true
        }
      ]
    }
  }
  render() {

    const usersOnline = this.state.users.filter(user => user.online);
    
    const renderOnline = usersOnline.map(user => {

      const li = <li>{user.username}</li>;
      li.key = usersOnline.indexOf(user);

      return li
      
    })
    
    return (
       <div>
         <h1>Current Online Users:</h1>
         <ul>
           {renderOnline}
         </ul>
       </div>
    );
  }
};

//* 47: Render React on the Server with renderToString
/*
The renderToString() method is provided on ReactDOMServer, which is available here as a global object. The method takes one argument which is a React element. Use this to render App to a string.
*/

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div/>
  }
};

ReactDOMServer.renderToString(<App />);

// vscode-fold=2