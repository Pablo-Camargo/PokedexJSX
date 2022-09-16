import { createGlobalStyle } from "styled-components";
import typNormal from "../img/typNormal.png";
import typPoison from "../img/typPoison.png";
import typPsychic from "../img/typPsychic.png";
import typGras from "../img/typGras.png";
import typGround from "../img/typGround.png";
import typIce from "../img/typIce.png";
import typFire from "../img/typFire.png";
import typRock from "../img/typRock.png";
import typDragon from "../img/typDragon.png";
import typWater from "../img/typWater.png";
import typBug from "../img/typBug.png";
import typDark from "../img/typDark.png";
import typFighting from "../img/typFighting.png";
import typGhost from "../img/typGhost.png";
import typSteel from "../img/typSteel.png";
import typFlying from "../img/typFlying.png";
import typElectric from "../img/typElectric.png";
import typFairy from "../img/typFairy.png";
import pokeLogo from "../img/pokebola.png";
import pokeBak from "../img/poke.png";
import pokFund from "../img/Pokeball.png";
export default createGlobalStyle`
    html {
    font-size: 82.5%; /* 62.5% de 16px = 10px */
}
:root {
    --cor-bug: #8cb230;
    --cor-dark: #58575f;
    --cor-dragon: #0f6ac0;
    --cor-electric: #eed535;
    --cor-fairy: #ed6ec7;
    --cor-fighting: #d04164;
    --cor-fire: #fd7d24;
    --cor-flying: #748fc9;
    --cor-ghost: #556aae;
    --cor-grass: #62b957;
    --cor-ground: #dd7748;
    --cor-ice: #61cec0;
    --cor-normal: #9da0aa;
    --cor-poison: #a552cc;
    --cor-psychic: #ea5d60;
    --cor-rock: #baab82;
    --cor-steel: #417d9a;
    --cor-water: #4a90da;

    --cor-bg-bug: #8bd674;
    --cor-bg-dark: #6f6e78;
    --cor-bg-dragon: #7383b9;
    --cor-bg-electric: #f2cb55;
    --cor-bg-fairy: #eba8c3;
    --cor-bg-fighting: #eb4971;
    --cor-bg-fire: #ffa756;
    --cor-bg-flying: #83a2e3;
    --cor-bg-ghost: #8571be;
    --cor-bg-grass: #8bbe8a;
    --cor-bg-ground: #f78551;
    --cor-bg-ice: #91d8df;
    --cor-bg-normal: #b5b9c4;
    --cor-bg-poison: #9f6e97;
    --cor-bg-psychic: #ff6568;
    --cor-bg-rock: #d4c294;
    --cor-bg-steel: #4c91b2;
    --cor-bg-water: #58abf6;
}
body{
  background: ${(props) => props.theme.colors.background};
}
.pokebolaPng{
    background-image: url(${pokeLogo});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    

}
.css-1ffz9ra-MuiTypography-root{
    color: ${(props) => props.theme.colors.text};
}
.css-6fdz2p-MuiSwitch-root .MuiSwitch-thumb{
    background-color: ${(props) => props.theme.colors.secundary};
}
.css-6fdz2p-MuiSwitch-root .MuiSwitch-track,
.css-6fdz2p-MuiSwitch-root .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track{
    background-color: ${(props) => props.theme.colors.secundary};
}
header{
  background-color:${(props) => props.theme.colors.primary}!important
}

.normal {
    background-color: var(--cor-normal) !important;
    color: #fff !important;
}
.icon-normal {
    height: 20px;
    width: 16px;
    background-image: url(${typNormal});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}

.poison {
    background-color: var(--cor-poison) !important;
    color: #fff !important;
}
.icon-poison {
    height: 20px;
    width: 16px;
    background-image: url(${typPoison});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}
.psychic {
    background-color: var(--cor-psychic) !important;
    color: #fff !important;
}
.icon-psychic {
    height: 20px;
    width: 16px;
    background-image: url(${typPsychic});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}


.grass {
    background-color: var(--cor-grass) !important;
    color: #fff !important;
}
.icon-grass {
    height: 20px;
    width: 16px;
    background-image: url(${typGras});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}

.ground {
    background-color: var(--cor-ground) !important;
    color: #fff !important;
}
.icon-ground {
    height: 20px;
    width: 16px;
    background-image: url(${typGround});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}

.ice {
    background-color: var(--cor-ice) !important;
    color: #fff !important;
}
.icon-ice {
    height: 20px;
    width: 16px;
    background-image: url(${typIce});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}

.fire {
    background-color: var(--cor-fire) !important;
    color: #fff !important;
}
.icon-fire {
    height: 20px;
    width: 16px;
    background-image: url(${typFire});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}

.rock {
    background-color: var(--cor-rock) !important;
    color: #fff !important;
}
.icon-rock {
    height: 20px;
    width: 16px;
    background-image: url(${typRock});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}

.dragon {
    background-color: var(--cor-dragon) !important;
    color: #fff !important;
}
.icon-dragon {
    height: 20px;
    width: 16px;
    background-image: url(${typDragon});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}
#bg-poke.water-root{
    background-image: linear-gradient(to bottom right,#0000 53%, var(--cor-bg-water) 50%);


}

.water {
    background-color: var(--cor-water) !important;
    color: #fff !important;
}
.icon-water {
    height: 20px;
    width: 16px;
    background-image: url(${typWater});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}

.bug {
    background-color: var(--cor-bug) !important;
    color: #fff !important;
}
.icon-bug {
    height: 20px;
    width: 16px;
    background-image: url(${typBug});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}

.MuiTypography-root.MuiTypography-body1.MuiListItemText-primary.css-10hburv-MuiTypography-root{
    justify-content: space-between!important;
        padding: 5px;

}
.css-19xmp72-MuiSlider-root.Mui-disabled{
    width: 50%;
}
.dark {
    background-color: var(--cor-dark) !important;
    color: #fff !important;
}
.list-test{
        justify-content: space-between!important;
    padding: 0;
    padding-bottom: 10px!important;
}
.icon-dark {
    height: 20px;
    width: 16px;
    background-image: url(${typDark});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}

.fighting {
    background-color: var(--cor-fighting) !important;
    color: #fff !important;
}
.icon-fighting {
    height: 20px;
    width: 16px;
    background-image: url(${typFighting});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}

.ghost {
    background-color: var(--cor-ghost) !important;
    color: #fff !important;
}
.icon-ghost {
    height: 20px;
    width: 16px;
    background-image: url(${typGhost});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}

.steel {
    background-color: var(--cor-steel) !important;
    color: #fff !important;
}
.icon-steel {
    height: 20px;
    width: 16px;
    background-image: url(${typSteel});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}
.flying {
    background-color: var(--cor-flying) !important;
    color: #fff !important;
}
.icon-flying {
    height: 20px;
    width: 16px;
    background-image: url(${typFlying});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}

.electric {
    background-color: var(--cor-electric) !important;
    color: #fff !important;
}
.icon-electric {
    height: 20px;
    width: 16px;
    background-image: url(${typElectric});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}

.fairy {
    background-color: var(--cor-fairy) !important;
    color: #fff !important;
}
.icon-fairy {
    height: 20px;
    width: 16px;
    background-image: url(${typFairy});
    background-position-x: 100%;
    background-position-y: 50%;
    background-repeat: no-repeat;
    
}
.normal-color {
    color: var(--cor-bg-normal) !important;
}
.poison-color {
    color: var(--cor-bg-poison) !important;
}

.psychic-color {
    color: var(--cor-bg-psychic) !important;
}

.grass-color {
    color: var(--cor-bg-grass) !important;
}
.ground-color {
    color: var(--cor-bg-ground) !important;
}
.ice-color {
    color: var(--cor-bg-ice) !important;
}
.fire-color {
    color: var(--cor-bg-fire) !important;
}
.rock-color {
    color: var(--cor-bg-rock) !important;
}
.dragon-color {
    color: var(--cor-bg-dragon) !important;
}
.water-color {
    color: var(--cor-bg-water) !important;
}
.bug-color {
    color: var(--cor-bg-bug) !important;
}
.dark-color {
    color: var(--cor-bg-dark) !important;
}
.fighting-color {
    color: var(--cor-bg-fighting) !important;
}
.ghost-color {
    color: var(--cor-bg-ghost) !important;
}
.steel-color {
    color: var(--cor-bg-steel) !important;
}
.flying-color {
    color: var(--cor-bg-flying) !important;
}
.electric-color {
    color: var(--cor-bg-electric) !important;
}
.fairy-color {
    color: var(--cor-bg-fairy) !important;
}
#bg-poke.fair-root{
    background-image: linear-gradient(to bottom right,#0000 53%, var(--cor-bg-fair) 50%);

}
#bg-poke.electric-root{
    background-image: linear-gradient(to bottom right,#0000 53%, var(--cor-bg-electric) 50%);

}

#bg-poke.flying-root{
    background-image: linear-gradient(to bottom right,#0000 53%, var(--cor-bg-flying) 50%);

}
#bg-poke.steel-root{
    background-image: linear-gradient(to bottom right,#0000 53%, var(--cor-bg-steel) 50%);

}
#bg-poke.ghost-root{
    background-image: linear-gradient(to bottom right,#0000 53%, var(--cor-bg-ghost) 50%);

}
#bg-poke.fighting-root{
    background-image: linear-gradient(to bottom right,#0000 53%, var(--cor-bg-fighting) 50%);

}
#bg-poke.dark-root{
    background-image: linear-gradient(tto bottom right,#0000 53%, var(--cor-bg-dark) 50%);

}
#bg-poke.bug-root{
    background-image: linear-gradient(to bottom right,#0000 53%, var(--cor-bg-bug) 50%);

}
#bg-poke.dragon-root{
    background-image: linear-gradient(to bottom right,#0000 53%, var(--cor-bg-dragon) 50%);

}
#bg-poke.rock-root{
    background-image: linear-gradient(to bottom right,#0000 53%, var(--cor-bg-rock) 50%);

}
#bg-poke.fire-root{
    background-image: linear-gradient(to bottom right,#0000 53%, var(--cor-bg-fire) 50%);

}
#bg-poke.ice-root{
    background-image: linear-gradient(to bottom right,#0000 53%, var(--cor-bg-ice) 50%);

}
#bg-poke.normal-root{
    background-image: linear-gradient(to bottom right,#0000 53%, var(--cor-bg-normal) 50%);

}
#bg-poke.poison-root{
    background-image: linear-gradient(to bottom right,#0000 53%, var(--cor-bg-poison) 50%);

}
#bg-poke.psychic-root{
    background-image: linear-gradient(to bottom right,#0000 53%, var(--cor-bg-psychic) 50%);


}
#bg-poke.grass-root{
    background-image: linear-gradient(to bottom right,#0000 53%, var(--cor-bg-grass) 50%);

}
#bg-poke.ground-root{
    background-image: linear-gradient(to bottom right,#0000 53%,  var(--cor-bg-ground) 50%);

}
.css-14pt78w-MuiSlider-rail {
    background-color: #c7c5c5 !important;
    opacity: 0.5;
}

.normal-bg {
     box-shadow: none!important;
    background-color: var(--cor-bg-normal) !important;
}
.poison-bg {
     box-shadow: none!important;
    background-color: var(--cor-bg-poison) !important;
}

.psychic-bg {
     box-shadow: none!important;
    background-color: var(--cor-bg-psychic) !important;
}

.grass-bg {
     box-shadow: none!important;
    background-color: var(--cor-bg-grass) !important;
}
.bg{
    box-shadow: none!important;
    background-color:  #0000 !important;
}

.ground-bg {
     box-shadow: none!important;
    background-color:   var(--cor-bg-ground) !important;
}
.ice-bg {
     box-shadow: none!important;
    background-color:  var(--cor-bg-ice) !important;
}
.fire-bg {
     box-shadow: none!important;
    background-color:  var(--cor-bg-fire) !important;
}
.rock-bg {
     box-shadow: none!important;
    background-color:  var(--cor-bg-rock) !important;
}
.dragon-bg {
     box-shadow: none!important;
    background-color:  var(--cor-bg-dragon) !important;
}
.water-bg {
 box-shadow: none!important;
    background-color:  var(--cor-bg-water) !important;
}

.bug-bg {
     box-shadow: none!important;
    background-color:  var(--cor-bg-bug)!important;
}
.dark-bg {
    background-color:  var(--cor-bg-dark) !important;
     box-shadow: none!important;
}
.fighting-bg {
    background-color:  var(--cor-bg-fighting) !important;
     box-shadow: none!important;
}
.ghost-bg {
    background-color:  var(--cor-bg-ghost) !important;
     box-shadow: none!important;
}
.steel-bg {
    background-color:  var(--cor-bg-steel) !important;
     box-shadow: none!important;
}
.flying-bg {
    background-color:  var(--cor-bg-flying) !important;
     box-shadow: none!important;
}
.electric-bg {
    background-color:  var(--cor-bg-electric) !important;
     box-shadow: none!important;
}
.fairy-bg {
    background-color:  var(--cor-bg-fairy) !important;
    box-shadow: none!important;
}
.chip-clip {
    color: #fff !important;
}
.App {
    text-align: center;
}

.App-logo {
    height: 40vmin;
    pointer-events: none;
}
.info-status {
    background-color: #fff;
    border-radius: 10px ;
}
.detailesTypes div{
    justify-content: space-around;
}
.listDetails span{
    flex-direction: column;
}
.listFlex{
    display: flex;
    flex-direction: row-reverse;
}
.fontDetails{
    font-size: 20px;
}
.fontDetailsSpan{
    font-size: 12px;
}
.rowSpace{justify-content: space-around;}

@media (prefers-reduced-motion: no-preference) {
    .App-logo {
        animation: App-logo-spin infinite 20s linear;
    }
}

.App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
}

.App-link {
    color: #61dafb;
}
.img-fund {
    background-image: url(${pokFund});
    background-repeat: no-repeat;
    width: 100px !important;
    height: 100px !important;
}
.poke {
    position: relative;
}
.absolute {
    position: absolute;

    left: 269px;
    top: 0;
}
.no-margings {
    margin: 0 !important;
    display: flex !important;
    width: 60% !important;
}
.id-pokemon {
    display: flex;

    color: rgba(0, 0, 0, 0.54);

    padding: 12px;
    font-size: 1.5rem;
}
.poke-bola-back {
    background-image: url(${pokeBak});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 300px 300px;
}
.MuiSlider-thumbColorPrimary.MuiSlider-thumbSizeMedium.MuiSlider-thumb.css-eg0mwd-MuiSlider-thumb,
.css-eg0mwd-MuiSlider-thumb:before {
    display: contents !important;
}
.css-19xmp72-MuiSlider-root.Mui-disabled {
    padding: 0 !important;
}
.css-2s90m6-MuiAvatar-root {
    background-color: transparent !important;
}
.css-2s90m6-MuiAvatar-root {
    display: flex !important;
    justify-content: flex-start !important;
}
.css-tlelie-MuiListItemText-root {
    margin: 0 !important;
}

.css-10hburv-MuiTypography-root {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
}
.css-cveggr-MuiListItemIcon-root {
    min-width: 0px !important;
}
.css-2s90m6-MuiAvatar-root {
    border-radius: 0 !important;
    color: #000 !important;
    width: 100% !important;
    height: auto !important;

    font-size: 1.25rem !important;
}
.info-status {
    padding: 0 20px;
}
@keyframes App-logo-spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
@media screen and (max-width: 1100px) {
    .poke-bola-back {
        background-size: 220px 220px;
    }
}
@media only screen and (max-width: 912px) {
    .marginBot{
        margin-bottom: 0!important;
    }

    .showMb{
        display: block;
        
        background-color: #000;
        width: 250px;
        height: 250px;
        border-radius:50%;
    }
    #bg-poke  .paddings,.css-1oqqzyl-MuiContainer-root{
        padding: 0!important;
       
    }
    .bg{
        width: 100%;
        text-align: center;
        padding: 0!important;
    }
    .info-status {
    background-color: #fff;
    border-radius: 20px 20px 0px 0px;
    }
    .justFi{
        justify-content: center;
    }
    .paddings {
        padding: 9px !important;
    }
    .no-margings {
        margin: 0 !important;
        display: flex !important;
        width: 100% !important;
    }
    .poke-bola-back {
        background-size: 220px 220px;
    }
}
@media only screen and (max-width: 600px) {
    #bg-poke.fair-root{
    background-image: linear-gradient(to bottom right,#0000 0%, var(--cor-bg-fair) 0%);

}
#bg-poke.electric-root{
    background-image: linear-gradient(to bottom right,#0000 0%, var(--cor-bg-electric) 0%);

}

#bg-poke.flying-root{
    background-image: linear-gradient(to bottom right,#0000 0%, var(--cor-bg-flying) 0%);

}
#bg-poke.steel-root{
    background-image: linear-gradient(to bottom right,#0000 0%, var(--cor-bg-steel) 0%);

}
#bg-poke.ghost-root{
    background-image: linear-gradient(to bottom right,#0000 0%, var(--cor-bg-ghost) 0%);

}
#bg-poke.fighting-root{
    background-image: linear-gradient(to bottom right,#0000 0%, var(--cor-bg-fighting) 0%);

}
#bg-poke.dark-root{
    background-image: linear-gradient(tto bottom right,#0000 0%, var(--cor-bg-dark) 0%);

}
#bg-poke.bug-root{
    background-image: linear-gradient(to bottom right,#0000 0%, var(--cor-bg-bug) 0%);

}
#bg-poke.dragon-root{
    background-image: linear-gradient(to bottom right,#0000 0%, var(--cor-bg-dragon) 0%);

}
#bg-poke.rock-root{
    background-image: linear-gradient(to bottom right,#0000 0%, var(--cor-bg-rock) 0%);

}
#bg-poke.fire-root{
    background-image: linear-gradient(to bottom right,#0000 0%, var(--cor-bg-fire) 0%);

}
#bg-poke.ice-root{
    background-image: linear-gradient(to bottom right,#0000 0%, var(--cor-bg-ice) 0%);

}
#bg-poke.normal-root{
    background-image: linear-gradient(to bottom right,#0000 0%, var(--cor-bg-normal) 0%);

}
#bg-poke.poison-root{
    background-image: linear-gradient(to bottom right,#0000 0%, var(--cor-bg-poison) 0%);

}
#bg-poke.psychic-root{
    background-image: linear-gradient(to bottom right,#0000 0%, var(--cor-bg-psychic) 0%);


}
#bg-poke.grass-root{
    background-image: linear-gradient(to bottom right,#0000 0%, var(--cor-bg-grass) 0%);

}
#bg-poke.ground-root{
    background-image: linear-gradient(to bottom right,#0000 0%,  var(--cor-bg-ground) 0%);

}
    .paddings {
        padding: 9px !important;
    }
    .no-margings {
        margin: 0 !important;
        display: flex !important;
        width: 100% !important;
    }
    .poke-bola-back {
        background-size: 300px 300px;
    }
}

`;
