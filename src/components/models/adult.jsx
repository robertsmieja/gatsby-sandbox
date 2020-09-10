import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const AdultModelsTab = () => {
  const data = useStaticQuery(graphql`
    fragment ResizeImage on File {
      childImageSharp {
        fixed(width: 500, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    query {
      eperm: file(relativePath: { eq: "eperm.png" }) {
        ...ResizeImage
      }

      mupendll: file(relativePath: { eq: "mupendll.png" }) {
        ...ResizeImage
      }

      connectionloop: file(relativePath: { eq: "connectionloop.jpg" }) {
        ...ResizeImage
      }

      network: file(relativePath: { eq: "network.png" }) {
        ...ResizeImage
      }

      loadrom: file(relativePath: { eq: "loadrom.png" }) {
        ...ResizeImage
      }

      prereqs: file(relativePath: { eq: "prereqs.png" }) {
        ...ResizeImage
      }

      enoent: file(relativePath: { eq: "enoent.png" }) {
        ...ResizeImage
      }

      ogl: file(relativePath: { eq: "ogl.png" }) {
        ...ResizeImage
      }
    }
  `)

  return (
    <div id="Adult Models" className="tabcontent">
      <table className="tg">
        <tbody>
          <tr>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_BOTWLink.pak">
                <img src="./img/Adult_BOTWLink.png" height="150" />
              </a>
              <br />
              BOTW Link
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://skilarmbabcock.wixsite.com/skilarmodding"
              >
                Skilar
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Broly.pak">
                <img src="./img/Adult_Broly.png" height="150" />
              </a>
              <br />
              Broly
              <br />
              <div style={{ color: "#caaf76" }}>Majin</div>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Chrono.pak">
                <img src="./img/Adult_Chrono.png" height="150" />
              </a>
              <br />
              Chrono
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://skilarmbabcock.wixsite.com/skilarmodding"
              >
                Skilar
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Cloud.pak">
                <img src="./img/Adult_Cloud.png" height="150" />
              </a>
              <br />
              Cloud
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://skilarmbabcock.wixsite.com/skilarmodding"
              >
                Skilar
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Dampe.pak">
                <img src="./img/Adult_Dampe.png" height="150" />
              </a>
              <br />
              Dampe
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://github.com/Psi-Hate"
              >
                Psi-Hate
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_DarkLink.pak">
                <img src="./img/Adult_DarkLink.png" height="150" />
              </a>
              <br />
              Dark Link
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://github.com/CrookedPoe"
              >
                CrookedPoe
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_DarkMagicianGirl.pak">
                <img src="./img/Adult_DarkMagicianGirl.png" height="150" />
              </a>
              <br />
              Dark Magician Girl
              <br />
              <div style={{ color: "#caaf76" }}>Malon's Rose</div>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_DrAhsid.pak">
                <img src="./img/Adult_DrAhsid.png" height="150" />
              </a>
              <br />
              Dr. Ahsid
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://github.com/Unesag/Z64-CustomPlayerModels"
              >
                Unesag
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_FierceDeity64.pak">
                <img src="./img/Adult_FierceDeity64.png" height="150" />
              </a>
              <br />
              Fierce Deity
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://github.com/CrookedPoe"
              >
                CrookedPoe
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_FierceDeity3DS.pak">
                <img src="./img/Adult_FierceDeity3DS.png" height="150" />
              </a>
              <br />
              Fierce Deity 3DS
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://github.com/CraftyBoss"
              >
                CraftyBoss
              </a>
            </td>
          </tr>
          <tr>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_BetterFierceDeityLink.pak">
                <img src="./img/Adult_BetterFierceDeityLink.png" height="150" />
              </a>
              <br />
              Fierce Deity Remastered
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://skilarmbabcock.wixsite.com/skilarmodding"
              >
                Skilar
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_FightingPolygonLink.pak">
                <img src="./img/Adult_FightingPolygonLink.png" height="150" />
              </a>
              <br />
              Fighting Polygon Link
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://twitter.com/ONI_3DArts"
              >
                ONI 3D-Arts
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_FoxMcCloudAdv.pak">
                <img src="./img/Adult_FoxMcCloudAdv.png" height="150" />
              </a>
              <br />
              Fox McCloud
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://github.com/Unesag/Z64-CustomPlayerModels"
              >
                Unesag
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Godot.pak">
                <img src="./img/Adult_Godot.png" height="150" />
              </a>
              <br />
              Godot
              <br />
              <div style={{ color: "#caaf76" }}>Anonymous</div>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/ADULT_HenryStickmin.pak">
                <img src="./img/Adult_HenryStickmin.png" height="150" />
              </a>
              <br />
              Henry Stickmin
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://twitter.com/UltIMa647"
              >
                UltIMa647
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_HeroShade.pak">
                <img src="./img/Adult_HeroShade.png" height="150" />
              </a>
              <br />
              Hero Shade
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://github.com/Psi-Hate"
              >
                Psi-Hate
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Icebiwa.pak">
                <img src="./img/Adult_Icebiwa.png" height="150" />
              </a>
              <br />
              Icebiwa
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://github.com/Unesag/Z64-CustomPlayerModels"
              >
                Unesag
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_InuyashaFormChange.pak">
                <img src="./img/Adult_InuyashaFormChange.png" height="150" />
              </a>
              <br />
              Inuyasha
              <br />
              <div style={{ color: "#caaf76" }}>Hailey</div>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_IzouLink.pak">
                <img src="./img/Adult_IzouLink.png" height="150" />
              </a>
              <br />
              Izou Link
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://github.com/Psi-Hate"
              >
                Psi-Hate
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Kairi.pak">
                <img src="./img/Adult_Kairi.png" height="150" />
              </a>
              <br />
              Kairi
              <br />
              <div style={{ color: "#caaf76" }}>Malon's Rose</div>
            </td>
          </tr>
          <tr>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Linebeck.pak">
                <img src="./img/Adult_Linebeck.png" height="150" />
              </a>
              <br />
              Linebeck
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://github.com/Psi-Hate"
              >
                Psi-Hate
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Lucina.pak">
                <img src="./img/Adult_Lucina.png" height="150" />
              </a>
              <br />
              Lucina
              <br />
              <div style={{ color: "#caaf76" }}>Malon's Rose</div>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_MMLink.pak">
                <img src="./img/Adult_MMLink.png" height="150" />
              </a>
              <br />
              Majora's Mask Link
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://skilarmbabcock.wixsite.com/skilarmodding"
              >
                Skilar
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Nia.pak">
                <img src="./img/Adult_Nia.png" height="150" />
              </a>
              <br />
              Nia
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://github.com/Psi-Hate"
              >
                Psi-Hate
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_OR_LA_ATTPLink.pak">
                <img src="./img/Adult_OR_LA_ATTPLink.png" height="150" />
              </a>
              <br />
              Original Link
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://skilarmbabcock.wixsite.com/skilarmodding"
              >
                Skilar
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Pepsiman.pak">
                <img src="./img/Adult_Pepsiman.png" height="150" />
              </a>
              <br />
              Pepsiman
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://twitter.com/UltIMa647"
              >
                UltIMa647
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_PrincessRuto.pak">
                <img src="./img/Adult_PrincessRuto.png" height="150" />
              </a>
              <br />
              Princess Ruto
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://github.com/Unesag/Z64-CustomPlayerModels"
              >
                Unesag
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_PrincessZeldaWW.pak">
                <img src="./img/Adult_PrincessZeldaWW.png" height="150" />
              </a>
              <br />
              WW Princess Zelda
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://github.com/Unesag/Z64-CustomPlayerModels"
              >
                Unesag
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_PS1Snake.pak">
                <img src="./img/Adult_PS1Snake.png" height="150" />
              </a>
              <br />
              Solid Snake
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://github.com/Anubis-V1"
              >
                Anubis-V1
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Saria.pak">
                <img src="./img/Adult_Saria.png" height="150" />
              </a>
              <br />
              Saria
              <br />
              <div style={{ color: "#caaf76" }}>Malon's Rose</div>
            </td>
          </tr>
          <tr>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Sora.pak">
                <img src="./img/Adult_Sora.png" height="150" />
              </a>
              <br />
              Sora
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://github.com/Unesag/Z64-CustomPlayerModels"
              >
                Unesag
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_TerminalMontageLink.pak">
                <img src="./img/Adult_TerminalMontageLink.png" height="150" />
              </a>
              <br />
              Terminal Montage Link
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://twitter.com/ONI_3DArts"
              >
                ONI 3D-Arts
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Trunks.pak">
                <img src="./img/Adult_Trunks.png" height="150" />
              </a>
              <br />
              Trunks
              <br />
              <div style={{ color: "#caaf76" }}>Hailey</div>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Vegeta.pak">
                <img src="./img/Adult_Vegeta.png" height="150" />
              </a>
              <br />
              Vegeta
              <br />
              <div style={{ color: "#caaf76" }}>Hailey</div>
            </td>
            <td style={{ width: "10%" }} align="center">
              <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_Wes.pak">
                <img src="./img/Adult_Wes.png" height="150" />
              </a>
              <br />
              Wes
              <br />
              <a
                style={{ color: "#caaf76" }}
                href="https://www.twitch.tv/serenademelody/"
              >
                Serenade Melody
              </a>
            </td>
            <td style={{ width: "10%" }} align="center">
              {/* <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_"></a><br/><br/> */}
            </td>
            <td style={{ width: "10%" }} align="center">
              {/* <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_"></a><br/><br/> */}
            </td>
            <td style={{ width: "10%" }} align="center">
              {/* <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_"></a><br/><br/> */}
            </td>
            <td style={{ width: "10%" }} align="center">
              {/* <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_"></a><br/><br/> */}
            </td>
            <td style={{ width: "10%" }} align="center">
              {/* <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_"></a><br/><br/> */}
            </td>
          </tr>
          {/* Adult
    <td style={{width: "10%"}} align="center" >
        <a href="https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Adult_"><img src="./img/" height="150"/></a><br/><br/></td> */}
        </tbody>
      </table>
    </div>
  )
}

export default AdultModelsTab
