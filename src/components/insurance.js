import React from 'react'
import Image from 'react-bootstrap/Image'
import vzp from '../images/vzp.png'
import vozp from '../images/vozp.png'
import cpzp from '../images/cpzp.png'
import ozp from '../images/ozp.png'
import zpmvcr from '../images/zpmvcr.png'
import rbp213 from '../images/rbp213.jpg'

const Insurance = () => (
    <section className="pojistovny" id="pojistovny">
        <h2>Pojišťovny</h2>
        <p>Smluvní péče pro pacienty pojišťoven.</p>

        <div className="row m-auto">
            <div className="col-md-4">
                <a target="_blank" rel="noopener noreferrer" href="http://www.vzp.cz/">
                <Image src={vzp} alt="VZP logo" thumbnail className="p-3"/>
                    <h5>111 Všeobecná zdravotní pojišťovna</h5>
                </a>
            </div>
            <div className="col-md-4">
                <a target="_blank" rel="noopener noreferrer" href="http://www.vozp.cz/cs/">
                    <Image src={vozp} alt="VOZP logo" thumbnail className="p-3"/>
                    <h5>201 Vojenská zdravotní pojišťovna</h5>
                </a>
            </div>
            <div className="col-md-4">
                <a target="_blank" rel="noopener noreferrer" href="http://www.cpzp.cz/">
                    <Image src={cpzp} alt="CPZP logo" thumbnail className="p-3"/>
                    <h5>205 Česká průmyslová zdravotní pojišťovna</h5>
                </a>
            </div>
            <div className="col-md-4">
                <a target="_blank" rel="noopener noreferrer" href="http://www.ozp.cz/">
                    <Image src={ozp} alt="OZP logo" thumbnail className="p-3"/>
                    <h5>207 Oborová ZP zam. bank, pojišťoven a stavebnictví</h5>
                </a>
            </div>
            <div className="col-md-4">
                <a target="_blank" rel="noopener noreferrer" href="http://www.zpmvcr.cz/">
                    <Image src={zpmvcr} alt="ZPMVCR logo" thumbnail className="p-3"/>
                    <h5>211 Zdravotní pojišťovna ministerstva vnitra</h5>
                </a>
            </div>
            <div className="col-md-4">
                <a target="_blank" rel="noopener noreferrer" href="http://www.rbp-zp.cz/">
                    <Image src={rbp213} alt="RBP ZP logo" thumbnail className="p-3"/>
                    <h5>213 Revírní bratrská pokladna, zdravotní pojišťovna</h5>
                </a>
            </div>

        </div>
    </section>
)

export default Insurance