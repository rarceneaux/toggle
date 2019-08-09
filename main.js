let teams = [
  {
    name:"Titans",
    img:"https://is4-ssl.mzstatic.com/image/thumb/Purple123/v4/63/2c/34/632c34a2-8e7d-dd78-f55c-6ed5abdee6d0/source/256x256bb.jpg",
    conference:"AFC",
    division:"South",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Texans",
    img:"https://pbs.twimg.com/profile_images/664402312996200448/5W2Lusba_400x400.jpg",
    conference:"AFC",
    division:"South",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Jaguars",
    img:"https://pbs.twimg.com/profile_images/664403706822197248/upeZoABV_400x400.png",
    conference:"AFC",
    division:"South",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Colts",
    img:"https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/bb/69/98/bb69980d-5056-db6a-8b2b-9288c6e68a5c/source/256x256bb.jpg",
    conference:"AFC",
    division:"South",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Chiefs",
    img:"https://pbs.twimg.com/profile_images/686564181294866432/rVDkZsSS_400x400.jpg",
    conference:"AFC",
    division:"West",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Chargers",
    img:"https://styles.redditmedia.com/t5_2rzkb/styles/communityIcon_yt3jycgvxti01.png",
    conference:"AFC",
    division:"West",
    madePlayoffsLastSeason:true,
  },
  {
    name:"Raiders",
    img:"https://res-4.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/kxnsdxxdhtwtpxvlcewy",
    conference:"AFC",
    division:"West",
    madePlayoffsLastSeason:false,
  },
  {
    name:"Broncos",
    img:"https://pbs.twimg.com/profile_images/736779046785290240/xhsCcyA-_400x400.jpg",
    conference:"AFC",
    division:"West",
    madePlayoffsLastSeason:false,
  }];

  const printToDom = (stringToPrint,divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
  };

  const addBtn = () => {
    let btn1 =`<button id="btn1" type="button" class="btn btn-primary">Primary</button>`;
  printToDom(btn1,'div1');
  };
addBtn();

const nflteams  = () => {
  let allTeams = "";
  teams.forEach((team) => {
  allTeams += `<div class="card" style="width: 18rem;">`;
  allTeams += `<img src="${team.img}" class="card-img-top">`;
  allTeams += `<div class="card-body">`;
  allTeams += `<h1 class="card-title text-center">${team.name}</h1>`;
  allTeams += `<p class="card-text text-center">${team.conference}</p>`;
  allTeams += `<p class="div text-center">${team.division} </p>`;
  allTeams += `</div>`;
  allTeams +=   `</div>`;
})
// makeBtns();
printToDom(allTeams,'cards');
};
nflteams();


const showHideDiv1 = () => {$("#cards").toggle()};

const btnEvents = () => {
  $("#btn1").on('click', showHideDiv1);
  // 
};
btnEvents();

// $("body").append("<h1>This is Jquery</h1>");