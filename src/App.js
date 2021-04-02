import './App.css';
import React, {Component} from 'react'
import Messages from "./components/message";
import fetchMultipart from 'fetch-multipart-graphql';

class App extends Component {
    state = {
        messages: []
    }
    onMessage(message){
        this.setState({ messages: [...this.state.messages,message]})
    }

    componentDidMount() {
        let promise = fetchMultipart('http://localhost:8080/stream', {
           method: 'GET',
           headers: {
               'content-type': 'application/json',
           },
           // body: JSON.stringify({
           //     query: operation.text,
           //     variables,
           // }),
           credentials: 'omit',
            mode: 'cors',
           onNext: parts => this.onMessage(parts[0]),
           onError: err => console.log('thing went bung' + err),
           onComplete: () => console.log('done'),
       }).catch((reason => console.log("reason is" + reason)))
        .finally(()=> console.log("finally"))
    }

    render() {
        return (
                  <Messages messages={this.state.messages} />
          );
      }
}

export default App;
