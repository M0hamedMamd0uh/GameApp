import { Details } from "./details.js";
import { Display } from "./ui.js";

export class Games {
  constructor() {
    this.getData();

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        $(".nav-link").removeClass("active");
        $(e.target).addClass("active");
        this.getData(e.target.innerHTML);
      });
    });
  }

  async getData(category = "mmorpg") {
    $(".loading").removeClass("d-none");
    $(".loading").addClass("d-flex");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "779cc37483msh6341a0ec7a8c0dfp1c6828jsn780d608f3da4",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let request = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    let response = await request.json();
    let display = new Display();

    display.displayGames(response);
    this.bodyClick();
    $(".loading").removeClass("d-flex");
    $(".loading").addClass("d-none");
  }

  bodyClick() {
    document.querySelectorAll(".box").forEach((box) => {
      $(box).click(function () {
        $(".games").addClass("d-none");
        $(".details").removeClass("d-none");
        $(".details").addClass("d-block");
        let gameID = $(this).attr("id");
        let details = new Details();
        let results = details.getDetails(gameID);

        let display = new Display();
        display.displayDetails(results);
      });
    });
  }
}
