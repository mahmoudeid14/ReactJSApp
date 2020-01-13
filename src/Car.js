import React from 'react';
import ChildCar from './ChildCar';

class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Explore",
            //color: props.color,
            color: "red",
            year: 1995,
            showCar: true
        };

    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log('getDerivedStateFromProps');
    //     return { color: props.color };
    // }
    shouldComponentUpdate() {
        return true;
    }
    // componentDidMount() {
    //     console.log('componentDidMount');
    //     setTimeout(() => {
    //         this.setState({ color: "yellow" });
    //     }, 1000);

    // }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
            "Before the  update, the color was: " + prevState.color;
        return null;
    }
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
            "the  updated color is: " + this.state.color;
    }

    changeColor = () => {

        //this.setState({ ...this.state, color: "bule" });
        this.setState({ color: "bule" });
    }
    ShowChildCar = () => {
        this.setState({ showCar: true });
    }
    HideChildCar = () => {
        this.setState({ showCar: false });
    }

    render() {
        console.log(this.state);
        let myChildCar;
        if (this.state.showCar) {
            myChildCar = <ChildCar />;
        }
        return (<div>
            <h1>My {this.state.brand}</h1>
            <p>
                It is a {this.state.color}


            </p>
            <p>Moddel: {this.state.model}</p>
            <p>from :{this.state.year}.</p>
            <button
                type="button"
                onClick={this.changeColor}
            >Change color</button>
            <div id="div1"></div>
            <div id="div2"></div>
            {myChildCar}
            <button type="button" onClick={this.ShowChildCar}>Show Child Car</button>
            <button type="button" onClick={this.HideChildCar}>Hide Child Car</button>

        </div>)
    };
}
// export const myFunction1 = () => {
//     return (<h2>I am a Car!</h2>);
// }
export const myFunction1 = () => <h2>I am a newe Car!</h2>

export default Car;