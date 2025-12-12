import ScriptsLoader from "@/components/ScriptsLoader";
import Image from "next/image";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Seth Lefberg",
      designation: "Founder & CEO",
      img: "/assets/photos/about/me4suit.jpg",
      // img: "/assets/images/team/team-1-1.jpg",
      delay: "000ms",
    },
    {
      id: 2,
      name: "Heather Durbin",
      designation: "Senior Case Manager",
      img: "/assets/images/team/team-1-2.png",
      delay: "100ms",
    },
    {
      id: 3,
      name: "Melissa Rosen",
      designation: "Expert Witness Recruiter",
      img: "/assets/images/team/team-1-3.jpg",
      delay: "200ms",
    },
    {
      id: 4,
      name: "Natalia Granados",
      designation: "Expert Witness Recruiter",
      img: "/assets/images/team/team-1-4.jpg",
      delay: "000ms",
    },
    {
      id: 5,
      name: "Haley Fuentes",
      designation: "Sr. Expert Witness Recruiter",
      img: "/assets/images/team/team-1-5.jpeg",
      delay: "100ms",
    },
    {
      id: 6,
      name: 'William "Topper" Cramer',
      designation: "Legal Nurse Consultant",
      img: "/assets/images/team/team-1-7.jpg",
      delay: "200ms",
    },
  ];

  const socialLinks = [
    { href: "https://facebook.com", icon: "icon-facebook", label: "Facebook" },
    {
      href: "https://pinterest.com",
      icon: "icon-pinterest",
      label: "Pinterest",
    },
    { href: "https://twitter.com", icon: "icon-twitter", label: "Twitter" },
    { href: "https://youtube.com", icon: "icon-youtube", label: "Youtube" },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="" style={{ background: "#0E222A" }}>
        <div
          className="hero-slide hero-about-slide"
          style={{
            backgroundImage: "url('assets/images/backgrounds/our-team-banner.png')",
            // backgroundImage: "url('assets/images/backgrounds/banner_team.jpg')",
          }}
        >
          <div className="main-slider-one__overlay-one-about-page"></div>
          <div className="content container home-content">
            <p style={{ marginTop: "80px" }} className="mb-2">
              OUR TEAM <span style={{ color: "#fb3640" }} className="fw-bold">
                HOMESTEAD EXPERTS
              </span>
            </p>
            <h1 className="">
              The Right Expert Witness <br /> Exactly When You Need Them.
            </h1>
            <div>
              <p style={{ marginBottom: "0px" }}>
                When your case depends on expert testimony, time and credibility
                matter most. Homestead
                <br className="d-none d-lg-inline" /> connects attorneys with
                qualified, trial-ready experts across every specialty, quickly
                and <br className="d-none d-lg-inline" /> without upfront cost.
              </p>
              <p style={{ marginTop: "10px", marginBottom: "20px" }}>
                Our experts strengthen your arguments, enhance your credibility,
                and help you achieve <br className="d-none d-lg-inline" />{" "}
                better results in court.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="team-one team-one-section"
        style={{ position: "relative", backgroundColor: "#0E222A" }}
      >
        <Image
          src="/assets/photos/our-team/homestead-site-assets-02.png"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "bottom",
            overflow: "hidden",
          }}
          alt="about-background"
        />
        <div className="container">
          <div className="row gutter-y-30">
            {teamMembers.map((member) => (
              <div className="col-lg-4 col-md-6" key={member.id}>
                <div
                  className="team-card wow fadeInUp"
                  data-wow-duration="1500ms"
                  data-wow-delay={member.delay}
                  style={{
                    height: "100%", // ensure full height usage
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    className="team-card__image bw-img-anim-left"
                    style={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="team-card__content">
                      <h3 className="team-card__title">
                        <a href="#">{member.name}</a>
                      </h3>
                      <p className="team-card__designation">
                        {member.designation}
                      </p>
                    </div>

                    {/* <div className="team-card__hover">
                      <span className="team-card__hover__btn">
                        <i className="icon-plus"></i>
                      </span>
                      <div className="team-card__hover__social">
                        {socialLinks.map((link, index) => (
                          <a href={link.href} key={index}>
                            <i className={link.icon}></i>
                            <span className="sr-only">{link.label}</span>
                          </a>
                        ))}
                      </div>
                    </div> */}

                    <img
                      src={member.img}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "425px", // fixed height for all images
                        objectFit: "cover", // crops to fit nicely
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ScriptsLoader />
    </>
  );
};

export default OurTeam;
