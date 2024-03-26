export default async function decorate(block) {
  
  const hero = document.createElement('div');
  
  const p = document.createElement('p');
  
  p.innerHTML = 'Some text that should be appended...';
  
  hero.appendChild(p);
  
  hero.innerHTML = `<button type="button">Click here
    </button>`;
  
  block.append(hero)
}
