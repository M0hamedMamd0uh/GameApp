export class Display {
  displayGames(allGame) {
    let temp = "";

    for (let i = 0; i < allGame.length; i++) {
      temp += `
            <div class="col-md-6 col-lg-4 col-xl-3">
              <div class="box" id="${allGame[i].id}">
                <img
                  src="${allGame[i].thumbnail}"
                  class="w-100"
                  alt=""
                />
                <div class="data">
                  <div>
                    <h6 class="m-0">${allGame[i].title}</h6>
                    <span>free</span>
                  </div>
                  <p>${allGame[i].short_description}</p>
                  <div class="game-footer">
                    <span>${allGame[i].genre}</span>
                    <span>${allGame[i].platform}</span>
                  </div>
                </div>
              </div>
            </div>`;
    }
    document.getElementById("show-games").innerHTML = temp;
  }

  async displayDetails(results) {
    let result = await results;
    let temp = `
    
          <div class="col-lg-4">
            <img
              src="${result.thumbnail}"
              class="w-100"
              alt=""
            />
          </div>
          <div class="col-lg-8 info">
            <h4 class="mb-4"><span>Title </span> <span class="fs-6 ">:</span> <span class="title">${result.title}</span></h4>
            <h6 class="mb-4"><span>Category </span> : <span class="category badge text-bg-success">${result.genre}</span></h6>
            <h6 class="mb-4"><span>Platform </span> : <span class="platform badge text-bg-success">${result.platform}</span></h6>
            <h6 class="mb-4"><span>Status </span> : <span class="status badge text-bg-success">${result.status}</span></h6>
            <p class="desc">
            ${result.description}
            </p>
            <button class="btn btn-outline-success"> <a href="${result.game_url}" target="_blank">Show Game</a> </button>
          </div>`;

    document.getElementById("details").innerHTML = temp;
  }
}
