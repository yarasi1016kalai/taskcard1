import React from 'react'

function Card(props) {
     

    return <>
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.toys.plan}</h5>
            <h6 className="card-price text-center">${props.toys.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.toys.UserEnabler?"":"text-muted"}>
                <span className="fa-li">
                  <i className={props.toys.UserEnabler?"fas fa-check":"fas fa-times"}></i>
                  </span>{props.toys.User}</li>
              <li className={props.toys.StorageEnabler?"":"text-muted"}>
                <span className="fa-li"><i className={props.toys.StorageEnabler?"fas fa-check":"fas fa-times"}></i>
                </span>{props.toys.Storage}</li>
              <li className={props.toys.publicprojectsEnabler?"":"text-muted"}>
                <span className="fa-li"><i className={props.toys.publicprojectsEnabler?"fas fa-check":"fas fa-times"}></i>
                </span>{props.toys.publicprojects}</li>
              <li className={props.toys.communityAccessEnabler?"":"text-muted"}>
                <span className="fa-li"><i className={props.toys.communityAccessEnabler?"fas fa-check":"fas fa-times"}></i>
                </span>{props.toys.communityAccess}</li>
              <li className={props.toys.privateProjectEnabler?"":"text-muted"}>
                <span className="fa-li"><i className={props.toys.privateProjectEnabler?"fas fa-check":"fas fa-times"}></i>
                </span>{props.toys.privateProject}</li>
              <li className={props.toys.phonesupportEnabler?"":"text-muted"}>
                <span className="fa-li"><i className={props.toys.phonesupportEnabler?"fas fa-check":"fas fa-times"}></i>
                </span>{props.toys.phonesupport}</li>
              <li className={props.toys.subDomainEnabler?"":"text-muted"}>
                <span className="fa-li"><i className={props.toys.subDomainEnabler?"fas fa-check":"fas fa-times"}></i>
                </span>{props.toys.subDomain}</li>
              <li className={props.toys.reportsEnabler?"":"text-muted"}>
                <span className="fa-li"><i className={props.toys.reportsEnabler?"fas fa-check":"fas fa-times"}></i>
                </span>{props.toys.reports}</li>
            </ul>
            <div className="d-grid">
              <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>

    </>
    
}

export default Card