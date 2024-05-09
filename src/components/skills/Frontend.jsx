import React from 'react'

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Skills</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">

                        <i className="devicon-tailwindcss-plain colored"></i>


                        <div>
                            <h3 className="skills__name">TailWind</h3>
                        </div>
                    </div>

                    <div className="skills__data">

                        <i className="devicon-angularjs-plain colored"></i>

                        <div>
                            <h3 className="skills__name">Angular</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="devicon-javascript-plain colored"></i>

                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className="devicon-bootstrap-plain colored"></i>

                        <div>
                            <h3 className="skills__name">Bootstrap</h3>
                        </div>
                    </div>

                    <div className="skills__data">

                        <i className="devicon-storybook-plain colored"></i>


                        <div>
                            <h3 className="skills__name">Storybook</h3>
                        </div>
                    </div>

                    <div className="skills__data">

                        <i className="devicon-react-original colored"></i>


                        <div>
                            <h3 className="skills__name">React</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend