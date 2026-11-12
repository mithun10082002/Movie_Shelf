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
        <h2>About the collection</h2>
        <p>
          Movie details are kept in a simple JSON file, making it easy to add
          titles or update information. The poster artwork is placeholder
          imagery and can be replaced with real movie posters at any time.
        </p>
      </section>
    </main>
  );
}

export default About;
