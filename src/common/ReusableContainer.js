import { Link } from 'react-router-dom'
import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch'
const ReusableContainer = ({
  title,
  description,
  location,
  home,
  jobdetail,
  jobTitle,
  bottomItems,
  companydetail,
  companyProps,
  companyInfoData,
}) => {
  return (
    <section className="reusable-section">
      <div
        className={`${home ? 'reusable-section-home' : ''} ${
          jobdetail ? 'reusable-section-detail' : ''
        } `}
      >
        {home && (
          <>
            <h1 className="reusable-section-home-h1">{title}</h1>
            <p className="reusable-section-home-p">{description}</p>
          </>
        )}
        {jobdetail && (
          <>
            <div className="reusable-section-detail-top">
              {!companydetail && (
                <h2 className="reusable-section-detail-top-h2">
                  <Link to={`/company/${location?.companyName}`}>
                    {location.companyName} <LaunchIcon />
                  </Link>
                </h2>
              )}

              <h1 className="reusable-section-detail-top-h1">
                {!companydetail ? jobTitle : companyProps?.name}
              </h1>

              <div className="reusable-section-detail-top-div">
                {!companydetail ? (
                  <>
                    {location.icon}
                    <p className="reusable-section-detail-top-div-p">
                      {location.location?.join(', ')}
                    </p>
                  </>
                ) : (
                  companyInfoData.map((item, index) => (
                    <React.Fragment key={index}>
                      {item.icon}
                      <p className="reusable-section-detail-top-div-name">
                        {item.name}
                      </p>
                    </React.Fragment>
                  ))
                )}
              </div>
              {!companydetail && (
                <span className="reusable-section-detail-top-span">
                  {location.technologies?.join(', ')}
                </span>
              )}

              {companydetail && <p>{companyProps?.info}</p>}
            </div>
            {!companydetail && (
              <div className="reusable-section-detail-bottom">
                {bottomItems.map((item, index) => (
                  <div
                    key={index}
                    className="reusable-section-detail-bottom-item"
                  >
                    <div className="reusable-section-detail-bottom-item-top">
                      {item.icon}
                      <span>{item.spanText}</span>
                    </div>
                    <p>{item.pText}</p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default ReusableContainer
