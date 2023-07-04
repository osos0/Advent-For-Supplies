import React from "react";

import Presales from "../img/Pre-sales.png";
import Aftersales from "../img/After-sales.png";
import AftersalesConsultancy from "../img/AftersalesConsultancy.png";
import SpareParts from "../img/SpareParts.jpg";
import UPS from "../img/UPS.jpg";
import DataCenter from "../img/DataCenter.png";
import AssessmentService from "../img/AssessmentService.png";
import SupportService from "../img/SupportService.jpg";

const Hardware = () => {
  return (
    <>
      <div className="container conOfHardware">
        <h3>HARDWARE SERVICES</h3>
        <p>
          ADVENT offers full range of appliances for every IT solution for the
          variable IT environments through our presales specialists to discover
          the existing factors in your IT environment, especially those factors
          which usually costs huge budget to deliver the most effective solution
          that meets your needs.
          <br />
          We are here to develop your business interest, and save your budget.
          ADVENT has established partnerships with almost 20+ leading global IT
          Vendors such as HP, Lenovo, Dell EMC, Cisco, Fortinet, Aruba, APC
          Schneider and more.
        </p>

        <div className="row ">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row ">
              <h3>Pre-sales Consultancy</h3>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <p>
                  <br /> Pre-sales Consultancy We study the customer’s scope of
                  work, design, size and provide a solution. br
                  <br /> <span> Standard Features:</span>
                  <br /> . Presentations
                  <br /> . Demos
                  <br /> . Offers
                  <br /> . Responding to RFI’s and RFP’s
                  <br /> <span> Optional Features:</span>
                  <br /> Standard Features:
                  <br />. Proof of concepts when applicable
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="conOfnetworkimg">
                  <img src={Presales} alt="mission" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row ">
              <h3>After-sales Support</h3>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <p>
                  <br />
                  We provide Controlled Delivery, Supply Chain, Pickup & Return
                  Services, and Insurance.
                  <br /> <span>Standard Features: </span>
                  <br />. On-Site Delivery
                  <br />. Supply Chain
                  <br />. Insurance
                  <br /> <span>Optional Features: </span>
                  <br />. Pickup and Return Services
                  <br />. Long Distance Delivery (Air freight/Sea freight)
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="conOfnetworkimg">
                  <img src={Aftersales} alt="mission" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row ">
              <h3>After-sales Consultancy</h3>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <p>
                  <br />
                  We deliver Warranty Services and Hardware support for
                  out-of-warranty cases. <br />. On-Site Delivery
                  <br /> <span>Standard Features:</span>
                  <br />. Trouble Shooting
                  <br />. Failure Diagnostics
                  <br />. Repair
                  <br />. Online Support
                  <br /> <span>Optional Features:</span>
                  <br />. Provide Spare Parts (for out of warranty cases)
                  <br />. Pickup and Return Services
                  <br />. Hardware Upgrade
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="conOfnetworkimg">
                  <img src={AftersalesConsultancy} alt="mission" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row ">
              <h3>Spare Parts</h3>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <p>
                  <br />
                  To fulfill the partnership with HP and Lenovo, we have
                  established a spare parts Logistic Unit that include a
                  professional team working to control our spare parts order and
                  stock for HP and Lenovo in addition to general spare parts.
                  <br />
                  ADVENT only use HP Certified Replacement Parts by using the HP
                  PartSurfer, and Original Genuine Lenovo Spare parts unsung SAP
                  warranty system
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="conOfnetworkimg">
                  <img src={SpareParts} alt="mission" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row ">
              <h3>UPS Installation and Repair Services</h3>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <p>
                  <br />
                  We analyze the IT infrastructure for the best power rating and
                  install uninterruptible Power Supplies with related Software
                  Alert Management.
                  <br /> <span>Standard Features: </span>
                  <br />. Infrastructure analysis
                  <br />. Grounding assurance
                  <br />. Hardware and Software installations
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="conOfnetworkimg">
                  <img src={UPS} alt="mission" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row ">
              <h3>Data Center Relocation Service</h3>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <p>
                  <br />
                  Whether you’re moving your IT equipment within the building or
                  around the world, a successful data center relocation or
                  consolidation requires careful planning and execution. ADVENT
                  technical and logistics experts can support you through this
                  complex process every step of the way. We will help you
                  anticipate and resolve unexpected challenges – big and small –
                  long before they become problems, and minimize downtime by
                  getting you back up and running as soon as possible.
                  <br /> <span>ADVENT Relocation Services includes: </span>
                  <br />. ADVENT Relocation Services includes:
                  <br />. Detailed site surveys and visits at all required
                  locations.
                  <br />. Complete preparation of all locations prior to the
                  move that includes packing, labeling, and sequencing for a
                  smooth and efficient relocation event.
                  <br />. Coordination and communication with outside vendors on
                  all aspects of transport, coverage, and support.
                  <br />. Relocation event best practices such as non-batched
                  packing and loading, climate controlled transportation, and
                  hardware spares to avoid any unexpected malfunctions during
                  installation and power-on.
                  <br />. Dedicated Curvature relocation team to provide a
                  consistent and pleasant experience throughout the process.
                  <br />. Relocation projects can be expanded to include any of
                  ADVENT managed and professional services such as system
                  administration support, hardware reconfigurations and
                  upgrades, and IT asset recovery.
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="conOfnetworkimg">
                  <img src={DataCenter} alt="mission" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row ">
              <h3>Data Center Assessment Service</h3>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <p>
                  <br />
                  ADVENT Technology Solutions provides you with an on-site
                  evaluation and analysis of your data center or network closet
                  with recommendations to maximize availability, improve energy
                  efficiency and reduce energy-related costs.
                  <br />{" "}
                  <span>Our data center assessment services offers: </span>
                  <br />. Discovery & Information Gathering
                  <br />. Infrastructure & Processes Analysis
                  <br />. Report Compilation – Findings & Recommendations
                  <br />. Presentation of Deliverables
                  <br /> <span>Our services features: </span>
                  <br />. Personnel and Support Issues
                  <br />- Server and Storage Infrastructure
                  <br />- Network Infrastructure
                  <br />- Power Infrastructure
                  <br />- Environmental Components
                  <br />- Physical & Network Security
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="conOfnetworkimg">
                  <img src={AssessmentService} alt="mission" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row ">
              <h3>Data Center Support Service</h3>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <p>
                  <br />
                  Data centers were not built to scale up and keep pace with the
                  rapid adoption of cloud, edge and high-performance computing
                  or address the pervasive risk landscape, therefore, ADVENT
                  Technology Solutions offers complete Data Center support for
                  your existing data center.
                  <br /> <span>- Our services includes: </span>
                  <br />
                  <span>Analyzing the current state:</span> we assess your asset
                  inventory, staffing levels and activities, and services
                  provided
                  <br />
                  <span>- Designing the future state:</span> we find a balance
                  between meeting your users’ needs and cutting costs
                  <br />
                  <span>- Establishing the migration path:</span> we use
                  industry benchmarks, operational standards and more to
                  determine optimal service provision
                </p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="conOfnetworkimg">
                  <img src={SupportService} alt="mission" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hardware;
