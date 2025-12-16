const Banner5CaseStudy = () => {
  return (
    <>
      <section className="portfolio-one" id="caseStudy">
        <div className="container">
          <div className="sec-title ">
            {/* <h3 className="sec-title__title bw-split-in-up text-white text-start"> */}
              <h2 className="sec-title__title bw-split-in-up font-Montserrat text-white text-start">
              Categories We Serve
              </h2>
            {/* </h3> */}
            <p className="about-one__content__text text-white mt-2">
              Specialized distribution expertise across diverse FMCG categories
            </p>
          </div>
        </div>

        <div className="container">
          <div className="portfolio-one__wrapper">

            <div className="portfolio-one__item">
              <img
                src="/assets/distributor-img/luxury-chocalate.jpg"
                // src="/assets/photos/home/areas_1_medical_malpractice.jpg"
                alt="procounsel"
              />
              <div className="portfolio-one__item__rm">
                <a href="#" className="pe-none" onClick={(e) => e.preventDefault()}>
                  <i className="icon-right-arrow-1-4"></i>
                </a>
              </div>
              <div className="portfolio-one__item__content">
                <h3 className="portfolio-one__item__title">
                  <a href="#" className="pe-none" onClick={(e) => e.preventDefault()}>Luxury Chocolates</a>
                </h3>
                <div className="portfolio-one__item__cat mt-2">
                  Premium Confectionery
                </div>
              </div>
            </div>

            <div className="portfolio-one__item">
              <img
                src="/assets/distributor-img/food-and-beverages.jpg"
                // src="/assets/photos/home/areas_2_product_liability.jpg"
                alt="procounsel"
              />
              <div className="portfolio-one__item__rm">
                <a href="#" className="pe-none" onClick={(e) => e.preventDefault()}>
                  <i className="icon-right-arrow-1-4"></i>
                </a>
              </div>
              <div className="portfolio-one__item__content">
                <h3 className="portfolio-one__item__title">
                  <a href="#" className="pe-none" onClick={(e) => e.preventDefault()}>Food and Beverages</a>
                </h3>
                <div className="portfolio-one__item__cat mt-2">
                  F&B Distribution
                </div>
              </div>
            </div>

            <div className="portfolio-one__item">
              <img
                src="/assets/distributor-img/body-care.jpg"
                // src="/assets/photos/home/areas_3_personal_injury.jpg"
                alt="procounsel"
              />
              <div className="portfolio-one__item__rm">
                <a href="#" className="pe-none" onClick={(e) => e.preventDefault()}>
                  <i className="icon-right-arrow-1-4"></i>
                </a>
              </div>
              <div className="portfolio-one__item__content">
                <h3 className="portfolio-one__item__title">
                  <a href="#" className="pe-none" onClick={(e) => e.preventDefault()}>Body Care</a>
                </h3>
                <div className="portfolio-one__item__cat mt-2">
                  Personal Care Products
                </div>
              </div>
            </div>

            <div className="portfolio-one__item active">
              <img
                src="/assets/distributor-img/office-stationery.jpg"
                // src="/assets/photos/home/areas_4_forensic.jpg"
                alt="procounsel"
              />
              <div className="portfolio-one__item__rm">
                <a href="#" className="pe-none" onClick={(e) => e.preventDefault()}>
                  <i className="icon-right-arrow-1-4"></i>
                </a>
              </div>
              <div className="portfolio-one__item__content">
                <h3 className="portfolio-one__item__title">
                  <a href="#" className="pe-none" onClick={(e) => e.preventDefault()}>Stationery</a>
                </h3>
                <div className="portfolio-one__item__cat mt-2">
                  Office & School Supplies
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Banner5CaseStudy;

// const Banner5CaseStudy = () => {
//   return (
//     <>
//       <section className="portfolio-one" id="caseStudy">
//         <div className="container">
//           <div className="sec-title ">
//             <h3 className="sec-title__title bw-split-in-up text-white text-start">
//              Categories We Serve
//             </h3>
//             <p className="about-one__content__text text-white mt-2">
//              Specialized distribution expertise across diverse FMCG categories
//             </p>
//           </div>
//         </div>
//         <div className="container">
//           <div className="portfolio-one__wrapper">
//             <div className="portfolio-one__item">
//               <img
//                 src="/assets/photos/home/areas_1_medical_malpractice.jpg"
//                 alt="procounsel"
//               />
//               <div className="portfolio-one__item__rm">
//                 <a href="/medical-malpractice/">
//                   <i className="icon-right-arrow-1-4"></i>
//                 </a>
//               </div>
//               <div className="portfolio-one__item__content">
//                 <h3 className="portfolio-one__item__title">
//                   <a href="/medical-malpractice/">Luxury Chocolates</a>
//                 </h3>
//                 <div className="portfolio-one__item__cat mt-2">
//                   Premium Confectionery
//                 </div>
//               </div>
//             </div>
//             <div className="portfolio-one__item">
//               <img
//                 src="/assets/photos/home/areas_2_product_liability.jpg"
//                 alt="procounsel"
//               />
//               <div className="portfolio-one__item__rm">
//                 <a href="/product-liability/">
//                   <i className="icon-right-arrow-1-4"></i>
//                 </a>
//               </div>
//               <div className="portfolio-one__item__content">
//                 <h3 className="portfolio-one__item__title">
//                   <a href="/product-liability/">Food and Beverages</a>
//                 </h3>
//                 <div className="portfolio-one__item__cat mt-2">
//                   F&B Distibution
//                 </div>
//               </div>
//             </div>
//             <div className="portfolio-one__item">
//               <img
//                 src="/assets/photos/home/areas_3_personal_injury.jpg"
//                 alt="procounsel"
//               />
//               <div className="portfolio-one__item__rm">
//                 <a href="/personal-injury/">
//                   <i className="icon-right-arrow-1-4"></i>
//                 </a>
//               </div>
//               <div className="portfolio-one__item__content">
//                 <h3 className="portfolio-one__item__title">
//                   <a href="/personal-injury/">Body Care</a>
//                 </h3>
//                 <div className="portfolio-one__item__cat mt-2">
//                    Personal Care Products
//                 </div>
//               </div>
//             </div>
//             <div className="portfolio-one__item active">
//               <img
//                 src="/assets/photos/home/areas_4_forensic.jpg"
//                 alt="procounsel"
//               />
//               <div className="portfolio-one__item__rm">
//                 <a href="/forensic/">
//                   <i className="icon-right-arrow-1-4"></i>
//                 </a>
//               </div>
//               <div className="portfolio-one__item__content">
//                 <h3 className="portfolio-one__item__title">
//                   <a href="/forensic/">Stationery</a>
//                 </h3>
//                 <div className="portfolio-one__item__cat mt-2">
//                   Office & School Supplies.
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Banner5CaseStudy;

// const Banner5CaseStudy = () => {
//   return (
//     <>
//       <section className="portfolio-one" id="caseStudy">
//         <div className="container">
//           <div className="sec-title ">
//             <h3 className="sec-title__title bw-split-in-up text-white text-start">
//               Experts In Every Specialty
//             </h3>
//             <p className="about-one__content__text text-white mt-2">
//               We connect attorneys with board-certified professionals and
//               industry-leading <br className="d-none d-lg-inline" /> specialists
//               in every field, from medicine and engineering to finance,
//               construction, <br className="d-none d-lg-inline" /> technology,
//               and more.
//             </p>
//           </div>
//         </div>
//         <div className="container">
//           <div className="portfolio-one__wrapper">
//             <div className="portfolio-one__item">
//               <img
//                 src="/assets/photos/home/areas_1_medical_malpractice.jpg"
//                 // src="/assets/images/portfolio/Medical-malpractice_02.jpg"
//                 alt="procounsel"
//               />
//               <div className="portfolio-one__item__rm">
//                 <a href="/medical-malpractice/">
//                   <i className="icon-right-arrow-1-4"></i>
//                 </a>
//               </div>
//               <div className="portfolio-one__item__content">
//                 <h3 className="portfolio-one__item__title">
//                   <a href="/medical-malpractice/">MEDICAL MALPRACTICE</a>
//                 </h3>
//                 <div className="portfolio-one__item__cat mt-2">
//                   Orthopedic / Obstetrics & Gynecology / Emergency Medicine
//                 </div>
//               </div>
//             </div>
//             <div className="portfolio-one__item">
//               <img
//                 src="/assets/photos/home/areas_2_product_liability.jpg"
//                 // src="/assets/images/portfolio/product-liability_04.jpg"
//                 alt="procounsel"
//               />
//               <div className="portfolio-one__item__rm">
//                 <a href="/product-liability/">
//                   <i className="icon-right-arrow-1-4"></i>
//                 </a>
//               </div>
//               <div className="portfolio-one__item__content">
//                 <h3 className="portfolio-one__item__title">
//                   <a href="/product-liability/">PRODUCT LIABILITY</a>
//                 </h3>
//                 <div className="portfolio-one__item__cat mt-2">
//                   Mechanical Engineering / Human Factors / Toxicology
//                 </div>
//               </div>
//             </div>
//             <div className="portfolio-one__item">
//               <img
//                 src="/assets/photos/home/areas_3_personal_injury.jpg"
//                 // src="/assets/images/portfolio/personal-injury_1.jpg"
//                 alt="procounsel"
//               />
//               <div className="portfolio-one__item__rm">
//                 <a href="/personal-injury/">
//                   <i className="icon-right-arrow-1-4"></i>
//                 </a>
//               </div>
//               <div className="portfolio-one__item__content">
//                 <h3 className="portfolio-one__item__title">
//                   <a href="/personal-injury/">PERSONAL INJURY</a>
//                 </h3>
//                 <div className="portfolio-one__item__cat mt-2">
//                   Accident Reconstruction / Orthopedic / Life Care Planning
//                 </div>
//               </div>
//             </div>
//             <div className="portfolio-one__item active">
//               <img
//                 src="/assets/photos/home/areas_4_forensic.jpg"
//                 // src="/assets/images/portfolio/forensic_03.jpg"
//                 alt="procounsel"
//               />
//               <div className="portfolio-one__item__rm">
//                 <a href="/forensic/">
//                   <i className="icon-right-arrow-1-4"></i>
//                 </a>
//               </div>
//               <div className="portfolio-one__item__content">
//                 <h3 className="portfolio-one__item__title">
//                   <a href="/forensic/">FORENSIC</a>
//                 </h3>
//                 <div className="portfolio-one__item__cat mt-2">
//                   Forensic Accounting / Digital Forensics / Forensic Engineering
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Banner5CaseStudy;