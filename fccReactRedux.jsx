//* ########## FCC React Redux ##########

//* 1: Getting Started with React Redux
/*
Start with a DisplayMessages component. Add a constructor to this component and initialize it with a state that has two properties: input, that's set to an empty string, and messages, that's set to an empty array.
*/

class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            messages: []
        }
    }

    render() {
        return <div />
    }
};

//* 2: Manage State Locally First
/*
First, in the render() method, have the component render an input element, button element, and ul element. When the input element changes, it should trigger a handleChange() method. Also, the input element should render the value of input that's in the component's state. The button element should trigger a submitMessage() method when it's clicked.

Second, write these two methods. The handleChange() method should update the input with what the user is typing. The submitMessage() method should concatenate the current message (stored in input) to the messages array in local state, and clear the value of the input.

Finally, use the ul to map over the array of messages and render it to the screen as a list of li elements.
*/

class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    handleChange(event){
      const value = event.target.value;
  
      this.setState(state => ({
        input: value
      }))
    }
  
    submitMessage() {
      const value = this.state.input;
  
      this.setState(state => ({
        messages: [...state.messages, value],
        input: ""
      }))
    }
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
          <button onClick={this.submitMessage.bind(this)}>Submit</button>
          <ul>{this.state.messages.map(msg => (
            <li>{msg}</li>
          ))}</ul>
        </div>
      );
    }
  };
  
//* 3: Extract State Logic to Redux
/*
Now that you finished the React component, you need to move the logic it's performing locally in its state into Redux. This is the first step to connect the simple React app to Redux. The only functionality your app has is to add new messages from the user to an unordered list. The example is simple in order to demonstrate how React and Redux work together.

First, define an action type 'ADD' and set it to a const ADD. Next, define an action creator addMessage() which creates the action to add a message. You'll need to pass a message to this action creator and include the message in the returned action.

Then create a reducer called messageReducer() that handles the state for the messages. The initial state should equal an empty array. This reducer should add a message to the array of messages held in state, or return the current state. Finally, create your Redux store and pass it the reducer.
*/

const ADD = "ADD";

const addMessage = message => {
    return {
      type: ADD,
      message
    }
}

const messageReducer = (state = [], action) => {
    switch(action.type){
      case ADD:
        return [...state, action.message]

      default:
        return state
    }
}

const store = Redux.createStore(messageReducer);