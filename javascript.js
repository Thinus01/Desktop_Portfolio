const hamburger = document.querySelector('.hamburger');
const hamBtn = document.querySelector('.ham_btn');
const transLines = document.querySelector('.trans_lines');
const clicked = document.querySelector('.clicked');
const btns = document.querySelectorAll('.btn');
const blurs = document.querySelector('.blurs');
const str = 'line_rotate';
const projectsSection = document.querySelector('#projects');
const body = document.querySelector('body');
const section = document.createElement('section');
body.appendChild(section);

section.innerHTML = `
<section id="list_portfolio">
<section class="container1">
<div class="portfolio_card">
    <img id="lsnapshot" src="images/SnapshootPortfolio(1).svg" alt="SnapshootPortfolio picture"></img>
    <img id="Msnapshoot_portfolio" src="images/SnapshootPortfolio(5).svg" alt="SnapshootPortfolio picture">
    <section id="rightblock">
        <h2 id="card_heading">Tonic</h2>
        <h2 id="Mcard_heading">Tonic</h2>
        <ul id="ul_desc">
            <li id="client">
                <h2 id="pcanopy">CANOPY</h2>
            </li>
            <li id="role">
                <img id="counter">
                <h3 id="pcareer">Back End Dev</h3>
            </li>
            <li id="year_label">
                <img id="counter">
                <h5 id="pcareer">2015</h5>
            </li>
        </ul>
        <div id="block_subtext">A daily selection of privateely personalized reads; no accounts or sign-ups
            required</div>
        <div id="Mblock_subtext">A daily selection of privateely personalized reads; no accounts or sign-ups
            required</div>
        <ul id="tags">
            <li id="tag1">
                <p id="thtml">html</p>
            </li>
            <li id="tag2">
                <p id="tcss">css</p>
            </li>
            <li id="tag3">
                <p id="tjavascript">javascript</p>
        </ul>
        <button class="SeeProjectController">
            <div class="normal_button">
                <p id="see_project">See Project</p>
            </div>
        </button>

    </section>
</div>
</section>
<section class="container2">
<div class="portfolio_card">
    <img id="rsnapshot" src="images/SnapshootPortfolio(2).svg" alt="SnapshootPortfolio picture"></img>
    <img id="Msnapshoot_portfolio" src="images/SnapshootPortfolio(6).svg" alt="SnapshootPortfolio picture">
    <section id="leftblock">
        <h2 id="card_heading">Tonic</h2>
        <h2 id="Mcard_heading">Multi-Post Stories</h2>
        <ul id="ul_desc">
            <li id="client">
                <h2 id="pcanopy">CANOPY</h2>
            </li>
            <li id="role">
                <img id="counter">
                <h3 id="pcareer">Back End Dev</h3>
            </li>
            <li id="year_label">
                <img id="counter">
                <h5 id="pcareer">2015</h5>
            </li>
        </ul>
        <div id="block_subtext">Experimental content feature that allows users to add to an existing story
            over the course of a day without spamming their frisnds</div>
        <div id="Mblock_subtext">A daily selection of privateely personalized reads; no accounts or sign-ups
            required</div>
        <ul id="tags">
            <li id="tag1">
                <p id="thtml">html</p>
            </li>
            <li id="tag2">
                <p id="tcss">css</p>
            </li>
            <li id="tag3">
                <p id="tjavascript">javascript</p>
        </ul>
        <button class="SeeProjectController">
            <div class="normal_button">
                <p id="see_project">See Project</p>
            </div>
            <ul class="trans_lines hidden">
                <li><img class="xline1" src="images/line.png" alt="line 1"></li>
                <li><img class="xline2" src="images/line.png" alt="line 1"></li>
                <li><img class="xline3" src="images/line.png" alt="line 1"></li>
            </ul>
        </button>
    </section>
</div>
</section>
<section class="container3">
<div class="portfolio_card">
    <img id="lsnapshot" src="images/SnapshootPortfolio(3).svg" alt="SnapshootPortfolio picture"></img>
    <img id="Msnapshoot_portfolio" src="images/SnapshootPortfolio(7).svg" alt="SnapshootPortfolio picture">
    <section id="rightblock">
        <h2 id="card_heading">Tonic</h2>
        <h2 id="Mcard_heading">Tonic</h2>
        <ul id="ul_desc">
            <li id="client">
                <h2 id="pcanopy">CANOPY</h2>
            </li>
            <li id="role">
                <img id="counter">
                <h3 id="pcareer">Back End Dev</h3>
            </li>
            <li id="year_label">
                <img id="counter">
                <h5 id="pcareer">2015</h5>
            </li>
        </ul>
        <div id="block_subtext">Exploring the future of media in Facebook's first Virtual Reality app; a
            place to dicover and enjoy 360 photos and videos on Gear VR.</div>
        <div id="Mblock_subtext">A daily selection of privateely personalized reads; no accounts or sign-ups
            required</div>
        <ul id="tags">
            <li id="tag1">
                <p id="thtml">html</p>
            </li>
            <li id="tag2">
                <p id="tcss">css</p>
            </li>
            <li id="tag3">
                <p id="tjavascript">javascript</p>
        </ul>
        <button class="SeeProjectController">
            <div class="normal_button">
                <p id="see_project">See Project</p>
            </div>
            <ul class="trans_lines hidden">
                <li><img class="xline1" src="images/line.png" alt="line 1"></li>
                <li><img class="xline2" src="images/line.png" alt="line 1"></li>
                <li><img class="xline3" src="images/line.png" alt="line 1"></li>
            </ul>
        </button>
    </section>
</div>
</section>
<section class="container4">
<div class="portfolio_card">
    <img id="rsnapshot" src="images/SnapshootPortfolio(4).svg" alt="SnapshootPortfolio picture"></img>
    <img id="Msnapshoot_portfolio" src="images/SnapshootPortfolio(8).svg" alt="SnapshootPortfolio picture">
    <section id="leftblock">
        <h2 id="card_heading">Tonic</h2>
        <h2 id="Mcard_heading">Multi-Post Stories</h2>
        <ul id="ul_desc">
            <li id="client">
                <h2 id="pcanopy">CANOPY</h2>
            </li>
            <li id="role">
                <img id="counter">
                <h3 id="pcareer">Back End Dev</h3>
            </li>
            <li id="year_label">
                <img id="counter">
                <h5 id="pcareer">2015</h5>
            </li>
        </ul>
        <div id="block_subtext">A smart assistant to make driving more safe, efficient, and fun by unlocking
            your most expensive computer: your car.</div>
        <div id="Mblock_subtext">A daily selection of privateely personalized reads; no accounts or sign-ups
            required</div>
        <ul id="tags">
            <li id="tag1">
                <p id="thtml">html</p>
            </li>
            <li id="tag2">
                <p id="tcss">css</p>
            </li>
            <li id="tag3">
                <p id="tjavascript">javascript</p>
        </ul>
        <button class="SeeProjectController">
            <div class="normal_button">
                <p id="see_project">See Project</p>
            </div>
            <ul class="trans_lines hidden">
                <li><img class="xline1" src="images/line.png" alt="line 1"></li>
                <li><img class="xline2" src="images/line.png" alt="line 1"></li>
                <li><img class="xline3" src="images/line.png" alt="line 1"></li>
            </ul>
        </button>
    </section>
</div>
<div class="area">
<div class="popup"></div>
</div>
</section>
</section>
`;

const open = document.querySelector('.SeeProjectController');
open.addEventListener('click', () => {
  const main = document.createElement('div');
  main.className = 'main';
  const popup = document.createElement('div');
  popup.className = 'popup';
  main.appendChild(popup);
  body.appendChild(main);
});

btns.forEach((btn) => {
  btn.addEventListener(('click'), () => {
    hamburger.classList.toggle('hidden');
    transLines.classList.toggle('hidden');
    clicked.classList.toggle('hidden');
    blurs.classList.toggle('hidden');
    for (let i = 1; i <= 3; i += 1) {
      transLines.classList.toggle(str + i.toString());
    }
  });
});

hamBtn.addEventListener(('click'), () => {
  hamburger.classList.toggle('hidden');
  transLines.classList.toggle('hidden');
  clicked.classList.toggle('hidden');
  blurs.classList.toggle('hidden');
  for (let i = 1; i <= 3; i += 1) {
    transLines.classList.toggle(str + i.toString());
  }
});

const projects = [
  {
    id: 'main-project-button',
    title: 'Tonic',
    image: 'images/SnapshootPortfolio(1).svg',
    description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ab odio dolorum temporibus adipisci, reiciendis itaque alias quae aut! Pariatur odit deleniti sint aperiam. Architecto quisquam harum quas maiores obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam obcaecati dolorum officiis, laboriosam id earum iste et sapiente culpa odio tempora alias, voluptates exercitationem, minus nemo molestias quis amet!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus omnis deleniti reiciendis praesentium ab odit eaque quam quidem nobis, veniam quia necessitatibus voluptate assumenda, et placeat ipsam similique accusantium. Est? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat tempore delectus commodi temporibus quia suscipit nobis atque, totam, quas recusandae illo laborum inventore explicabo similique pariatur deserunt doloribus. Explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatem aperiam architecto cum asperiores, quae iure quibusdam odio eius, ipsam repellendus ut tenetur ratione necessitatibus nemo, consequatur ex! Consectetur, nobis.',
    popul: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Ruby', 'Bootstrap'],
    live_link: 'https://thinus01.github.io/Desktop_Portfolio/',
    source_link: 'https://github.com/Thinus01/Desktop_Portfolio',
    ballul: ['CANOPY', 'images/Counter.svg', 'Back End Dev', 'images/Counter.svg', '2015'],
  },
  {
    id: 'main-project-button',
    title: 'Tonic',
    image: 'images/SnapshootPortfolio(2).svg',
    description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ab odio dolorum temporibus adipisci, reiciendis itaque alias quae aut! Pariatur odit deleniti sint aperiam. Architecto quisquam harum quas maiores obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam obcaecati dolorum officiis, laboriosam id earum iste et sapiente culpa odio tempora alias, voluptates exercitationem, minus nemo molestias quis amet!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus omnis deleniti reiciendis praesentium ab odit eaque quam quidem nobis, veniam quia necessitatibus voluptate assumenda, et placeat ipsam similique accusantium. Est? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat tempore delectus commodi temporibus quia suscipit nobis atque, totam, quas recusandae illo laborum inventore explicabo similique pariatur deserunt doloribus. Explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatem aperiam architecto cum asperiores, quae iure quibusdam odio eius, ipsam repellendus ut tenetur ratione necessitatibus nemo, consequatur ex! Consectetur, nobis.',
    popul: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Ruby', 'Bootstrap'],
    live_link: 'https://thinus01.github.io/Desktop_Portfolio/',
    source_link: 'https://github.com/Thinus01/Desktop_Portfolio',
    ballul: ['CANOPY', 'images/Counter.svg', 'Back End Dev', 'images/Counter.svg', '2015'],
  },
  {
    id: 'main-project-button',
    title: 'Tonic',
    image: 'images/SnapshootPortfolio(3).svg',
    description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ab odio dolorum temporibus adipisci, reiciendis itaque alias quae aut! Pariatur odit deleniti sint aperiam. Architecto quisquam harum quas maiores obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam obcaecati dolorum officiis, laboriosam id earum iste et sapiente culpa odio tempora alias, voluptates exercitationem, minus nemo molestias quis amet!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus omnis deleniti reiciendis praesentium ab odit eaque quam quidem nobis, veniam quia necessitatibus voluptate assumenda, et placeat ipsam similique accusantium. Est? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat tempore delectus commodi temporibus quia suscipit nobis atque, totam, quas recusandae illo laborum inventore explicabo similique pariatur deserunt doloribus. Explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatem aperiam architecto cum asperiores, quae iure quibusdam odio eius, ipsam repellendus ut tenetur ratione necessitatibus nemo, consequatur ex! Consectetur, nobis.',
    popul: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Ruby', 'Bootstrap'],
    live_link: 'https://thinus01.github.io/Desktop_Portfolio/',
    source_link: 'https://github.com/Thinus01/Desktop_Portfolio',
    ballul: ['CANOPY', 'images/Counter.svg', 'Back End Dev', 'images/Counter.svg', '2015'],
  },
  {
    id: 'main-project-button',
    title: 'Tonic',
    image: 'images/SnapshootPortfolio(4).svg',
    description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ab odio dolorum temporibus adipisci, reiciendis itaque alias quae aut! Pariatur odit deleniti sint aperiam. Architecto quisquam harum quas maiores obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam obcaecati dolorum officiis, laboriosam id earum iste et sapiente culpa odio tempora alias, voluptates exercitationem, minus nemo molestias quis amet!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus omnis deleniti reiciendis praesentium ab odit eaque quam quidem nobis, veniam quia necessitatibus voluptate assumenda, et placeat ipsam similique accusantium. Est? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et placeat tempore delectus commodi temporibus quia suscipit nobis atque, totam, quas recusandae illo laborum inventore explicabo similique pariatur deserunt doloribus. Explicabo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatem aperiam architecto cum asperiores, quae iure quibusdam odio eius, ipsam repellendus ut tenetur ratione necessitatibus nemo, consequatur ex! Consectetur, nobis.',
    popul: ['HTML', 'CSS', 'JavaScript', 'GitHub', 'Ruby', 'Bootstrap'],
    live_link: 'https://thinus01.github.io/Desktop_Portfolio/',
    source_link: 'https://github.com/Thinus01/Desktop_Portfolio',
    ballul: ['CANOPY', 'images/Counter.svg', 'Back End Dev', 'images/Counter.svg', '2015'],
  },
];

function createDiv(buttonId) {
  blurs.classList.remove('hidden');
  const div = document.createElement('div');
  const liveSiteBtn = document.createElement('button');
  const sourceBtn = document.createElement('button');
  const projectExitBtn = document.createElement('button');
  const projectsTitle = document.createElement('h1');
  const canopy = document.createElement('ul');
  canopy.innerHTML = `<li id="pcanopy">${projects[buttonId].ballul[0]}</li>
  <li id=spacer><image src=${projects[buttonId].ballul[1]}></li>
  <li id="pcareer">${projects[buttonId].ballul[2]}</li>
  <li id=spacer><img src=${projects[buttonId].ballul[3]}></li>
  <li id="pcareer">${projects[buttonId].ballul[4]}</li>`;
  const images = document.createElement('img');
  const paragraph = document.createElement('p');
  const projectsLanguages = document.createElement('ul');
  projectsTitle.innerText = `${projects[buttonId].title}`;
  projectsTitle.classList.toggle('poph1');
  images.src = `${projects[buttonId].image}`;
  images.classList.toggle('popupimg');
  paragraph.innerText = `${projects[buttonId].description}`;
  paragraph.classList.toggle('popup_paragraph');
  projectsLanguages.classList.toggle('popul');
  canopy.classList.toggle('ballul');

  if (window.innerWidth < 820) {
    projectsLanguages.innerHTML = `<li>${projects[buttonId].popul[0]}</li>
  <li>${projects[buttonId].popul[1]}</li>
  <li>${projects[buttonId].popul[2]}</li>`;
  } else {
    projectsLanguages.innerHTML = `<li>${projects[buttonId].popul[0]}</li>
  <li>${projects[buttonId].popul[1]}</li>
  <li>${projects[buttonId].popul[2]}</li>
  <li>${projects[buttonId].popul[3]}</li>
  <li>${projects[buttonId].popul[4]}</li>
  <li>${projects[buttonId].popul[5]}</li>`;
  }
  const Top = document.querySelector('.popup');
  if (buttonId === 0) {
    Top.style.top = '280px';
  } else if (buttonId === 1) {
    Top.style.top = '860px';
  } else if (buttonId === 2) {
    Top.style.top = '1380px';
  } else if (buttonId === 3) {
    Top.style.top = '1950px';
  }
  liveSiteBtn.textContent = 'See Live';
  liveSiteBtn.style.backgroundImage = "URL('images/SeeProject.svg')";
  liveSiteBtn.style.backgroundRepeat = 'no-repeat';
  liveSiteBtn.style.backgroundPosition = '105px 10px';
  liveSiteBtn.href = `${projects[buttonId].live_link}`;
  sourceBtn.textContent = 'See Source';
  sourceBtn.style.backgroundImage = "URL('images/GitHub.svg')";
  sourceBtn.style.backgroundRepeat = 'no-repeat';
  sourceBtn.style.backgroundPosition = '115px 10px';
  sourceBtn.href = `${projects[buttonId].source_link}`;
  liveSiteBtn.classList.add('popup_btn');
  sourceBtn.classList.add('popup_btn');
  projectExitBtn.style.backgroundImage = "URL('images/ClosePopup.svg')";
  projectExitBtn.style.backgroundRepeat = 'no-repeat';
  projectExitBtn.style.backgroundSize = 'cover';
  projectExitBtn.classList.add('popup-exit');
  div.classList.toggle('popup');

  if (window.innerWidth < 820) {
    projectExitBtn.style.backgroundImage = "URL('images/ClosePopup.svg')";
    projectExitBtn.style.backgroundRepeat = 'no-repeat';
    projectExitBtn.style.backgroundSize = 'cover';
    projectExitBtn.classList.add('popup-exit');
    div.classList.toggle('mobile-width');
    projectsTitle.classList.toggle('mobile-title');
    projectsLanguages.classList.toggle('mobile-languages');
    images.classList.toggle('popup-mobile-img');
    paragraph.classList.toggle('popup_mobile_p');
    sourceBtn.classList.toggle('mobile_btn');
    liveSiteBtn.classList.toggle('mobile_btn');
  }
  div.appendChild(projectsTitle);
  div.appendChild(canopy);
  div.appendChild(images);
  div.appendChild(paragraph);
  div.appendChild(projectsLanguages);
  div.appendChild(liveSiteBtn);
  div.appendChild(sourceBtn);
  div.appendChild(projectExitBtn);
  projectsSection.appendChild(div);
  projectExitBtn.addEventListener('click', () => {
    div.remove();
    document.body.style.background = '#fff';
    blurs.classList.add('hidden');
  });
}
const buttons = [...document.querySelectorAll('.SeeProjectController')];

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    createDiv(i);
  });
}
