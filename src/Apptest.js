import React from 'react'
// import PropTypes from 'prop-types'

class Apptest extends React.Component{
    constructor(props) {
        super(props);
        console.log('constructor')
    }
    state = {
        count: 0,
        isLoading: true,
    };

    // add = () =>{
    //     this.setState({count:this.state.count +1})
    // }
    add = () =>{
        this.setState(current => ({count:current.count +1}));
    }
    // minus = () =>{
    //     this.setState({count:this.state.count -1})
    // }
    minus = () =>{
        this.setState(current => ({count: current.count -1}));
    }
    componentDidMount() {
        console.log('did mount')
        setTimeout(()=>{
            this.setState({isLoading:false});
        },3000)

    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('updated!!')
    }

    render(){
        console.log('render');
        const { isLoading } = this.state;
        return(
        <div>
            <h1>class component's state is {this.state.count}</h1>
            <button onClick={this.add}>ADD</button>
            <button onClick={this.minus}>MINUS</button>
            <div>{isLoading ? 'loading...' : 'i am Ready'}</div>
        </div>
        )
    }
}

export default Apptest;
