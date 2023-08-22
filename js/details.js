export class Details {
  constructor() {
    this.closeDetails();
  }

  async getDetails(gameID) {
    $(".loading").removeClass("d-none");
    $(".loading").addClass("d-flex");

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "779cc37483msh6341a0ec7a8c0dfp1c6828jsn780d608f3da4",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const response = await fetch(url, options);
    const result = await response.json();
    $(".loading").removeClass("d-flex");
    $(".loading").addClass("d-none");
    return result;
  }

  closeDetails() {
    $("#closeDetails").click(function () {
      $(".details").removeClass("d-block");
      $(".details").addClass("d-none");
      $(".games").removeClass("d-none");
      $(".games").addClass("d-block");
    });
  }
}
