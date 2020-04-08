import React from 'react'
import ordination from '../images/ordination.svg'
import { Col, Row, Image } from 'react-bootstrap'


const Ordination = () => (
        <section className="ordinace" id="ordinace">
            
            <Row>
                <Col md={5}>
                    <Image src={ordination} alt="Ordinace" fluid />        
                </Col>
                <Col>
                    <h2>Ordinace</h2>
                    <p>Ordinace praktického lékaře poskytuje tyto služby:</p>

                    <ul>
                        <li>Léčba akutních a chronických onemocnění</li>
                        <li>Pravidelné preventivní prohlídky pro všechny věkové kategorie</li>
                        <li>Pravidelné očkování, očkování do zahraničí</li>
                        <li>Pracovně-lékařskou péči (smluvní zajištění podle Zákona č.373/2011Sb.)</li>
                        <li>Návštěvní službu v domácnosti</li>
                        <li>Telefonické a e-mailové konzultace, možnost objednání</li>
                        <li>Odběry krve a moči přímo v ordinaci, aplikace infuzní terapie</li>
                        <li>EKG vyšetření (elektrokardiogram)</li>
                        <li>Spirometrické vyšetření, měření saturace O2</li>
                        <li>POCT vyšetření v ordinaci CRP, INR, HBA1c, glykemie, FOB diagnostika</li>
                        <li>Dispenzarizace pacientů s diabetem 2. typu</li>
                        <li>24 hodinové monitorování krevního tlaku</li>
                        <li>Vyšetření cév dolních končetin přístrojem k diagnostice neprůchodnosti tepen</li>
                    </ul>
                </Col>
            </Row>
        </section>
)

export default Ordination