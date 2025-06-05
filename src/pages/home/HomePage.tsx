import React from 'react';
import { MainLayout } from '../../layouts';
import { FontDemo, ColorDemo, ColorShowcase, TailwindTest } from '../../components';

export const HomePage: React.FC = () => {
  return (
    <MainLayout>
      <div className="home-page">
        <section className="hero-section">
          <h1 className="netflix-heading">Unlimited movies, TV shows, and more</h1>
          <p className="netflix-light">Watch anywhere. Cancel anytime.</p>
          <button className="cta-button">Get Started</button>
        </section>

        <section className="featured-content">
          <h2 className="netflix-title">Trending Now</h2>
          {/* Movie list component will go here */}
        </section>

        <section className="categories">
          <h2 className="netflix-title">Browse by Category</h2>
          {/* Category list component will go here */}
        </section>        {/* Color Demo Section */}
        <section>
          <ColorDemo />
        </section>        {/* Color Showcase Section */}
        <section>
          <ColorShowcase />
        </section>

        {/* TailwindCSS Test Section */}
        <section>
          <TailwindTest />
        </section>

        {/* Font Demo Section */}
        <section>
          <FontDemo />        </section>
      </div>
    </MainLayout>
  );
};
