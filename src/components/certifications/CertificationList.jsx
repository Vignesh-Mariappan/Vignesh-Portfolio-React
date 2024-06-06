import CertficationListItem from "./CertificationListItem";

const certifications = [
  {
    id: "certificate7",
    certificateTitle: "DSA",
    certificateProvider: "AlgoExpert",
    certificateLink:
      "https://certificate.algoexpert.io/AlgoExpert%20Certificate%20AE-6e10fbd1b2",
  },
  {
    id: "certificate1",
    certificateTitle: "Problem Solving (Basic)",
    certificateProvider: "HackerRank",
    certificateLink: "https://www.hackerrank.com/certificates/7e04926894f2",
  },
  {
    id: "certificate2",
    certificateTitle: "JavaScript (Basic)",
    certificateProvider: "HackerRank",
    certificateLink: "https://www.hackerrank.com/certificates/0cd45215faa4",
  },
  {
    id: "certificate3",
    certificateTitle: "JavaScript (Intermediate)",
    certificateProvider: "HackerRank",
    certificateLink: "https://www.hackerrank.com/certificates/24387bc19f09",
  },
  {
    id: "certificate4",
    certificateTitle: "React (Basic)",
    certificateProvider: "HackerRank",
    certificateLink: "https://www.hackerrank.com/certificates/c6c2e061cd71",
  },
  {
    id: "certificate5",
    certificateTitle: "Evangelist Award",
    certificateProvider: "Dassault Systemes",
  },
  {
    id: "certificate6",
    certificateTitle: "Pat on the back Award",
    certificateProvider: "Pragmatic Play",
  },
];

const CertificationsList = () => {
  return (
    <div className="certifications-container">
      {certifications.map((certificate) => (
        <CertficationListItem certificate={certificate} key={certificate.id} />
      ))}
    </div>
  );
};

export default CertificationsList;
