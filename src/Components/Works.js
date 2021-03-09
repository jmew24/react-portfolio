import React, { useMemo } from "react";
import ImageGallery from "react-image-gallery";

import { Works } from "../Data/resume";

const worksPage = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const productionProjects = useMemo(
    () =>
      Works.production.map((projects) => {
        const prefixUrl = "images/portfolio/gallery/production/";
        const images = projects.images.map((image) => {
          return image.file
            ? Object.assign(
                {},
                {
                  thumbnail: `${prefixUrl}${image.file}.png`,
                  original: `${prefixUrl}${image.file}.png`,
                  description: image.description ? image.description : "",
                }
              )
            : null;
        });
        return images.length > 0 ? (
          <div
            key={projects.title.replace(" ", "-").toLowerCase()}
            className="columns works-item"
            id={`works-production-${projects.title
              .replace(" ", "-")
              .toLowerCase()}`}
          >
            <ImageGallery items={images} />
          </div>
        ) : null;
      }),
    []
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const codingProjects = useMemo(
    () =>
      Works.coding.map((projects) => {
        const projectImage = `images/portfolio/coding/${projects.image}`;
        return (
          <div
            key={projects.title.replace(" ", "-").toLowerCase()}
            className="columns works-item"
            id={`works-coding-${projects.title
              .replace(" ", "-")
              .toLowerCase()}`}
          >
            <div className="item-wrap">
              <a
                rel="noreferrer"
                href={projects.url}
                title={projects.title}
                target="_blank"
              >
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="works-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.description}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
          </div>
        );
      }),
    []
  );

  return productionProjects.length > 0 || productionProjects.length > 0 ? (
    <section className="works" id="works">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div className="works-wrapper bgrid-quarters s-bgrid-thirds cf">
            {productionProjects}
          </div>

          <div className="works-wrapper bgrid-quarters s-bgrid-thirds cf">
            {codingProjects}
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default worksPage;
