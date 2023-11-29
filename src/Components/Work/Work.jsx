import "./Work.css";
import { Link } from "react-router-dom";
import { BsArrowUp } from "react-icons/bs";
const Work = () => {
  const images = [
    "https://live.staticflickr.com/65535/53236094128_ec7ddee8ea_h.jpg",
    "https://live.staticflickr.com/65535/53234933612_dfc237c714_h.jpg",
    "https://live.staticflickr.com/65535/53234933607_5be8288413_h.jpg",
    "https://live.staticflickr.com/65535/53234933577_72b0056aa7_h.jpg",
    "https://live.staticflickr.com/65535/53236290880_3a0570349e_h.jpg",
    "https://live.staticflickr.com/65535/53234933587_f9f7f56d32_h.jpg",
    "https://live.staticflickr.com/65535/53236290870_7a4bf275bf_h.jpg",
  ];
  const projectUrls = [
    "https://dreamhomes.netlify.app/",
    "https://calculatorzlaam.netlify.app/",
    "https://edittxt.netlify.app/",
    "https://tic-cros.netlify.app/",
    "https://todolist-07.netlify.app/",
    "https://myarticles.netlify.app/",
    "https://mytodo-1.netlify.app/",
  ];
  return (
    <section className="work">
      <div className="title">
        <h1 className="title_text">My Recent Work</h1>
      </div>
      <div className="card_controller">
        {images.map((image, index) => (
          <div className="card_image_controller" key={index}>
            <div className="card_image">
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
            {projectUrls.map((url, urlIndex) => {
              if (index === urlIndex) {
                return (
                  <div className="link_Arrow" key={urlIndex}>
                    <BsArrowUp className="Arrow" />
                    <Link className="link" to={url} target="_blank">
                      View Project
                    </Link>
                  </div>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
