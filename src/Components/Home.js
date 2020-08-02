import React from 'react';
import GoldenRatio1 from './static/Images/goldenRatio.jpg';

class Home extends React.Component {

    render() {
        return (
            <div>
                <div className="header">
                    <h1 className="golden">THE GOLDEN RATIϕ</h1>
                </div>
                <table>
                    <tr>
                        <td>
                            <div className="content">
                                <h2 className="golden">What is "The Golden Ratio" ?</h2>
                                <h3 class="body">
                                    Golden ratio (ϕ) is basically a number which is equal to 1.618033978...
                                    <br />
                                    We can say that the two numbers are in golden ratio when their
                                    <br />
                                    ratio is same as the ratio of sum the two larger quantities.
                                    <br />
                                    In terms of mathematics, let a and b be the two numbers. If they
                                    <br />
                                    are in golden ratio, then
                                    <br />
                                    a / b = (a + b) / a  =  ϕ
                                    <br />
                                    provided a > b.
                                </h3>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src={GoldenRatio1} className="goldenRatio"/>
                            </div>                            
                        </td>
                    </tr>
                </table>
            </div>
        );
    }

}

export default Home;