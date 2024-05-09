import React from 'react'

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Skills</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">


                        <i className="devicon-ruby-plain colored"></i>

                        <div>
                            <h3 className="skills__name">Ruby</h3>

                        </div>
                    </div>

                    <div className="skills__data">

                        <i className="devicon-spring-plain colored"></i>


                        <div>
                            <h3 className="skills__name">Springboot</h3>

                        </div>
                    </div>

                    <div className="skills__data">

                        <i className="devicon-java-plain colored"></i>


                        <div>
                            <h3 className="skills__name">Java</h3>

                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">

                        <i className="devicon-nodejs-plain colored"></i>


                        <div>
                            <h3 className="skills__name">Node</h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend