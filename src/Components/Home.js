import React from 'react';
import GoldenRatio1 from './static/Images/goldenRatio.jpg';
import Kamil from './static/Images/Michael_Maestlin.jpg'
import GoldenMath from './static/Images/goldenMath.png'

class Home extends React.Component {

    render() {
        return (
            <div>
                <div className="header">
                    <h1 className="golden">THE GOLDEN RATIΦ</h1>
                    <br />
                    <hr />
                    <br />
                </div>
                <table>
                    <tr>
                        <td>
                            <div className="content">
                                <h2 className="golden">What is "The Golden Ratio" ?</h2>
                                <h4 class="body">
                                    Golden ratio (φ) is basically a number which is equal to 1.618033978...
                                    <br />
                                    We can say that the two numbers are in golden ratio when their
                                    <br />
                                    ratio is same as the ratio of sum the two larger quantities.
                                    <br />
                                    In terms of mathematics, let a and b be the two numbers. If they
                                    <br />
                                    are in golden ratio, then
                                    <br />
                                    a / b = (a + b) / a  =  φ
                                    <br />
                                    provided a > b.
                                </h4>
                            </div>
                        </td>
                        <td>
                            <div>
                                <img src={GoldenRatio1} className="goldenRatio"/>
                            </div>                            
                        </td>
                    </tr>
                    <br />
                    <tr>
                        <td>
                        <img src={Kamil} className="kmail"/>
                        </td>
                        <td>
                            <div className="content">
                                <h2 className="golden">Who discoverd The Golden Ratio(History)?</h2>
                                <h4 className="body">
                                    Michael Maestlin was the first to write a decimal approximation of the ratio
                                    <br />
                                    Even though Abu Kamil (c. 850–930) employed it in his geometric calculations
                                    <br />
                                    of pentagons and decagons; his writings influenced that
                                    <br />
                                    of Fibonacci (Leonardo of Pisa) (c. 1170–1250),
                                    <br />
                                    who used the ratio in related geometry problems,
                                    <br />
                                    though never connected it to the series of numbers
                                    <br />
                                    named after him.
                                </h4>
                            </div>
                        </td>
                    </tr>
                </table>
                <br />
                <hr />
                <br />
                <br />
                <h1 className="math">MATHEMATICS</h1>
                <div className="content">
                    <h2>Irrationality</h2>
                    <h3>The golden ratio is an irrational number.</h3>
                    <br />
                    <h2>Polynomial</h2>
                    <h3>The golden ratio is an algebic number and also has an algebric integer. One of the root of the minimal polynimoial is the conjugate of the golden ratio. The absolute value of this quantity (≈ 0.618) corresponds to the length ratio taken in reverse order (shorter segment length over longer segment length, b/a), and is sometimes referred to as the golden ratio conjugate or silver ratio. It is denoted here by the capital Phi (φ).</h3>
                    <br />
                    <h2>Geometry</h2>
                    <h3>The number φ turns up frequently in geometry. Particularly in figures associated with pentagonal symmetry. The length of a regular pentagon's diagonal is φ times its side. The vertices of a regular icosahedron are those of three mutually orthogonal golden rectangles.</h3>
                    <br />
                    <img src={GoldenMath}></img>
                    <br />
                </div>
                <hr />
            </div>
        );
    }

}

export default Home;