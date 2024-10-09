import React from 'react';

const Toolbox = () => {
  return (
    <section className="resume container">
      <div className="resume__skills s-heading">
        <div className="divider divider--left">
          <div className="divider__text mini-text">Skills</div>
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
                  Toolbox
                </span>
              </span>
            </h2>
          </div>

          <div className="s-heading__right">
            <div className="resume__subsection-content">
              <div className="grid grid-cols-1 md:grid-cols-2 mini-text justify-center items-center gap-8">
                {[
                  "Illustrator",
                  "Photoshop",
                  "Premier Pro",
                  "After Effects",
                  "Videography",
                  "Post Production",
                  "Unreal Engine",
                  "Blender",
                  "Visual Effects",
                  "Color Grading",
                  "UI/UX Design",
                  "Product Rendering"
                ].map((skill, index) => (
                  <div className="resume__skill" key={index} style={{ display: 'flex', alignItems: 'center' }}>
                    <div
                      className="skill-circle"
                      style={{
                        width: '10px',
                        height: '10px',
                        backgroundColor: '#FB4566',
                        borderRadius: '50%',
                        marginRight: '0.5rem',
                      }}
                    />
                    <h3 data-anim="from-bottom" className="resume__skill-title" style={{ margin: 0 }}>
                      <span className="split-wrap line">
                        <span className="split-inner" style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate3d(0px, 0px, 0px)"
                        }}>
                          {skill}
                        </span>
                      </span>
                    </h3>
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

export default Toolbox;
