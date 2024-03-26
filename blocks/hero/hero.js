export default async function decorate(block) {
  const hero = document.createElement('div');
  hero.innerHTML = `<h1>Heading1</h1>`
  hero.innerHTML = `<p>Description details</p>`
  hero.innerHTML = `<button type="button" aria-controls="nav" aria-label="Open navigation">
      <span class="nav-hamburger-icon"></span>
    </button>`
}
