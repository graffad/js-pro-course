export function showLoading() {
  const preloader = document.getElementById('preloader');

  preloader.style.display = 'block';
}


export function createHistory(objData) {
  const history_ul = document.getElementById('history_ul');
  history_ul.innerHTML = '';


  for (let i = 0; i < Object.values(objData).length; i++) {
    history_ul.insertAdjacentHTML(
      'afterbegin', `
            <li class="createdLi">
                    <div class="col_li">
                        <p>${Object.values(objData)[i].location.name}</p>
                        <p>${Object.values(objData)[i].location.region}</p>
                    </div>
                    <div class="col_li">
                        <p>${Object.values(objData)[i].current.temperature} ℃</p>
                        <p>${Object.values(objData)[i].current.weather_descriptions[0]}</p>
                    </div>

                </li>
            `,
    );
  }
}
