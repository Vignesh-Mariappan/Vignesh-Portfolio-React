const CertificateListItem = ({
  certificate: { certificateTitle, certificateProvider, certificateLink }
}) => {
  const aosClass = [
    "zoom-in",
    "zoom-in-down",
    "zoom-in-up",
    "zoom-out",
    "zoom-out-up",
    "zoom-out-down"
  ];

  return (
    <div
      className="certificate"
      data-aos={aosClass[Math.floor(Math.random() * 6)]}
    >
      <i className="fa-solid fa-trophy"></i>
      <div className="certificate-title">{certificateTitle}</div>
      <div className="certificate-provider">{certificateProvider}</div>
      {certificateLink && (
        <a className="certificate-link" href={certificateLink}>
          View Certificate
        </a>
      )}
    </div>
  );
};

export default CertificateListItem;
