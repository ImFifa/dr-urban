import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import Image from 'react-bootstrap/Image'
import fuw from '../images/fuw.svg'

const Footer = () => (
    <footer>
        <div className="row">
            <div className="col-md-4">
                <h4>Navigace</h4>
                <div className="list-group">
                    <a href="#uvod" className="list-group-item list-group-item-action">Úvod</a>
                    <a href="#aktuality" className="list-group-item list-group-item-action">Aktuality</a>
                    <a href="#ordinace" className="list-group-item list-group-item-action">Ordinace</a>
                    <a href="#cenik" className="list-group-item list-group-item-action">Ceník</a>
                    <a href="#pojistovny" className="list-group-item list-group-item-action">Pojišťovny</a>
                    <a href="#galerie" className="list-group-item list-group-item-action">Galerie</a>
                    <a href="#kontakt" className="list-group-item list-group-item-action">Kontakt</a>
                </div>
            </div>
            <div className="col-md-4">
                <h4>Kde nás najdete</h4>
                <iframe title="Kde nás najdete" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d756.7202940040754!2d13.697920724870567!3d50.36108092138312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470a3b30d3a7823d%3A0x78fd71efeb491da2!2sJir%C3%A1skovo%20n%C3%A1m.%20496%2C%20439%2042%20Postoloprty!5e0!3m2!1scs!2scz!4v1585661295719!5m2!1scs!2scz" frameBorder="0" style={{border: `0`}} allowFullScreen="" aria-hidden="false"></iframe>
            </div>
            <div className="col-md-4">
                <h4>Kontakt</h4>
                <ul className="list-group">
                    <li className="list-group-item"><i className="fa fa-phone" aria-hidden="true"></i> +420 415 783 180</li>
                    <li className="list-group-item"><i className="fa fa-envelope" aria-hidden="true"></i> murban@mediclub.cz</li>
                    <li className="list-group-item"><i className="fa fa-map-pin" aria-hidden="true"></i> Jiráskovo nám. 496, 439 42 Postoloprty</li>
                </ul>
            </div>
        </div>

        <a href="https://filipurban.cz/"><Image src={fuw} alt="Urban Webdesign"/></a>
    </footer>
)

export default Footer