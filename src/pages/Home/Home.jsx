import React from 'react'
import Sectionone from '../../Main-Components/Section-one/Sectionone.component'
import Mainsection from '../../Main-Components/Mainsection/Mainsection'
import Certificatesection from '../../Main-Components/CertificateSection/Certificatesection'
import Lernskills from '../../Main-Components/LernLatestSkills/Lernskills'
const Home = () => {
    return (
        <div>
       
            <Sectionone />
            <Mainsection />
            <Certificatesection />
            <Lernskills />
        </div>
    )
}

export default Home