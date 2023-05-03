import React from 'react';
import { render } from 'react-dom';
// import PropTypes from 'prop-types';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { AccountReportDoc } from './general-account-report';
import { IoMdDownload } from 'react-icons/io';


export default class PDFLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };

    this.generatePDF = this.generatePDF.bind(this);
    this.buildPDF = this.buildPDF.bind(this);
    this.createAndDownloadPDF = this.createAndDownloadPDF.bind(this);
  }

  createAndDownloadPDF(pdfContent, filename, divId, callback) {
    setTimeout(() => {
      const link = (
        <div id={divId}>
          <PDFDownloadLink document={pdfContent} fileName={filename}>
            {({ loading }) => {
              if (!loading) {
                setTimeout(() => {
                  document.getElementById(divId).children[0].click();
                  callback();
                }, 3);
              }
            }}
          </PDFDownloadLink>
        </div>
      );
      const elem = document.createElement('div');
      document.getElementById('root').appendChild(elem);
      render(link, elem);
      
    }, 50);
  }

  buildPDF() {
    if (!this.state.loading) {
      this.setState({ loading: true }, () => {
        this.createAndDownloadPDF(
          this.generatePDF(),
          `${this.props.name}.pdf`, 
            "pdf-creator-link",
          () => {
              this.setState({ loading: false })
              window.print()
          }
        );
      });
    }
  }

  generatePDF() {
    // CertificatePDF is a component that returns a PDF <Document />
    return <AccountReportDoc {...this.props} />;
  }
  render() {
    return this.state.loading ? (
      'Loading...'
    ) : (
      <button onClick={this.buildPDF} className={this.props.className} >
        <IoMdDownload style={{marginRight: 5}} />
        {this.props.downloadButtonText ? this.props.downloadButtonText : "Click here to download"}
      </button>
    );
  }
}

// PDFLink.propTypes = {
//   /* User name on the certificate */
//   name: PropTypes.string.isRequired,
//   /* Title of the course */
//   title: PropTypes.string.isRequired,
//   /* Date of completion */
//   date: PropTypes.string.isRequired,
//   /* Number of credits earned */
//   credits: PropTypes.string.isRequired
// };