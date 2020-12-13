import React from 'react';

class MemoryCard extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            flipped: false
        };

        this.chooseCard = this.chooseCard.bind(this);
    }

    chooseCard() {
        if(this.state.flipped) {
            return
        } else {
            this.setState({flipped: true});
        }
    }
    
    render () {
        return (
            <picture className= { (this.state.flipped === true ? 'memory-card clicked' : 'memory-card') } onClick={this.chooseCard}>
                <div className= { 'memory-card-inner' }>
                    <div className= { 'memory-card-front' }>
                        {this.props.id}
                    </div>
                    <div className= { 'memory-card-back' }>
                        <div>{this.props.value}</div>
                    </div>
                </div>
            </picture>
        )
    }
}

export default MemoryCard;


// // Example
// function ChooseCard(props) {
//     return (
//        <section className = "card-section">
//             <button className = "card-btn" value = "Card 1" onClick = { props.select }>Card 1</button>
//        </section>
//     )
// }