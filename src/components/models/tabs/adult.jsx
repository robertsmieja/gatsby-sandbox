import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const AdultModelsTab = () => <></>

// const AdultModelsTab = () => {
//   const data = useStaticQuery(graphql`
//     fragment ResizeImage on File {
//       childImageSharp {
//         fixed(width: 500, quality: 100) {
//           ...GatsbyImageSharpFixed
//         }
//       }
//     }

//     query {
//       eperm: file(relativePath: { eq: "eperm.png" }) {
//         ...ResizeImage
//       }

//       mupendll: file(relativePath: { eq: "mupendll.png" }) {
//         ...ResizeImage
//       }

//       connectionloop: file(relativePath: { eq: "connectionloop.jpg" }) {
//         ...ResizeImage
//       }

//       network: file(relativePath: { eq: "network.png" }) {
//         ...ResizeImage
//       }

//       loadrom: file(relativePath: { eq: "loadrom.png" }) {
//         ...ResizeImage
//       }

//       prereqs: file(relativePath: { eq: "prereqs.png" }) {
//         ...ResizeImage
//       }

//       enoent: file(relativePath: { eq: "enoent.png" }) {
//         ...ResizeImage
//       }

//       ogl: file(relativePath: { eq: "ogl.png" }) {
//         ...ResizeImage
//       }
//     }
//   `)

//   return (
//     <div id="Adult Models" className="tabcontent">
//       <table className="tg">
//         <tbody>
//           <tr>
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_BOTWLink.pak",
//   modelImage: "./img/Adult_BOTWLink.png",
//   modelName: "BOTW Link",
//   authorLink: "https://skilarmbabcock.wixsite.com/skilarmodding",
//   author: "Skilar",
// }
//             <td style={{ width: "10%" }} align="center">
//               <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Broly.pak">
//                 <img src="./img/Adult_Broly.png" height="150" />
//               </a>
//               <br />
//               Broly
//               <br />
//               <div style={{ color: "#caaf76" }}>Majin</div>
//             </td>
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Chrono.pak",
//   modelImage: "./img/Adult_Chrono.png",
//   modelName: "Chrono",
//   authorLink: "https://skilarmbabcock.wixsite.com/skilarmodding",
//   author: "Skilar",
// }
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Cloud.pak",
//   modelImage: "./img/Adult_Cloud.png",
//   modelName: "Cloud",
//   authorLink: "https://skilarmbabcock.wixsite.com/skilarmodding",
//   author: "Skilar",
// }
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Dampe.pak",
//   modelImage: "./img/Adult_Dampe.png",
//   modelName: "Dampe",
//   authorLink: "https://github.com/Psi-Hate",
//   author: "Psi-Hate",
// }
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_DarkLink.pak",
//   modelImage: "./img/Adult_DarkLink.png",
//   modelName: "Dark Link",
//   authorLink: "https://github.com/CrookedPoe",
//   author: "CrookedPoe",
// }
//             <td style={{ width: "10%" }} align="center">
//               <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_DarkMagicianGirl.pak">
//                 <img src="./img/Adult_DarkMagicianGirl.png" height="150" />
//               </a>
//               <br />
//               Dark Magician Girl
//               <br />
//               <div style={{ color: "#caaf76" }}>Malon's Rose</div>
//             </td>
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_DrAhsid.pak",
//   modelImage: "./img/Adult_DrAhsid.png",
//   modelName: "Dr. Ahsid",
//   authorLink: "https://github.com/Unesag/Z64-CustomPlayerModels",
//   author: "Unesag",
// }
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_FierceDeity64.pak",
//   modelImage: "./img/Adult_FierceDeity64.png",
//   modelName: "Fierce Deity",
//   authorLink: "https://github.com/CrookedPoe",
//   author: "CrookedPoe",
// }
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_FierceDeity3DS.pak",
//   modelImage: "./img/Adult_FierceDeity3DS.png",
//   modelName: "Fierce Deity 3DS",
//   authorLink: "https://github.com/CraftyBoss",
//   author: "CraftyBoss",
// }
//           </tr>
//           <tr>
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_BetterFierceDeityLink.pak",
//   modelImage: "./img/Adult_BetterFierceDeityLink.png",
//   modelName: "Fierce Deity Remastered",
//   authorLink: "https://skilarmbabcock.wixsite.com/skilarmodding",
//   author: "Skilar",
// }
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_FightingPolygonLink.pak",
//   modelImage: "./img/Adult_FightingPolygonLink.png",
//   modelName: "Fighting Polygon Link",
//   authorLink: "https://twitter.com/ONI_3DArts",
//   author: "ONI 3D-Arts",
// }
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_FoxMcCloudAdv.pak",
//   modelImage: "./img/Adult_FoxMcCloudAdv.png",
//   modelName: "Fox McCloud",
//   authorLink: "https://github.com/Unesag/Z64-CustomPlayerModels",
//   author: "Unesag",
// }
//             <td style={{ width: "10%" }} align="center">
//               <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Godot.pak">
//                 <img src="./img/Adult_Godot.png" height="150" />
//               </a>
//               <br />
//               Godot
//               <br />
//               <div style={{ color: "#caaf76" }}>Anonymous</div>
//             </td>
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/ADULT_HenryStickmin.pak",
//   modelImage: "./img/Adult_HenryStickmin.png",
//   modelName: "Henry Stickmin",
//   authorLink: "https://twitter.com/UltIMa647",
//   author: "UltIMa647",
// }
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_HeroShade.pak",
//   modelImage: "./img/Adult_HeroShade.png",
//   modelName: "Hero Shade",
//   authorLink: "https://github.com/Psi-Hate",
//   author: "Psi-Hate",
// }
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Icebiwa.pak",
//   modelImage: "./img/Adult_Icebiwa.png",
//   modelName: "Icebiwa",
//   authorLink: "https://github.com/Unesag/Z64-CustomPlayerModels",
//   author: "Unesag",
// }
//             <td style={{ width: "10%" }} align="center">
//               <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_InuyashaFormChange.pak">
//                 <img src="./img/Adult_InuyashaFormChange.png" height="150" />
//               </a>
//               <br />
//               Inuyasha
//               <br />
//               <div style={{ color: "#caaf76" }}>Hailey</div>
//             </td>
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_IzouLink.pak",
//   modelImage: "./img/Adult_IzouLink.png",
//   modelName: "Izou Link",
//   authorLink: "https://github.com/Psi-Hate",
//   author: "Psi-Hate",
// }
//             <td style={{ width: "10%" }} align="center">
//               <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Kairi.pak">
//                 <img src="./img/Adult_Kairi.png" height="150" />
//               </a>
//               <br />
//               Kairi
//               <br />
//               <div style={{ color: "#caaf76" }}>Malon's Rose</div>
//             </td>
//           </tr>
//           <tr>
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Linebeck.pak",
//   modelImage: "./img/Adult_Linebeck.png",
//   modelName: "Linebeck",
//   authorLink: "https://github.com/Psi-Hate",
//   author: "Psi-Hate",
// }
//             <td style={{ width: "10%" }} align="center">
//               <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Lucina.pak">
//                 <img src="./img/Adult_Lucina.png" height="150" />
//               </a>
//               <br />
//               Lucina
//               <br />
//               <div style={{ color: "#caaf76" }}>Malon's Rose</div>
//             </td>
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_MMLink.pak",
//   modelImage: "./img/Adult_MMLink.png",
//   modelName: "Majora's Mask Link",
//   authorLink: "https://skilarmbabcock.wixsite.com/skilarmodding",
//   author: "Skilar",
// }
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Nia.pak",
//   modelImage: "./img/Adult_Nia.png",
//   modelName: "Nia",
//   authorLink: "https://github.com/Psi-Hate",
//   author: "Psi-Hate",
// }
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_OR_LA_ATTPLink.pak",
//   modelImage: "./img/Adult_OR_LA_ATTPLink.png",
//   modelName: "Original Link",
//   authorLink: "https://skilarmbabcock.wixsite.com/skilarmodding",
//   author: "Skilar",
// }
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Pepsiman.pak",
//   modelImage: "./img/Adult_Pepsiman.png",
//   modelName: "Pepsiman",
//   authorLink: "https://twitter.com/UltIMa647",
//   author: "UltIMa647",
// }
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_PrincessRuto.pak",
//   modelImage: "./img/Adult_PrincessRuto.png",
//   modelName: "Princess Ruto",
//   authorLink: "https://github.com/Unesag/Z64-CustomPlayerModels",
//   author: "Unesag",
// }
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_PrincessZeldaWW.pak",
//   modelImage: "./img/Adult_PrincessZeldaWW.png",
//   modelName: "WW Princess Zelda",
//   authorLink: "https://github.com/Unesag/Z64-CustomPlayerModels",
//   author: "Unesag",
// }
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_PS1Snake.pak",
//   modelImage: "./img/Adult_PS1Snake.png",
//   modelName: "Solid Snake",
//   authorLink: "https://github.com/Anubis-V1",
//   author: "Anubis-V1",
// }
//             <td style={{ width: "10%" }} align="center">
//               <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Saria.pak">
//                 <img src="./img/Adult_Saria.png" height="150" />
//               </a>
//               <br />
//               Saria
//               <br />
//               <div style={{ color: "#caaf76" }}>Malon's Rose</div>
//             </td>
//           </tr>
//           <tr>
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Sora.pak",
//   modelImage: "./img/Adult_Sora.png",
//   modelName: "Sora",
//   authorLink: "https://github.com/Unesag/Z64-CustomPlayerModels",
//   author: "Unesag",
// }
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_TerminalMontageLink.pak",
//   modelImage: "./img/Adult_TerminalMontageLink.png",
//   modelName: "Terminal Montage Link",
//   authorLink: "https://twitter.com/ONI_3DArts",
//   author: "ONI 3D-Arts",
// }
//             <td style={{ width: "10%" }} align="center">
//               <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Trunks.pak">
//                 <img src="./img/Adult_Trunks.png" height="150" />
//               </a>
//               <br />
//               Trunks
//               <br />
//               <div style={{ color: "#caaf76" }}>Hailey</div>
//             </td>
//             <td style={{ width: "10%" }} align="center">
//               <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Vegeta.pak">
//                 <img src="./img/Adult_Vegeta.png" height="150" />
//               </a>
//               <br />
//               Vegeta
//               <br />
//               <div style={{ color: "#caaf76" }}>Hailey</div>
//             </td>
//             {
//   modelLink: "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Wes.pak",
//   modelImage: "./img/Adult_Wes.png",
//   modelName: "Wes",
//   authorLink: "https://www.twitch.tv/serenademelody/",
//   author: "Serenade Melody",
// }
//             <td style={{ width: "10%" }} align="center">
//               {/* <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_"></a><br/><br/> */}
//             </td>
//             <td style={{ width: "10%" }} align="center">
//               {/* <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_"></a><br/><br/> */}
//             </td>
//             <td style={{ width: "10%" }} align="center">
//               {/* <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_"></a><br/><br/> */}
//             </td>
//             <td style={{ width: "10%" }} align="center">
//               {/* <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_"></a><br/><br/> */}
//             </td>
//             <td style={{ width: "10%" }} align="center">
//               {/* <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_"></a><br/><br/> */}
//             </td>
//           </tr>

//         </tbody>
//       </table>
//     </div>
//   )
// }

export default AdultModelsTab
