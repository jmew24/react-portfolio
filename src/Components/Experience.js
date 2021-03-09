import React, { useMemo } from "react";

import { Experience } from "../Data/resume";

const ExperiencePage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const productionExperience = useMemo(
    () =>
      Experience.production.map((experience) => {
        return (
          <div
            key={`${experience.title
              .replace(" ", "-")
              .toLowerCase()}-${experience.when
              .replace(" ", "-")
              .toLowerCase()}`}
          >
            <h3 dangerouslySetInnerHTML={{ __html: experience.title }}></h3>
            <p className="info">
              <span
                dangerouslySetInnerHTML={{ __html: experience.subtitle }}
              ></span>
              <span>&bull;</span> <em className="date">{experience.when}</em>
            </p>
            <p dangerouslySetInnerHTML={{ __html: experience.description }}></p>
          </div>
        );
      }),
    []
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const codingExperience = useMemo(
    () =>
      Experience.coding.map((experience) => {
        return (
          <div
            key={`${experience.title
              .replace(" ", "-")
              .toLowerCase()}-${experience.when
              .replace(" ", "-")
              .toLowerCase()}`}
          >
            <h3 dangerouslySetInnerHTML={{ __html: experience.title }}></h3>
            <p className="info">
              <span
                dangerouslySetInnerHTML={{ __html: experience.subtitle }}
              ></span>
              <span>&bull;</span> <em className="date">{experience.when}</em>
            </p>

            <p dangerouslySetInnerHTML={{ __html: experience.description }}></p>
          </div>
        );
      }),
    []
  );

  return (
    <section className="experience" id="experience">
      <div className="row work">
        <div className="four columns header-col">
          <h1>
            <span>Production Experience</span>
          </h1>
        </div>

        <div className="eight columns main-col">
          <div className="row item">
            <br />
            <br />
            <div className="twelve columns">{productionExperience}</div>
          </div>
        </div>

        <div className="four columns header-col">
          <h1>
            <span>Programming Experience</span>
          </h1>
        </div>

        <div className="eight columns main-col">
          <div className="row item">
            <br />
            <br />
            <div className="twelve columns">{codingExperience}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePage;
