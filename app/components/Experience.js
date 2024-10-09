import React from 'react';

const Experience = () => {
  return (
    <section className="resume container">
      <div className="resume__experience s-heading">
        <div className="divider divider--left">
          <div className="divider__text mini-text">Experience</div>
          <div
            className="divider__line divider__line--right"
            style={{
              translate: "none",
              rotate: "none",
              scale: "none",
              transform: "translate3d(0px, 0px, 0px)"
            }}
          />
        </div>

        <div className="s-heading__inner">
          <div className="s-heading__left">
            <h2 data-anim="from-bottom">
              <span className="split-wrap word">
                <span className="split-inner" style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate3d(0px, 0px, 0px)"
                }}>
                  Work Experience
                </span>
              </span>
            </h2>
          </div>

          <div className="s-heading__right">
            <div className="resume__subsection-content">
              <div className="grid grid-cols-1 md:grid-cols-2 mini-text justify-center items-center gap-8">
                {[
                  {
                    position: "DIGITAL DESIGNER & CONTENT CREATOR",
                    company: "@Vicekeeper",
                    dateFrom: "Oct 2023",
                    dateTo: "Present"
                  },
                  {
                    position: "DESIGNER & CONTENT CREATOR",
                    company: "@CareZone (Dubai-Freelance)",
                    dateFrom: "Feb 2024",
                    dateTo: "Aug 2024"
                  },
                  {
                    position: "VIDEOGRAPHER",
                    company: "@Local Business (Pakistan)",
                    dateFrom: "2021",
                    dateTo: "2023"
                  },
                  {
                    position: "PHOTOGRAPHER & VIDEOGRAPHER",
                    company: "@Ravi Studios (Pakistan)",
                    dateFrom: "2018",
                    dateTo: "2019"
                  }
                ].map((experience, index) => (
                  <div className="resume__experience-item" key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <div
                      className="experience-circle"
                      style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: '#FB4566',
                        borderRadius: '50%',
                        marginRight: '0.5rem',
                      }}
                    />
                    <div style={{ flexGrow: 1 }}>
                      <h3 className="resume__experience-title" style={{ margin: 0, fontSize: '1.5rem', fontWeight: '600' }}>
                        <span className="split-wrap line">
                          <span className="split-inner" style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate3d(0px, 0px, 0px)"
                          }}>
                            {experience.position}
                          </span>
                        </span>
                      </h3>
                      <h4 className="resume__experience-company" style={{ margin: 0, fontSize: '1.2rem', fontWeight: '300' }}>
                        {experience.company}
                      </h4>
                      <div className="resume__experience-date" style={{ fontSize: '1rem', color: '#666' }}>
                        {experience.dateFrom} <span style={{ margin: '0 0.5rem' }}>→</span> {experience.dateTo}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
