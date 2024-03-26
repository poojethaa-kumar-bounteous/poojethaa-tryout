export default async function decorate(block) {
  const hero = document.createElement('div');
  hero.innerHTML = `<h1>Heading1</h1>`
  hero.innerHTML = `<p>Description details</p>`
  hero.innerHTML = `<button type="button">Click here
    </button>`
  block.append(hero)
}
