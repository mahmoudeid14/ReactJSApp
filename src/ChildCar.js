import React from 'react';

class ChildCar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (<div>
            <h1>Hello Child Car Component</h1>
        </div>);
    }
    componentDidMount() {
        console.log('Child Car Compoent Loaded');
    }
    componentWillUnmount() {
        console.log('Child Car Compoent Removed');
    }
}
export default ChildCar;