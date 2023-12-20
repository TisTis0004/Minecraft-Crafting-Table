const inv1 = document.querySelector(".inventory-1");
const inv2 = document.querySelector(".inventory-2");
const inv3 = document.querySelector(".inventory-3");
const inv4 = document.querySelector(".inventory-4");
const inv5 = document.querySelector(".inventory-5");
const inv6 = document.querySelector(".inventory-6");
const inv7 = document.querySelector(".inventory-7");
const inv8 = document.querySelector(".inventory-8");
const inv9 = document.querySelector(".inventory-9");
const inv10 = document.querySelector(".inventory-10");
const inv11 = document.querySelector(".inventory-11");
const inv12 = document.querySelector(".inventory-12");
const inv13 = document.querySelector(".inventory-13");
const inv14 = document.querySelector(".inventory-14");
const inv15 = document.querySelector(".inventory-15");
const inv16 = document.querySelector(".inventory-16");
const inv17 = document.querySelector(".inventory-17");
const inv18 = document.querySelector(".inventory-18");
const inv19 = document.querySelector(".inventory-19");
const inv20 = document.querySelector(".inventory-20");
const inv21 = document.querySelector(".inventory-21");
const inv22 = document.querySelector(".inventory-22");
const inv23 = document.querySelector(".inventory-23");
const inv24 = document.querySelector(".inventory-24");
const inv25 = document.querySelector(".inventory-25");
const inv26 = document.querySelector(".inventory-26");
const inv27 = document.querySelector(".inventory-27");
const tool1 = document.querySelector(".tool1");
const tool2 = document.querySelector(".tool2");
const tool3 = document.querySelector(".tool3");
const tool4 = document.querySelector(".tool4");
const tool5 = document.querySelector(".tool5");
const tool6 = document.querySelector(".tool6");
const tool7 = document.querySelector(".tool7");
const tool8 = document.querySelector(".tool8");
const tool9 = document.querySelector(".tool9");
const inventoryCell = [
  inv1,
  inv2,
  inv3,
  inv4,
  inv5,
  inv6,
  inv7,
  inv8,
  inv9,
  inv10,
  inv11,
  inv12,
  inv13,
  inv14,
  inv15,
  inv16,
  inv17,
  inv18,
  inv19,
  inv20,
  inv21,
  inv22,
  inv23,
  inv24,
  inv25,
  inv26,
  inv27,
  tool1,
  tool2,
  tool3,
  tool4,
  tool5,
  tool6,
  tool7,
  tool8,
  tool9,
];

chooseItem(inv1, inv1.src);
chooseItem(inv2, inv2.src);
chooseItem(inv3, inv3.src);
chooseItem(inv4, inv4.src);
chooseItem(inv5, inv5.src);
chooseItem(inv6, inv6.src);
chooseItem(inv7, inv7.src);
chooseItem(inv8, inv8.src);
chooseItem(inv9, inv9.src);
chooseItem(inv10, inv10.src);

const box1 = document.querySelector(".box1");
const box2 = document.querySelector(".box2");
const box3 = document.querySelector(".box3");
const box4 = document.querySelector(".box4");
const box5 = document.querySelector(".box5");
const box6 = document.querySelector(".box6");
const box7 = document.querySelector(".box7");
const box8 = document.querySelector(".box8");
const box9 = document.querySelector(".box9");
const box10 = document.querySelector(".box10");

cursorDefault(box1);
cursorDefault(box2);
cursorDefault(box3);
cursorDefault(box4);
cursorDefault(box5);
cursorDefault(box6);
cursorDefault(box7);
cursorDefault(box8);
cursorDefault(box9);
cursorDefault(box10);

const main = document.querySelector(".main_container");
const result = document.querySelector(".result-img");
let currentUrl = "";
function cursorDefault(box) {
  box.onclick = () => {
    main.style.cursor = "default";
    currentUrl = "";
  };
}
function chooseItem(item, url) {
  if (!url.includes("0_Air"))
    item.onclick = () => {
      main.style.cursor = `url(${url}),pointer`;
      currentUrl = url;
      if (result.src === currentUrl) {
        result.src = "../assets/pics/0_Air.png";
        for (let x = 0; x < craftCell.length; x++)
          craftCell[x].src = "../assets/pics/0_Air.png";
      }
    };
}
function displayResult() {
  result.style.display = "block";
  chooseItem(result, result.src);
}
function changeResult(url) {
  result.src = url;
  displayResult();
  if (!result.src.includes("0_Air")) {
    for (let i = 0; i < inventoryCell.length; i++)
      if (inventoryCell[i].src.includes("0_Air") && currentUrl !== "") {
        inventoryCell[i].src = currentUrl;
        for (let x = 11; x < inventoryCell.length; x++) {
          if (inventoryCell[x].src === inventoryCell[x - 1].src)
            inventoryCell[x].src = "../assets/pics/0_Air.png";
        }
        break;
      }
  }
}

const craftCell = document.querySelectorAll(".craft-cell-img");
for (let i = 0; i < craftCell.length; i++) {
  craftCell[i].onclick = () => {
    if (currentUrl !== "") {
      craftCell[i].style.display = "block";
      craftCell[i].src = currentUrl;
    } else {
      craftCell[i].src = "../assets/pics/0_Air.png";
    }
    let items = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    for (let j = 0; j < craftCell.length; j++) {
      if (craftCell[j].src.includes("0_Air")) items[0]++;
      else if (craftCell[j].src.includes("17_Oak")) items[1]++;
      else if (craftCell[j].src.includes("4_Cobblestone")) items[2]++;
      else if (craftCell[j].src.includes("265_Iron")) items[3]++;
      else if (craftCell[j].src.includes("266_Gold")) items[4]++;
      else if (craftCell[j].src.includes("264_Diamond")) items[5]++;
      else if (craftCell[j].src.includes("331_Redstone")) items[6]++;
      else if (craftCell[j].src.includes("263_Coal")) items[7]++;
      else if (craftCell[j].src.includes("318_Flint")) items[8]++;
      else if (craftCell[j].src.includes("5_Oak")) items[9]++;
      else if (craftCell[j].src.includes("280_Stick")) items[10]++;
      else if (craftCell[j].src.includes("288_Feather")) items[11]++;
      else if (craftCell[j].src.includes("287_String")) items[12]++;
      else if (craftCell[j].src.includes("328_Minecart")) items[13]++;
      else if (craftCell[j].src.includes("54_Chest")) items[14]++;
      else if (craftCell[j].src.includes("35_White")) items[15]++;
      else if (craftCell[j].src.includes("42_Iron")) items[16]++;
      else if (craftCell[j].src.includes("61_Furnace")) items[17]++;

      //Changing the result cell
      result.src = "../assets/pics/0_Air.png";
      if (items[1] === 1 && items[0] === 8) {
        changeResult("../assets/pics/5_Oak Wood Plank.png");
      }
      //Furnace
      else if (items[2] === 8 && craftCell[4].src.includes("0_Air")) {
        changeResult("../assets/pics/61_Furnace.png");
      }
      //Iron Block
      else if (items[3] === 9) {
        changeResult("../assets/pics/42_Iron Block.png");
      }
      //Gold Block
      else if (items[4] === 9) {
        changeResult("../assets/pics/41_Gold Block.png");
      }
      //Diamond Block
      else if (items[5] === 9) {
        changeResult("../assets/pics/57_Diamond Block.png");
      }
      //Redstone Block
      else if (items[6] === 9) {
        changeResult("../assets/pics/152_Redstone Block.png");
      }
      //Block of Coal
      else if (items[7] === 9) {
        changeResult("../assets/pics/173_Block of Coal.png");
      }
      //Flint and Steel
      else if (items[8] === 1 && items[3] === 1 && items[0] === 7) {
        changeResult("../assets/pics/259_Flint and Steel.png");
      }
      //Chest
      else if (
        items[0] === 1 &&
        items[9] === 8 &&
        craftCell[4].src.includes("0_Air")
      ) {
        changeResult("../assets/pics/54_Chest.png");
      }
      //Compass
      else if (
        craftCell[1].src.includes("265") &&
        craftCell[3].src.includes("265") &&
        craftCell[5].src.includes("265") &&
        craftCell[7].src.includes("265") &&
        craftCell[4].src.includes("331") &&
        items[0] === 4
      ) {
        changeResult("../assets/pics/345_Compass.png");
      }
      //Clock
      else if (
        craftCell[1].src.includes("266") &&
        craftCell[3].src.includes("266") &&
        craftCell[5].src.includes("266") &&
        craftCell[7].src.includes("266") &&
        craftCell[4].src.includes("331") &&
        items[0] === 4
      ) {
        changeResult("../assets/pics/347_Clock.png");
      }
      //Stick
      else if (
        items[9] === 2 &&
        items[0] === 7 &&
        ((craftCell[0].src.includes("5_Oak") &&
          craftCell[3].src.includes("5_Oak")) ||
          (craftCell[1].src.includes("5_Oak") &&
            craftCell[4].src.includes("5_Oak")) ||
          (craftCell[2].src.includes("5_Oak") &&
            craftCell[5].src.includes("5_Oak")) ||
          (craftCell[3].src.includes("5_Oak") &&
            craftCell[6].src.includes("5_Oak")) ||
          (craftCell[4].src.includes("5_Oak") &&
            craftCell[7].src.includes("5_Oak")) ||
          (craftCell[5].src.includes("5_Oak") &&
            craftCell[8].src.includes("5_Oak")))
      ) {
        changeResult("../assets/pics/280_Stick.png");
      }
      //Torch
      else if (
        items[7] == 1 &&
        items[10] === 1 &&
        items[0] === 7 &&
        ((craftCell[0].src.includes("263_Coal") &&
          craftCell[3].src.includes("280_Stick")) ||
          (craftCell[1].src.includes("263_Coal") &&
            craftCell[4].src.includes("280_Stick")) ||
          (craftCell[2].src.includes("263_Coal") &&
            craftCell[5].src.includes("280_Stick")) ||
          (craftCell[3].src.includes("263_Coal") &&
            craftCell[6].src.includes("280_Stick")) ||
          (craftCell[4].src.includes("263_Coal") &&
            craftCell[7].src.includes("280_Stick")) ||
          (craftCell[5].src.includes("263_Coal") &&
            craftCell[8].src.includes("280_Stick")))
      ) {
        changeResult("../assets/pics/50_Torch.png");
      }
      //RedStone Torch
      else if (
        items[6] == 1 &&
        items[10] === 1 &&
        items[0] === 7 &&
        ((craftCell[0].src.includes("331_Redstone") &&
          craftCell[3].src.includes("280_Stick")) ||
          (craftCell[1].src.includes("331_Redstone") &&
            craftCell[4].src.includes("280_Stick")) ||
          (craftCell[2].src.includes("331_Redstone") &&
            craftCell[5].src.includes("280_Stick")) ||
          (craftCell[3].src.includes("331_Redstone") &&
            craftCell[6].src.includes("280_Stick")) ||
          (craftCell[4].src.includes("331_Redstone") &&
            craftCell[7].src.includes("280_Stick")) ||
          (craftCell[5].src.includes("331_Redstone") &&
            craftCell[8].src.includes("280_Stick")))
      ) {
        changeResult("../assets/pics/76_Redstone Torch on.png");
      }
      //Lever
      else if (
        items[2] == 1 &&
        items[10] === 1 &&
        items[0] === 7 &&
        ((craftCell[0].src.includes("280_Stick") &&
          craftCell[3].src.includes("4_Cobblestone")) ||
          (craftCell[1].src.includes("280_Stick") &&
            craftCell[4].src.includes("4_Cobblestone")) ||
          (craftCell[2].src.includes("280_Stick") &&
            craftCell[5].src.includes("4_Cobblestone")) ||
          (craftCell[3].src.includes("280_Stick") &&
            craftCell[6].src.includes("4_Cobblestone")) ||
          (craftCell[4].src.includes("280_Stick") &&
            craftCell[7].src.includes("4_Cobblestone")) ||
          (craftCell[5].src.includes("280_Stick") &&
            craftCell[8].src.includes("4_Cobblestone")))
      ) {
        changeResult("../assets/pics/69_Lever.png");
      }
      //Rails
      else if (
        items[0] === 2 &&
        items[3] === 6 &&
        items[10] === 1 &&
        craftCell[1].src.includes("0_Air") &&
        craftCell[7].src.includes("0_Air")
      ) {
        changeResult("../assets/pics/66_Rail.png");
      }
      //Activator Rails
      else if (
        items[0] === 0 &&
        items[3] === 6 &&
        items[10] === 2 &&
        craftCell[0].src.includes("265_Iron") &&
        craftCell[2].src.includes("265_Iron") &&
        craftCell[3].src.includes("265_Iron") &&
        craftCell[5].src.includes("265_Iron") &&
        craftCell[6].src.includes("265_Iron") &&
        craftCell[8].src.includes("265_Iron") &&
        craftCell[1].src.includes("280_Stick") &&
        craftCell[7].src.includes("280_Stick") &&
        craftCell[4].src.includes("76_Redstone")
      ) {
        changeResult("../assets/pics/157_Activator Rail.png");
      }
      //Ladders
      else if (
        items[0] === 2 &&
        items[10] === 7 &&
        craftCell[1].src.includes("0_Air") &&
        craftCell[7].src.includes("0_Air")
      ) {
        changeResult("../assets/pics/65_Ladder.png");
      }
      //Boat
      else if (
        items[0] === 4 &&
        items[9] === 5 &&
        ((craftCell[3].src.includes("5_Oak") &&
          craftCell[5].src.includes("5_Oak") &&
          craftCell[6].src.includes("5_Oak") &&
          craftCell[7].src.includes("5_Oak") &&
          craftCell[8].src.includes("5_Oak")) ||
          (craftCell[0].src.includes("5_Oak") &&
            craftCell[2].src.includes("5_Oak") &&
            craftCell[3].src.includes("5_Oak") &&
            craftCell[4].src.includes("5_Oak") &&
            craftCell[5].src.includes("5_Oak")))
      ) {
        changeResult("../assets/pics/333_Oak Boat.png");
      }
      //Minecart
      else if (
        items[0] === 4 &&
        items[3] === 5 &&
        ((craftCell[3].src.includes("265_Iron") &&
          craftCell[5].src.includes("265_Iron") &&
          craftCell[6].src.includes("265_Iron") &&
          craftCell[7].src.includes("265_Iron") &&
          craftCell[8].src.includes("265_Iron")) ||
          (craftCell[0].src.includes("265_Iron") &&
            craftCell[2].src.includes("265_Iron") &&
            craftCell[3].src.includes("265_Iron") &&
            craftCell[4].src.includes("265_Iron") &&
            craftCell[5].src.includes("265_Iron")))
      ) {
        changeResult("../assets/pics/328_Minecart.png");
      }
      //Minecart with Chest
      else if (items[0] === 7 && items[14] === 1 && items[13] === 1) {
        changeResult("../assets/pics/342_Minecart with Chest.png");
      }
      //Minecart with Furnace
      else if (items[0] === 7 && items[17] === 1 && items[13] === 1) {
        changeResult("../assets/pics/343_Minecart with Furnace.png");
      }
      //Wooden Door
      else if (
        items[0] === 3 &&
        items[9] === 6 &&
        ((craftCell[0].src.includes("0_Air") &&
          craftCell[3].src.includes("0_Air") &&
          craftCell[6].src.includes("0_Air")) ||
          (craftCell[2].src.includes("0_Air") &&
            craftCell[5].src.includes("0_Air") &&
            craftCell[8].src.includes("0_Air")))
      ) {
        changeResult("../assets/pics/324_Oak Door.png");
      }
      //Iron Door
      else if (
        items[0] === 3 &&
        items[3] === 6 &&
        ((craftCell[0].src.includes("0_Air") &&
          craftCell[3].src.includes("0_Air") &&
          craftCell[6].src.includes("0_Air")) ||
          (craftCell[2].src.includes("0_Air") &&
            craftCell[5].src.includes("0_Air") &&
            craftCell[8].src.includes("0_Air")))
      ) {
        changeResult("../assets/pics/330_Iron Door.png");
      }
      //Bucket
      else if (
        items[0] === 6 &&
        items[3] === 3 &&
        ((craftCell[0].src.includes("265_Iron") &&
          craftCell[4].src.includes("265_Iron") &&
          craftCell[2].src.includes("265_Iron")) ||
          (craftCell[3].src.includes("265_Iron") &&
            craftCell[7].src.includes("265_Iron") &&
            craftCell[5].src.includes("265_Iron")))
      ) {
        changeResult("../assets/pics/325_Bucket.png");
      }
      //Wool
      else if (
        items[0] === 5 &&
        items[12] === 4 &&
        ((craftCell[0].src.includes("287_String") &&
          craftCell[1].src.includes("287_String") &&
          craftCell[3].src.includes("287_String") &&
          craftCell[4].src.includes("287_String")) ||
          (craftCell[3].src.includes("287_String") &&
            craftCell[4].src.includes("287_String") &&
            craftCell[6].src.includes("287_String") &&
            craftCell[7].src.includes("287_String")) ||
          (craftCell[1].src.includes("287_String") &&
            craftCell[2].src.includes("287_String") &&
            craftCell[4].src.includes("287_String") &&
            craftCell[5].src.includes("287_String")) ||
          (craftCell[4].src.includes("287_String") &&
            craftCell[5].src.includes("287_String") &&
            craftCell[7].src.includes("287_String") &&
            craftCell[8].src.includes("287_String")))
      ) {
        changeResult("../assets/pics/35_White Wool.png");
      }
      //Bed
      else if (
        items[0] === 3 &&
        items[15] === 3 &&
        items[9] === 3 &&
        ((craftCell[3].src.includes("35_White") &&
          craftCell[4].src.includes("35_White") &&
          craftCell[5].src.includes("35_White") &&
          craftCell[6].src.includes("5_Oak") &&
          craftCell[7].src.includes("5_Oak") &&
          craftCell[8].src.includes("5_Oak")) ||
          (craftCell[0].src.includes("35_White") &&
            craftCell[1].src.includes("35_White") &&
            craftCell[2].src.includes("35_White") &&
            craftCell[3].src.includes("5_Oak") &&
            craftCell[4].src.includes("5_Oak") &&
            craftCell[5].src.includes("5_Oak")))
      ) {
        changeResult("../assets/pics/355_Bed.png");
      }
      //Piston
      else if (
        items[0] === 0 &&
        items[9] === 3 &&
        items[3] === 1 &&
        items[6] === 1 &&
        items[2] === 4 &&
        craftCell[0].src.includes("5_Oak") &&
        craftCell[1].src.includes("5_Oak") &&
        craftCell[2].src.includes("5_Oak") &&
        craftCell[3].src.includes("4_Cobblestone") &&
        craftCell[5].src.includes("4_Cobblestone") &&
        craftCell[6].src.includes("4_Cobblestone") &&
        craftCell[8].src.includes("4_Cobblestone") &&
        craftCell[4].src.includes("265_Iron") &&
        craftCell[7].src.includes("331_Redstone")
      ) {
        changeResult("../assets/pics/33_Piston.png");
      }
      //Anvil
      else if (
        items[0] === 2 &&
        items[16] === 3 &&
        items[3] === 4 &&
        craftCell[0].src.includes("42_Iron") &&
        craftCell[1].src.includes("42_Iron") &&
        craftCell[2].src.includes("42_Iron") &&
        craftCell[4].src.includes("265_Iron") &&
        craftCell[6].src.includes("265_Iron") &&
        craftCell[7].src.includes("265_Iron") &&
        craftCell[8].src.includes("265_Iron")
      ) {
        changeResult("../assets/pics/145_Anvil.png");
      }
      //BOW
      else if (
        items[0] === 3 &&
        items[10] === 3 &&
        ((craftCell[1].src.includes("280_Stick") &&
          craftCell[3].src.includes("280_Stick") &&
          craftCell[7].src.includes("280_Stick") &&
          craftCell[2].src.includes("287_String") &&
          craftCell[5].src.includes("287_String") &&
          craftCell[8].src.includes("287_String")) ||
          (craftCell[1].src.includes("280_Stick") &&
            craftCell[5].src.includes("280_Stick") &&
            craftCell[7].src.includes("280_Stick") &&
            craftCell[0].src.includes("287_String") &&
            craftCell[3].src.includes("287_String") &&
            craftCell[6].src.includes("287_String")))
      ) {
        changeResult("../assets/pics/261_Bow.png");
      }
      //Arrow
      else if (
        items[0] === 6 &&
        items[11] === 1 &&
        items[10] === 1 &&
        items[8] === 1 &&
        ((craftCell[0].src.includes("318_Flint") &&
          craftCell[3].src.includes("280_Stick") &&
          craftCell[6].src.includes("288_Feather")) ||
          (craftCell[1].src.includes("318_Flint") &&
            craftCell[4].src.includes("280_Stick") &&
            craftCell[7].src.includes("288_Feather")) ||
          (craftCell[2].src.includes("318_Flint") &&
            craftCell[5].src.includes("280_Stick") &&
            craftCell[8].src.includes("288_Feather")))
      ) {
        changeResult("../assets/pics/262_Arrow.png");
      }
      //Fishing Rod
      else if (
        items[0] === 4 &&
        items[10] === 3 &&
        items[12] === 2 &&
        ((craftCell[6].src.includes("280_Stick") &&
          craftCell[4].src.includes("280_Stick") &&
          craftCell[2].src.includes("280_Stick") &&
          craftCell[5].src.includes("287_String") &&
          craftCell[8].src.includes("287_String")) ||
          (craftCell[8].src.includes("280_Stick") &&
            craftCell[4].src.includes("280_Stick") &&
            craftCell[0].src.includes("280_Stick") &&
            craftCell[3].src.includes("287_String") &&
            craftCell[6].src.includes("287_String")))
      ) {
        changeResult("../assets/pics/346_Fishing Rod.png");
      }
      //Powered Rails
      else if (
        items[0] === 1 &&
        items[4] === 6 &&
        items[6] === 1 &&
        items[10] === 1 &&
        craftCell[1].src.includes("0_Air")
      ) {
        changeResult("../assets/pics/27_Powered Rail.png");
      }
      //Wooden Plate
      else if (
        items[0] === 7 &&
        items[9] === 2 &&
        ((craftCell[0].src.includes("5_Oak") &&
          craftCell[1].src.includes("5_Oak")) ||
          (craftCell[1].src.includes("5_Oak") &&
            craftCell[2].src.includes("5_Oak")) ||
          (craftCell[3].src.includes("5_Oak") &&
            craftCell[4].src.includes("5_Oak")) ||
          (craftCell[4].src.includes("5_Oak") &&
            craftCell[5].src.includes("5_Oak")) ||
          (craftCell[6].src.includes("5_Oak") &&
            craftCell[7].src.includes("5_Oak")) ||
          (craftCell[7].src.includes("5_Oak") &&
            craftCell[8].src.includes("5_Oak")))
      ) {
        changeResult("../assets/pics/72_Wooden Pressure Plate.png");
      }
      //Stone Plate
      else if (
        items[0] === 7 &&
        items[2] === 2 &&
        ((craftCell[0].src.includes("4_Cobblestone") &&
          craftCell[1].src.includes("4_Cobblestone")) ||
          (craftCell[1].src.includes("4_Cobblestone") &&
            craftCell[2].src.includes("4_Cobblestone")) ||
          (craftCell[3].src.includes("4_Cobblestone") &&
            craftCell[4].src.includes("4_Cobblestone")) ||
          (craftCell[4].src.includes("4_Cobblestone") &&
            craftCell[5].src.includes("4_Cobblestone")) ||
          (craftCell[6].src.includes("4_Cobblestone") &&
            craftCell[7].src.includes("4_Cobblestone")) ||
          (craftCell[7].src.includes("4_Cobblestone") &&
            craftCell[8].src.includes("4_Cobblestone")))
      ) {
        changeResult("../assets/pics/70_Stone Pressure Plate.png");
      }
      //Iron Plate
      else if (
        items[0] === 7 &&
        items[3] === 2 &&
        ((craftCell[0].src.includes("265_Iron") &&
          craftCell[1].src.includes("265_Iron")) ||
          (craftCell[1].src.includes("265_Iron") &&
            craftCell[2].src.includes("265_Iron")) ||
          (craftCell[3].src.includes("265_Iron") &&
            craftCell[4].src.includes("265_Iron")) ||
          (craftCell[4].src.includes("265_Iron") &&
            craftCell[5].src.includes("265_Iron")) ||
          (craftCell[6].src.includes("265_Iron") &&
            craftCell[7].src.includes("265_Iron")) ||
          (craftCell[7].src.includes("265_Iron") &&
            craftCell[8].src.includes("265_Iron")))
      ) {
        changeResult("../assets/pics/148_Weighted Pressure Plate heavy.png");
      }
      //Golden Plate
      else if (
        items[0] === 7 &&
        items[4] === 2 &&
        ((craftCell[0].src.includes("266_Gold") &&
          craftCell[1].src.includes("266_Gold")) ||
          (craftCell[1].src.includes("266_Gold") &&
            craftCell[2].src.includes("266_Gold")) ||
          (craftCell[3].src.includes("266_Gold") &&
            craftCell[4].src.includes("266_Gold")) ||
          (craftCell[4].src.includes("266_Gold") &&
            craftCell[5].src.includes("266_Gold")) ||
          (craftCell[6].src.includes("266_Gold") &&
            craftCell[7].src.includes("266_Gold")) ||
          (craftCell[7].src.includes("266_Gold") &&
            craftCell[8].src.includes("266_Gold")))
      ) {
        changeResult("../assets/pics/147_Weighted Pressure Plate light.png");
      }
      //Wooden Stairs
      else if (
        items[0] === 3 &&
        items[9] === 6 &&
        ((craftCell[1].src.includes("0_Air") &&
          craftCell[2].src.includes("0_Air") &&
          craftCell[5].src.includes("0_Air")) ||
          (craftCell[0].src.includes("0_Air") &&
            craftCell[1].src.includes("0_Air") &&
            craftCell[3].src.includes("0_Air")))
      ) {
        changeResult("../assets/pics/53_Oak Wood Stairs.png");
      }
      //Stone Stairs
      else if (
        items[0] === 3 &&
        items[2] === 6 &&
        ((craftCell[1].src.includes("0_Air") &&
          craftCell[2].src.includes("0_Air") &&
          craftCell[5].src.includes("0_Air")) ||
          (craftCell[0].src.includes("0_Air") &&
            craftCell[1].src.includes("0_Air") &&
            craftCell[3].src.includes("0_Air")))
      ) {
        changeResult("../assets/pics/67_Cobblestone Stairs.png");
      }
      //Diamond Sword
      else if (
        items[0] === 6 &&
        ((craftCell[0].src.includes("264_Diamond") &&
          craftCell[3].src.includes("264_Diamond") &&
          craftCell[6].src.includes("280_Stick")) ||
          (craftCell[1].src.includes("264_Diamond") &&
            craftCell[4].src.includes("264_Diamond") &&
            craftCell[7].src.includes("280_Stick")) ||
          (craftCell[2].src.includes("264_Diamond") &&
            craftCell[5].src.includes("264_Diamond") &&
            craftCell[8].src.includes("280_Stick")))
      ) {
        changeResult("../assets/pics/276_Diamond Sword.png");
      }
      //Crafting Table
      else if (
        items[0] === 5 &&
        items[9] === 4 &&
        ((craftCell[0].src.includes("5_Oak") &&
          craftCell[1].src.includes("5_Oak") &&
          craftCell[3].src.includes("5_Oak") &&
          craftCell[4].src.includes("5_Oak")) ||
          (craftCell[1].src.includes("5_Oak") &&
            craftCell[2].src.includes("5_Oak") &&
            craftCell[4].src.includes("5_Oak") &&
            craftCell[5].src.includes("5_Oak")) ||
          (craftCell[3].src.includes("5_Oak") &&
            craftCell[4].src.includes("5_Oak") &&
            craftCell[6].src.includes("5_Oak") &&
            craftCell[7].src.includes("5_Oak")) ||
          (craftCell[4].src.includes("5_Oak") &&
            craftCell[5].src.includes("5_Oak") &&
            craftCell[7].src.includes("5_Oak") &&
            craftCell[8].src.includes("5_Oak")))
      ) {
        changeResult("../assets/pics/58_Crafting Table.png");
      }
      //Hopper
      else if (
        items[0] === 3 &&
        items[3] === 5 &&
        craftCell[4].src.includes("54_Chest") &&
        craftCell[1].src.includes("0_Air") &&
        craftCell[6].src.includes("0_Air") &&
        craftCell[8].src.includes("0_Air")
      ) {
        changeResult("../assets/pics/154_Hopper.png");
      }
      //Gold Sword
      else if (
        items[0] === 6 &&
        ((craftCell[0].src.includes("266_Gold") &&
          craftCell[3].src.includes("266_Gold") &&
          craftCell[6].src.includes("280_Stick")) ||
          (craftCell[1].src.includes("266_Gold") &&
            craftCell[4].src.includes("266_Gold") &&
            craftCell[7].src.includes("280_Stick")) ||
          (craftCell[2].src.includes("266_Gold") &&
            craftCell[5].src.includes("266_Gold") &&
            craftCell[8].src.includes("280_Stick")))
      ) {
        changeResult("../assets/pics/283_Golden Sword.png");
      }
      //Iron Sword
      else if (
        items[0] === 6 &&
        ((craftCell[0].src.includes("265_Iron") &&
          craftCell[3].src.includes("265_Iron") &&
          craftCell[6].src.includes("280_Stick")) ||
          (craftCell[1].src.includes("265_Iron") &&
            craftCell[4].src.includes("265_Iron") &&
            craftCell[7].src.includes("280_Stick")) ||
          (craftCell[2].src.includes("265_Iron") &&
            craftCell[5].src.includes("265_Iron") &&
            craftCell[8].src.includes("280_Stick")))
      ) {
        changeResult("../assets/pics/267_Iron Sword.png");
      }
      //Stone Sword
      else if (
        items[0] === 6 &&
        ((craftCell[0].src.includes("4_Cobblestone") &&
          craftCell[3].src.includes("4_Cobblestone") &&
          craftCell[6].src.includes("280_Stick")) ||
          (craftCell[1].src.includes("4_Cobblestone") &&
            craftCell[4].src.includes("4_Cobblestone") &&
            craftCell[7].src.includes("280_Stick")) ||
          (craftCell[2].src.includes("4_Cobblestone") &&
            craftCell[5].src.includes("4_Cobblestone") &&
            craftCell[8].src.includes("280_Stick")))
      ) {
        changeResult("../assets/pics/272_Stone Sword.png");
      }
      //Wooden Sword
      else if (
        items[0] === 6 &&
        ((craftCell[0].src.includes("5_Oak") &&
          craftCell[3].src.includes("5_Oak") &&
          craftCell[6].src.includes("280_Stick")) ||
          (craftCell[1].src.includes("5_Oak") &&
            craftCell[4].src.includes("5_Oak") &&
            craftCell[7].src.includes("280_Stick")) ||
          (craftCell[2].src.includes("5_Oak") &&
            craftCell[5].src.includes("5_Oak") &&
            craftCell[8].src.includes("280_Stick")))
      ) {
        changeResult("../assets/pics/268_Wooden Sword.png");
      }
      //Diamond Shovel
      else if (
        items[0] === 6 &&
        items[10] === 2 &&
        items[5] === 1 &&
        ((craftCell[3].src.includes("280_Stick") &&
          craftCell[6].src.includes("280_Stick") &&
          craftCell[0].src.includes("264_Diamond")) ||
          (craftCell[4].src.includes("280_Stick") &&
            craftCell[7].src.includes("280_Stick") &&
            craftCell[1].src.includes("264_Diamond")) ||
          (craftCell[5].src.includes("280_Stick") &&
            craftCell[8].src.includes("280_Stick") &&
            craftCell[2].src.includes("264_Diamond")))
      ) {
        changeResult("../assets/pics/277_Diamond Shovel.png");
      }
      //Gold Shovel
      else if (
        items[0] === 6 &&
        items[10] === 2 &&
        items[4] === 1 &&
        ((craftCell[3].src.includes("280_Stick") &&
          craftCell[6].src.includes("280_Stick") &&
          craftCell[0].src.includes("266_Gold")) ||
          (craftCell[4].src.includes("280_Stick") &&
            craftCell[7].src.includes("280_Stick") &&
            craftCell[1].src.includes("266_Gold")) ||
          (craftCell[5].src.includes("280_Stick") &&
            craftCell[8].src.includes("280_Stick") &&
            craftCell[2].src.includes("266_Gold")))
      ) {
        changeResult("../assets/pics/284_Golden Shovel.png");
      }
      //Iron Shovel
      else if (
        items[0] === 6 &&
        items[10] === 2 &&
        items[3] === 1 &&
        ((craftCell[3].src.includes("280_Stick") &&
          craftCell[6].src.includes("280_Stick") &&
          craftCell[0].src.includes("265_Iron")) ||
          (craftCell[4].src.includes("280_Stick") &&
            craftCell[7].src.includes("280_Stick") &&
            craftCell[1].src.includes("265_Iron")) ||
          (craftCell[5].src.includes("280_Stick") &&
            craftCell[8].src.includes("280_Stick") &&
            craftCell[2].src.includes("265_Iron")))
      ) {
        changeResult("../assets/pics/256_Iron Shovel.png");
      }
      //Stone Shovel
      else if (
        items[0] === 6 &&
        items[10] === 2 &&
        items[2] === 1 &&
        ((craftCell[3].src.includes("280_Stick") &&
          craftCell[6].src.includes("280_Stick") &&
          craftCell[0].src.includes("4_Cobblestone")) ||
          (craftCell[4].src.includes("280_Stick") &&
            craftCell[7].src.includes("280_Stick") &&
            craftCell[1].src.includes("4_Cobblestone")) ||
          (craftCell[5].src.includes("280_Stick") &&
            craftCell[8].src.includes("280_Stick") &&
            craftCell[2].src.includes("4_Cobblestone")))
      ) {
        changeResult("../assets/pics/273_Stone Shovel.png");
      }
      //Wooden Shovel
      else if (
        items[0] === 6 &&
        items[10] === 2 &&
        items[9] === 1 &&
        ((craftCell[3].src.includes("280_Stick") &&
          craftCell[6].src.includes("280_Stick") &&
          craftCell[0].src.includes("5_Oak")) ||
          (craftCell[4].src.includes("280_Stick") &&
            craftCell[7].src.includes("280_Stick") &&
            craftCell[1].src.includes("5_Oak")) ||
          (craftCell[5].src.includes("280_Stick") &&
            craftCell[8].src.includes("280_Stick") &&
            craftCell[2].src.includes("5_Oak")))
      ) {
        changeResult("../assets/pics/269_Wooden Shovel.png");
      }
      //Diamond Pickaxe
      else if (
        items[0] === 4 &&
        items[10] === 2 &&
        items[5] === 3 &&
        craftCell[0].src.includes("264_Diamond") &&
        craftCell[1].src.includes("264_Diamond") &&
        craftCell[2].src.includes("264_Diamond") &&
        craftCell[4].src.includes("280_Stick") &&
        craftCell[7].src.includes("280_Stick")
      ) {
        changeResult("../assets/pics/278_Diamond Pickaxe.png");
      }
      //Gold Pickaxe
      else if (
        items[0] === 4 &&
        items[10] === 2 &&
        items[4] === 3 &&
        craftCell[0].src.includes("266_Gold") &&
        craftCell[1].src.includes("266_Gold") &&
        craftCell[2].src.includes("266_Gold") &&
        craftCell[4].src.includes("280_Stick") &&
        craftCell[7].src.includes("280_Stick")
      ) {
        changeResult("../assets/pics/285_Golden Pickaxe.png");
      }
      //Iron Pickaxe
      else if (
        items[0] === 4 &&
        items[10] === 2 &&
        items[3] === 3 &&
        craftCell[0].src.includes("265_Iron") &&
        craftCell[1].src.includes("265_Iron") &&
        craftCell[2].src.includes("265_Iron") &&
        craftCell[4].src.includes("280_Stick") &&
        craftCell[7].src.includes("280_Stick")
      ) {
        changeResult("../assets/pics/257_Iron Pickaxe.png");
      }
      //Stone Pickaxe
      else if (
        items[0] === 4 &&
        items[10] === 2 &&
        items[2] === 3 &&
        craftCell[0].src.includes("4_Cobblestone") &&
        craftCell[1].src.includes("4_Cobblestone") &&
        craftCell[2].src.includes("4_Cobblestone") &&
        craftCell[4].src.includes("280_Stick") &&
        craftCell[7].src.includes("280_Stick")
      ) {
        changeResult("../assets/pics/274_Stone Pickaxe.png");
      }
      //Wooden Pickaxe
      else if (
        items[0] === 4 &&
        items[10] === 2 &&
        items[9] === 3 &&
        craftCell[0].src.includes("5_Oak") &&
        craftCell[1].src.includes("5_Oak") &&
        craftCell[2].src.includes("5_Oak") &&
        craftCell[4].src.includes("280_Stick") &&
        craftCell[7].src.includes("280_Stick")
      ) {
        changeResult("../assets/pics/270_Wooden Pickaxe.png");
      }
      //Diamond Axe
      else if (
        items[0] === 4 &&
        items[10] === 2 &&
        items[5] === 3 &&
        ((craftCell[0].src.includes("264_Diamond") &&
          craftCell[1].src.includes("264_Diamond") &&
          craftCell[3].src.includes("264_Diamond")) ||
          (craftCell[1].src.includes("264_Diamond") &&
            craftCell[2].src.includes("264_Diamond") &&
            craftCell[5].src.includes("264_Diamond")) ||
          (craftCell[0].src.includes("264_Diamond") &&
            craftCell[1].src.includes("264_Diamond") &&
            craftCell[4].src.includes("264_Diamond")) ||
          (craftCell[2].src.includes("264_Diamond") &&
            craftCell[1].src.includes("264_Diamond") &&
            craftCell[4].src.includes("264_Diamond")))
      ) {
        changeResult("../assets/pics/279_Diamond Axe.png");
      }
      //Gold Axe
      else if (
        items[0] === 4 &&
        items[10] === 2 &&
        items[4] === 3 &&
        ((craftCell[0].src.includes("266_Gold") &&
          craftCell[1].src.includes("266_Gold") &&
          craftCell[3].src.includes("266_Gold")) ||
          (craftCell[1].src.includes("266_Gold") &&
            craftCell[2].src.includes("266_Gold") &&
            craftCell[5].src.includes("266_Gold")) ||
          (craftCell[0].src.includes("266_Gold") &&
            craftCell[1].src.includes("266_Gold") &&
            craftCell[4].src.includes("266_Gold")) ||
          (craftCell[2].src.includes("266_Gold") &&
            craftCell[1].src.includes("266_Gold") &&
            craftCell[4].src.includes("266_Gold")))
      ) {
        changeResult("../assets/pics/286_Golden Axe.png");
      }
      //Iron Axe
      else if (
        items[0] === 4 &&
        items[10] === 2 &&
        items[3] === 3 &&
        ((craftCell[0].src.includes("265_Iron") &&
          craftCell[1].src.includes("265_Iron") &&
          craftCell[3].src.includes("265_Iron")) ||
          (craftCell[1].src.includes("265_Iron") &&
            craftCell[2].src.includes("265_Iron") &&
            craftCell[5].src.includes("265_Iron")) ||
          (craftCell[0].src.includes("265_Iron") &&
            craftCell[1].src.includes("265_Iron") &&
            craftCell[4].src.includes("265_Iron")) ||
          (craftCell[2].src.includes("265_Iron") &&
            craftCell[1].src.includes("265_Iron") &&
            craftCell[4].src.includes("265_Iron")))
      ) {
        changeResult("../assets/pics/258_Iron Axe.png");
      }
      //Stone Axe
      else if (
        items[0] === 4 &&
        items[10] === 2 &&
        items[2] === 3 &&
        ((craftCell[0].src.includes("4_Cobblestone") &&
          craftCell[1].src.includes("4_Cobblestone") &&
          craftCell[3].src.includes("4_Cobblestone")) ||
          (craftCell[1].src.includes("4_Cobblestone") &&
            craftCell[2].src.includes("4_Cobblestone") &&
            craftCell[5].src.includes("4_Cobblestone")) ||
          (craftCell[0].src.includes("4_Cobblestone") &&
            craftCell[1].src.includes("4_Cobblestone") &&
            craftCell[4].src.includes("4_Cobblestone")) ||
          (craftCell[2].src.includes("4_Cobblestone") &&
            craftCell[1].src.includes("4_Cobblestone") &&
            craftCell[4].src.includes("4_Cobblestone")))
      ) {
        changeResult("../assets/pics/273_Stone Shovel.png");
      }
      //Wooden Axe
      else if (
        items[0] === 4 &&
        items[10] === 2 &&
        items[9] === 3 &&
        ((craftCell[0].src.includes("5_Oak") &&
          craftCell[1].src.includes("5_Oak") &&
          craftCell[3].src.includes("5_Oak")) ||
          (craftCell[1].src.includes("5_Oak") &&
            craftCell[2].src.includes("5_Oak") &&
            craftCell[5].src.includes("5_Oak")) ||
          (craftCell[0].src.includes("5_Oak") &&
            craftCell[1].src.includes("5_Oak") &&
            craftCell[4].src.includes("5_Oak")) ||
          (craftCell[2].src.includes("5_Oak") &&
            craftCell[1].src.includes("5_Oak") &&
            craftCell[4].src.includes("5_Oak")))
      ) {
        changeResult("../assets/pics/271_Wooden Axe.png");
      }
      //Diamond Hoe
      else if (
        items[0] === 5 &&
        items[10] === 2 &&
        items[5] === 2 &&
        ((craftCell[0].src.includes("264_Diamond") &&
          craftCell[1].src.includes("264_Diamond")) ||
          (craftCell[1].src.includes("264_Diamond") &&
            craftCell[2].src.includes("264_Diamond")))
      ) {
        changeResult("../assets/pics/293_Diamond Hoe.png");
      }
      //Gold Hoe
      else if (
        items[0] === 5 &&
        items[10] === 2 &&
        items[4] === 2 &&
        ((craftCell[0].src.includes("266_Gold") &&
          craftCell[1].src.includes("266_Gold")) ||
          (craftCell[1].src.includes("266_Gold") &&
            craftCell[2].src.includes("266_Gold")))
      ) {
        changeResult("../assets/pics/294_Golden Hoe.png");
      }
      //Iron Hoe
      else if (
        items[0] === 5 &&
        items[10] === 2 &&
        items[3] === 2 &&
        ((craftCell[0].src.includes("265_Iron") &&
          craftCell[1].src.includes("265_Iron")) ||
          (craftCell[1].src.includes("265_Iron") &&
            craftCell[2].src.includes("265_Iron")))
      ) {
        changeResult("../assets/pics/292_Iron Hoe.png");
      }
      //Stone Hoe
      else if (
        items[0] === 5 &&
        items[10] === 2 &&
        items[2] === 2 &&
        ((craftCell[0].src.includes("4_Cobblestone") &&
          craftCell[1].src.includes("4_Cobblestone")) ||
          (craftCell[1].src.includes("4_Cobblestone") &&
            craftCell[2].src.includes("4_Cobblestone")))
      ) {
        changeResult("../assets/pics/291_Stone Hoe.png");
      }
      //Wooden Hoe
      else if (
        items[0] === 5 &&
        items[10] === 2 &&
        items[9] === 2 &&
        ((craftCell[0].src.includes("5_Oak") &&
          craftCell[1].src.includes("5_Oak")) ||
          (craftCell[1].src.includes("5_Oak") &&
            craftCell[2].src.includes("5_Oak")))
      ) {
        changeResult("../assets/pics/290_Wooden Hoe.png");
      }
      //Diamond Helmet
      else if (
        items[0] === 4 &&
        items[5] === 5 &&
        ((craftCell[3].src.includes("264_Diamond") &&
          craftCell[0].src.includes("264_Diamond") &&
          craftCell[1].src.includes("264_Diamond") &&
          craftCell[2].src.includes("264_Diamond") &&
          craftCell[5].src.includes("264_Diamond")) ||
          (craftCell[6].src.includes("264_Diamond") &&
            craftCell[3].src.includes("264_Diamond") &&
            craftCell[4].src.includes("264_Diamond") &&
            craftCell[5].src.includes("264_Diamond") &&
            craftCell[8].src.includes("264_Diamond")))
      ) {
        changeResult("../assets/pics/310_Diamond Helmet.png");
      }
      //Gold Helmet
      else if (
        items[0] === 4 &&
        items[4] === 5 &&
        ((craftCell[3].src.includes("266_Gold") &&
          craftCell[0].src.includes("266_Gold") &&
          craftCell[1].src.includes("266_Gold") &&
          craftCell[2].src.includes("266_Gold") &&
          craftCell[5].src.includes("266_Gold")) ||
          (craftCell[6].src.includes("266_Gold") &&
            craftCell[3].src.includes("266_Gold") &&
            craftCell[4].src.includes("266_Gold") &&
            craftCell[5].src.includes("266_Gold") &&
            craftCell[8].src.includes("266_Gold")))
      ) {
        changeResult("../assets/pics/314_Golden Helmet.png");
      }
      //Iron Helmet
      else if (
        items[0] === 4 &&
        items[3] === 5 &&
        ((craftCell[3].src.includes("265_Iron") &&
          craftCell[0].src.includes("265_Iron") &&
          craftCell[1].src.includes("265_Iron") &&
          craftCell[2].src.includes("265_Iron") &&
          craftCell[5].src.includes("265_Iron")) ||
          (craftCell[6].src.includes("265_Iron") &&
            craftCell[3].src.includes("265_Iron") &&
            craftCell[4].src.includes("265_Iron") &&
            craftCell[5].src.includes("265_Iron") &&
            craftCell[8].src.includes("265_Iron")))
      ) {
        changeResult("../assets/pics/306_Iron Helmet.png");
      }
      //Diamond ChestPlate
      else if (
        items[0] === 1 &&
        items[5] === 8 &&
        craftCell[1].src.includes("0_Air")
      ) {
        changeResult("../assets/pics/311_Diamond Chestplate.png");
      }
      //Gold ChestPlate
      else if (
        items[0] === 1 &&
        items[4] === 8 &&
        craftCell[1].src.includes("0_Air")
      ) {
        changeResult("../assets/pics/315_Golden Chestplate.png");
      }
      //Iron ChestPlate
      else if (
        items[0] === 1 &&
        items[3] === 8 &&
        craftCell[1].src.includes("0_Air")
      ) {
        changeResult("../assets/pics/307_Iron Chestplate.png");
      }
      //Diamond Leggings
      else if (
        items[0] === 2 &&
        items[5] === 7 &&
        craftCell[4].src.includes("0_Air") &&
        craftCell[7].src.includes("0_Air")
      ) {
        changeResult("../assets/pics/312_Diamond Leggings.png");
      }
      //Gold Leggings
      else if (
        items[0] === 2 &&
        items[4] === 7 &&
        craftCell[4].src.includes("0_Air") &&
        craftCell[7].src.includes("0_Air")
      ) {
        changeResult("../assets/pics/316_Golden Leggings.png");
      }
      //Iron Leggings
      else if (
        items[0] === 2 &&
        items[3] === 7 &&
        craftCell[4].src.includes("0_Air") &&
        craftCell[7].src.includes("0_Air")
      ) {
        changeResult("../assets/pics/308_Iron Leggings.png");
      }
      //Diamonds Boots
      else if (
        items[0] === 5 &&
        items[5] === 4 &&
        ((craftCell[3].src.includes("264_Diamond") &&
          craftCell[5].src.includes("264_Diamond") &&
          craftCell[6].src.includes("264_Diamond") &&
          craftCell[8].src.includes("264_Diamond")) ||
          (craftCell[0].src.includes("264_Diamond") &&
            craftCell[2].src.includes("264_Diamond") &&
            craftCell[3].src.includes("264_Diamond") &&
            craftCell[5].src.includes("264_Diamond")))
      ) {
        changeResult("../assets/pics/313_Diamond Boots.png");
      }
      //Gold Boots
      else if (
        items[0] === 5 &&
        items[4] === 4 &&
        ((craftCell[3].src.includes("266_Gold") &&
          craftCell[5].src.includes("266_Gold") &&
          craftCell[6].src.includes("266_Gold") &&
          craftCell[8].src.includes("266_Gold")) ||
          (craftCell[0].src.includes("266_Gold") &&
            craftCell[2].src.includes("266_Gold") &&
            craftCell[3].src.includes("266_Gold") &&
            craftCell[5].src.includes("266_Gold")))
      ) {
        changeResult("../assets/pics/317_Golden Boots.png");
      }
      //Iron Boots
      else if (
        items[0] === 5 &&
        items[3] === 4 &&
        ((craftCell[3].src.includes("265_Iron") &&
          craftCell[5].src.includes("265_Iron") &&
          craftCell[6].src.includes("265_Iron") &&
          craftCell[8].src.includes("265_Iron")) ||
          (craftCell[0].src.includes("265_Iron") &&
            craftCell[2].src.includes("265_Iron") &&
            craftCell[3].src.includes("265_Iron") &&
            craftCell[5].src.includes("265_Iron")))
      ) {
        changeResult("../assets/pics/309_Iron Boots.png");
      } else {
        result.style.display = "none";
      }
    }
  };
}
for (let i = 0; i < inventoryCell.length; i++) {
  const reset = document.querySelector(".reset-btn");
  reset.onclick = () => {
    console.log(inventoryCell[10].src);
    console.log(inventoryCell[11].src);
    console.log(inventoryCell[12].src);
    console.log(inventoryCell[13].src);
    for (let j = 10; j < inventoryCell.length; j++) {
      inventoryCell[j].src = "../assets/pics/0_Air.png";
      // inventoryCell[j].style.display = "none";
    }
    console.log(craftCell[0].src);
    console.log(craftCell[1].src);
    console.log(craftCell[2].src);
    console.log(craftCell[3].src);
    for (let j = 0; j < craftCell.length; j++)
      craftCell[j].src = "../assets/pics/0_Air.png";
    currentUrl = "";
    result.src = "../assets/pics/0_Air.png";
    result.style.display = "none";
    inventoryCell[0].src = "../assets/pics/17_Oak Wood.png";
    inventoryCell[1].src = "../assets/pics/4_Cobblestone.png";
    inventoryCell[2].src = "../assets/pics/265_Iron Ingot.png";
    inventoryCell[3].src = "../assets/pics/266_Gold Ingot.png";
    inventoryCell[4].src = "../assets/pics/264_Diamond.png";
    inventoryCell[5].src = "../assets/pics/331_Redstone.png";
    inventoryCell[6].src = "../assets/pics/287_String.png";
    inventoryCell[7].src = "../assets/pics/288_Feather.png";
    inventoryCell[8].src = "../assets/pics/318_Flint.png";
    inventoryCell[9].src = "../assets/pics/263_Coal.png";
  };
  inventoryCell[i].onclick = () => {
    if (currentUrl !== "" && inventoryCell[i].src.includes("0_Air")) {
      inventoryCell[i].style.display = "block";
      inventoryCell[i].src = currentUrl;
      main.style.cursor = "default";
      if (result.src === currentUrl)
        for (let x = 0; x < craftCell.length; x++)
          craftCell[x].src = "../assets/pics/0_Air.png";
      currentUrl = "";
    } else {
      if (currentUrl !== "" && !inventoryCell[i].src.includes("0_Air")) {
        let x = currentUrl;
        currentUrl = inventoryCell[i].src;
        main.style.cursor = `url(${currentUrl}),pointer`;
        inventoryCell[i].src = x;
      } else {
        if (!inventoryCell[i].src.includes("0_Air")) {
          main.style.cursor = `url(${inventoryCell[i].src}),pointer`;
          currentUrl = inventoryCell[i].src;
          inventoryCell[i].src = "../assets/pics/0_Air.png";
        }
      }
    }
    if (currentUrl === inventoryCell[i].src) {
      main.style.cursor = "default";
      currentUrl = "";
    }
    if (!result.src.includes("0_Air")) {
      !result.src.includes("0_Air");
      main.style.cursor = "default";
    }
  };
}
