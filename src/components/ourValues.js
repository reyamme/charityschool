import React from "react"
// import { Link } from "gatsby"

const Values = class extends React.Component {
    render() {
        return (
            <div className="value-section">
                <h1>Our values</h1>
                <div className="value-contain">

                    {/* <div className="volunteer-img"></div>
                    <div className="volunteer-img"></div>
                    <div className="volunteer-img"></div>
                    <div className="volunteer-img"></div> */}
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <p>Supporting</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>


                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <p>Collaboration</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <p>Innovation</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>


                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <p>Humanity</p>
                            </div>
                            <div className="flip-card-back">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
};
export default Values;