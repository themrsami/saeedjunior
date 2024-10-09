import React from 'react';

const AboutSkills = () => {
  return (
    <section className="resume container">
      <div className="resume__skills s-heading">
        <div className="divider divider--left">
          <div className="divider__text mini-text">About</div>
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
                  Skills
                </span>
              </span>
            </h2>
          </div>

          <div className="s-heading__right">
            <div className="resume__subsection-content">
              <div className="grid grid-cols-1 md:grid-cols-2 mini-text justify-center items-center gap-8">
                {[
                  {
                    title: "DIGITAL DESIGNER",
                    items: ["Print Design", "Digital Design", "Branding & identity", "Ad Compaigns"]
                  },
                  {
                    title: "VIDEOGRAPHY",
                    items: ["Branded Video Compaigns", "Social Media Content", "Cinematography", "Lighting & Composition"]
                  },
                  {
                    title: "VIDEO CREATION",
                    items: ["Post-Production", "Color Grading", "Video Effects & Transitions", "Storyboarding"]
                  },
                  {
                    title: "3D ANIMATIONS",
                    items: ["Product Visualization", "Motion Graphics", "Unreal Engine", "Lighting & Rendering"]
                  }
                ].map(skill => (
                  <div className="resume__skill" key={skill.title}>
                    <h3 data-anim="from-bottom" className="resume__skill-title">
                      <span className="split-wrap line">
                        <span className="split-inner" style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate3d(0px, 0px, 0px)"
                        }}>
                          {skill.title}
                        </span>
                      </span>
                    </h3>
                    <div className="resume__skill-details">
                      <ul className="resume__skill-list">
                        {skill.items.map(item => (
                          <li className="resume__skill-item" data-anim="from-bottom" key={item} style={{ marginBottom: '0.2rem' }}>
                            <span className="split-wrap line">
                              <span className="split-inner" style={{
                                translate: "none",
                                rotate: "none",
                                scale: "none",
                                transform: "translate3d(0px, 0px, 0px)"
                              }}>
                                {item}
                              </span>
                            </span>
                          </li>
                        ))}
                      </ul>
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

export default AboutSkills;
