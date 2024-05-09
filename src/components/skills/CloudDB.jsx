import React from 'react'

const CloudDB = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Cloud & Database Skills</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">

                        <i class="devicon-googlecloud-plain"></i>


                        <div>
                            <h3 className="skills__name">Google Cloud</h3>
                        </div>
                    </div>


                    <div className="skills__data">

                        <i class="devicon-kubernetes-plain colored"></i>

                        <div>
                            <h3 className="skills__name">Kubernetes</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="devicon-amazonwebservices-plain-wordmark colored"></i>

                        <div>
                            <h3 className="skills__name">AWS</h3>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class="devicon-postgresql-plain colored"></i>

                        <div>
                            <h3 className="skills__name">PostgreSQL</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class="devicon-sqlite-plain colored"></i>

                        <div>
                            <h3 className="skills__name">SQLite</h3>
                        </div>
                    </div>
                    <div className="skills__data">
                        <i class="devicon-firebase-plain colored"></i>

                        <div>
                            <h3 className="skills__name">Firebase</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CloudDB