// /* adding the extra content in hero component */
// export default async function decorate(block) {
//   const hero = document.createElement('div');
//   const p = document.createElement('p');
//   p.textContent = 'Description text for paragraph content';
//   hero.append(p);
//   hero.innerHTML = `<button type="button" class="button">Click here
//     </button>`;
//   block.append(hero);
// }

/**
 * decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  // load nav as fragment
  const navMeta = getMetadata('nav');
  const navPath = navMeta ? new URL(navMeta).pathname : '/nav';
  const fragment = await loadFragment(navPath);
}
