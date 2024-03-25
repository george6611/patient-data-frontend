import React, { useEffect } from 'react';

const IntersectionObserverComponent = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <section className="hidden">
        <h1>Hi Mom</h1>
        <p>This is my website</p>
      </section>

      <section className="hidden">
        <h2>Buy my products</h2>
        <p>
          the things you own end up owning you. it's only after you lose
          everything that you're free to do anything
        </p>
      </section>

      <section className="hidden">
        <h2>It's really good</h2>
        <div className="logs">
          <div className="logo">
            <div className="log"></div>
          </div>
          <div className="logo">
            <div className="log"></div>
          </div>
          <div className="logo">
            <div className="log"></div>
          </div>
          <div className="logo">
            <div className="log"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntersectionObserverComponent;
