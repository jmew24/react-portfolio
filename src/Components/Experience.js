import React, { useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import './styles/Experience.css';

import { experience as experienceData, gallery } from "../Data";
import { useOnScreen } from "../Hooks/useOnScreen";

const pageId = "experience";

const ExperienceRole = ({ role }) => (
  <div className="role">
    <span className="role-title">{role.title}</span>
    <span className="role-description">{role.description}</span>
  </div>
);

ExperienceRole.propTypes = {
  role: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  })
};

const ExperienceItem = ({ experience, category = 'production' }) => {
  const galleryLink =
    gallery?.categories?.production?.items?.find((o) => o.id === experience.id)?.images?.length > 0 ? (
      <span key={`experience-goto-${experience.id}`}>
        <a
          rel="noreferrer"
          className="smoothscroll"
          href={`#gallery-${category}-${experience.id}`}
          title={experience.displayTitle}
          onClick={(e) => {
            e.preventDefault();
            // Scroll to gallery section
            document.getElementById(`gallery-${category}-${experience.id}`)?.scrollIntoView({ behavior: 'smooth' });
            // Trigger lightbox open after a small delay to ensure scroll completes
            setTimeout(() => {
              window.dispatchEvent(new CustomEvent('id_change', {
                detail: { id: () => `${category}-${experience.id}` }
              }));
            }, 500);
          }}
        >
          [View {experience.displayTitle} Photos]
        </a>
      </span>
    ) : null;

  const companyLink = experience.companyUrl ? (
    <a
      rel="noopener noreferrer"
      href={experience.companyUrl}
      target="_blank"
      title={`${experience.displayTitle} Website`}
    >
      {experience.title}
    </a>
  ) : experience.title;

  return (
    <div
      key={`experience-${experience.id}`}
      id={`experience-${experience.id}`}
      className="experience-item"
    >
      <div className="experience-header">
        <h3>{companyLink}</h3>
        <p className="info">
          <span className="company">{experience.subtitle}</span>
          <span className="separator">&bull;</span>
          <span className="date">{experience.when}</span>
        </p>
      </div>

      <div className="experience-content">
        {experience.roles?.map((role, index) => (
          <div key={`${experience.id}-role-${index}`} className="role-item">
            <h4>
              {role.title}
              {role.when && <span className="role-date">{role.when}</span>}
            </h4>
            <p>{role.description}</p>
          </div>
        ))}
        {experience.description && (
          <div className="experience-description">
            <p>{experience.description}</p>
          </div>
        )}
        {experience.technologies && (
          <div className="technologies">
            <span className="technologies-title">Technologies Used:</span>
            <div className="tech-list">
              {experience.technologies.map((tech, index) => (
                <React.Fragment key={tech.name}>
                  <a
                    rel="noopener noreferrer"
                    href={tech.url}
                    target="_blank"
                    title={tech.name}
                  >
                    {tech.name}
                  </a>
                  {index < experience.technologies.length - 1 && ", "}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
        {galleryLink && (
          <div className="gallery-link">
            {galleryLink}
          </div>
        )}
      </div>
    </div>
  );
};

ExperienceItem.propTypes = {
  experience: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    displayTitle: PropTypes.string,
    subtitle: PropTypes.string,
    when: PropTypes.string,
    location: PropTypes.string,
    companyUrl: PropTypes.string,
    roles: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })),
    description: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
    })),
  }),
  category: PropTypes.string,
};

const ExperiencePage = ({ setHighlight }) => {
  const pageRef = useRef(null);
  const isPageOnScreen = useOnScreen(pageRef, 0.1);

  useEffect(() => {
    if (isPageOnScreen) {
      setHighlight(pageId);
    }
  }, [isPageOnScreen, setHighlight]);

  if (!experienceData?.categories?.production?.items?.length) return null;

  return (
    <section ref={pageRef} id={pageId} className="experience">
      <div className="row">
        <div className="four columns header-col">
          <h1><span>PRODUCTION EXPERIENCE</span></h1>
        </div>
        <div className="eight columns main-col">
          <div className="experience-content">
            {experienceData.categories.production.items.map((exp) => (
              <ExperienceItem
                key={exp.id}
                experience={exp}
                category={exp.category || 'production'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

ExperiencePage.propTypes = {
  setHighlight: PropTypes.func
};

export default ExperiencePage;
