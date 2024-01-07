const wrapper = document.querySelector(".tiles");

const createTile = index => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.onclick = e => handleOnClick(index);
    return tile;
}

const createTiles = quantity => {
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}

let side = 50;

let columns = Math.floor(document.body.clientWidth / side);
let rows = Math.floor(document.body.clientHeight / side);

const createGrid = () => {
    wrapper.innerHTML = "";

    columns = Math.floor(document.body.clientWidth / side);
    rows = Math.floor(document.body.clientHeight / side);

    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);

    console.log(columns, rows)
    createTiles(columns * rows);
}

createGrid();
window.onresize = () => createGrid();


// Anime
let count = 0;
const colors = [
    "rgb(229, 57, 53)",
    "rgb(253, 216, 53)",
    "rgb(253, 216, 53)"
]

let toggled = false;

const handleOnClick = index => {
    toggled = !toggled;
    count = count + 1;
    anime({
        targets: ".tile",
        opacity: toggled? 0: 1,
        // backgroundColor: colors[count % (colors.length - 1)],
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
          })
    })

    anime({
        targets: ".tile",
        backgroundColor: black,
        delay: anime.stagger(100, {
            grid: [columns, rows],
            from: 0
          })
    })
}

