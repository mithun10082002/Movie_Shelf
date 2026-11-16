function About() {
  return (
    <main className="page-content about-page">
      <section className="page-heading">
        <div>
          <p className="eyebrow">A LITTLE ABOUT US</p>
          <h1>A simpler way to pick a movie.</h1>
          <p className="page-description">
            Movie Shelf helps you discover films and keep track of the ones you love.
          </p>
        </div>
      </section>

      <section className="about-card">
        <h2>What is Movie Shelf?</h2>
        <p>
          Movie Shelf is a small, easy-to-use movie collection. Search by movie
          title, release year, or genre, then save anything that catches your
          eye to your personal favorites list.
        </p>
        <h2>How it works</h2>
        <p>
          Browse the home page to see every movie in the collection. Use the
          heart button on a movie card to add or remove it from Favorites.
          Your saved list stays in this browser, even when you come back later.
        </p>
        <h2>About the developer</h2>
        <p>
          I build web applications and responsive user interfaces with React,
          JavaScript, HTML, and CSS. I enjoy creating clear, easy-to-use
          experiences, and built Movie Shelf to bring those skills to a simple
          way to browse films and save favorites.
        </p>
      </section>
    </main>
  );
}

export default About;
