export default async function decorate(block) {
  const hero = document.createElement('div');
  const p = document.createElement('p');
  p.textContent = 'Description text for paragraph content';
  hero.appendChild(p);
  hero.innerHTML = `<button type="button" class="button">Click here
    </button>`;
  block.append(hero);
}
