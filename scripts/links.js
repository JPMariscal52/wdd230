const baseURL = "https://jpmariscal52.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  const ul = document.querySelector('main section.card ul');
  ul.innerHTML = '';

  weeks.weeks.forEach(week => {
    const weekItem = document.createElement('li');
    weekItem.textContent = week.week;
    ul.appendChild(weekItem);

    const linkList = document.createElement('ul');
    week.links.forEach(link => {
      const linkItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = `${baseURL}${link.url}`;
      anchor.textContent = link.title;
      anchor.classList.add('activity-link');
      linkItem.appendChild(anchor);
      linkList.appendChild(linkItem);
    });

    ul.appendChild(linkList);
  });
}

getLinks();

