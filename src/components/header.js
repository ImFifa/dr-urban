import React from "react"
import Table from 'react-bootstrap/Table'

const Header = () => (
  <header id="uvod">
    <div className="heading">
    <h1>Praktický lékař pro dospělé</h1>
    <p>Jiráskovo nám. 496, 439 42 Postoloprty</p>
    </div>
    <div className="header-box">
      <div className="opening-hours">
        <h3>Ordinační hodiny</h3>
        <Table responsive>
          <tbody>
            <tr>
              <td>Pondělí</td>
              <td>7.00 - 12.00</td>
              <td>13.00 - 15.00</td>
            </tr>
            <tr>
              <td>Úterý</td>
              <td>7.00 - 12.00</td>
              <td></td>
            </tr>
            <tr>
              <td>Středa</td>
              <td>7.00 - 12.00</td>
              <td>13.00 - 15.00</td>
            </tr>
            <tr>
              <td>Čtvrtek</td>
              <td>7.00 - 12.00</td>
              <td>14.00 - 15.30 a dále dle tel. objednání do 18.00</td>
            </tr>
            <tr>
              <td>Pátek</td>
              <td>7.00 - 12.00</td>
              <td>13.00 - 14.00 pouze objednaní</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="contact">
        
        <h3>Kontaktní informace</h3>
        <a href="tel:+420 415 783 180"><i class="fa fa-phone" aria-hidden="true"></i> +420 415 783 180</a>
        <a href="mailto:murban@mediclub.cz"><i class="fa fa-envelope" aria-hidden="true"></i> murban@mediclub.cz</a>
      </div>
    </div>
  </header>
)

export default Header
