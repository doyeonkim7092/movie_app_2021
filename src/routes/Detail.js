import React from 'react'

class Detail extends React.Component{

    componentDidMount() {
        const {location, history} = this.props;
        console.log(location.state)
        console.log(this.props,'props')
        if(location.state === undefined){
            history.push('/');
        }
    }
//didmount는 렌더 이후에 동작하기 때문에, 에러가 난다!@#
    render(){
        const {location} = this.props;
        // return <span>{location.state.title}</span>
        if(location.state){
            return <span>{location.state.title}</span>
        }else{
            return null;
        }
    }
}

export default Detail