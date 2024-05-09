import React from 'react'

const OtherSkills = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Outras Skills</h3>

            <div className="skills__box">
                <div className="skills__group">

                    <div className="skills__data">

                        <i class="devicon-apachekafka-plain colored"></i>


                        <div>
                            <h3 className="skills__name">Kafka</h3>
                        </div>
                    </div>

                    <div className="skills__data">

                        <svg  height="24px" width="24px" viewBox="0 0 128 128">
                            <path fill="#549dd0" d="M113.19 125.938h-7.16C106.03 68.293 58.464 21.396 0 21.396v-7.161c62.416 0 113.19 50.106 113.19 111.703Zm4.952-38.441c-8.598-36.151-37.898-66.362-74.623-76.903l1.647-5.735c38.763 11.133 69.702 43.027 78.778 81.257Zm5.504-33.942c-8.854-19.309-23.944-36.146-42.48-47.411l2.482-4.082C102.992 13.819 118.74 31.399 128 51.556Zm0 0"></path>
                        </svg>

        
                        <div>
                            <h3 className="skills__name">Sonarqube</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="devicon-redhat-plain colored"></i>

                        <div>
                            <h3 className="skills__name">Red Hat Quay</h3>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class="devicon-linux-plain colored"></i>

                        <div>
                            <h3 className="skills__name">Linux</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="devicon-terraform-plain colored"></i>

                        <div>
                            <h3 className="skills__name">Terraform</h3>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class="devicon-redis-plain colored"></i>

                        <div>
                            <h3 className="skills__name">Redis</h3>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default OtherSkills