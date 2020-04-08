import React from 'react'
import Image from 'react-bootstrap/Image'
import g1 from '../images/gallery/g1.jpg'
import g2 from '../images/gallery/g2.jpg'
import g3 from '../images/gallery/g3.jpg'
import g4 from '../images/gallery/g4.jpg'
import g5 from '../images/gallery/g5.jpg'
import g6 from '../images/gallery/g6.jpg'

const Gallery = () => (
    <section className="galerie" id="galerie">
        <h2>Galerie</h2>

        <div className="row gallery">
            <div className="col-sm-6 col-lg-4">
                <Image src={g1} alt="" />
            </div>
            <div className="col-sm-6 col-lg-4">
                <Image src={g2} alt="" />
            </div>
            <div className="col-sm-6 col-lg-4">
                <Image src={g3} alt="" />
            </div>
            <div className="col-sm-6 col-lg-4">
                <Image src={g4} alt="" />
            </div>
            <div className="col-sm-6 col-lg-4">
                <Image src={g5} alt="" />
            </div>
            <div className="col-sm-6 col-lg-4">
                <Image src={g6} alt="" />
            </div>
        </div>


    </section>
)

export default Gallery