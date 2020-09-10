import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SetupPage = () => (
  <Layout>
    <SEO title="ModLoader64 - Setup" />
    <div
      style={{
        paddingLeft: "16px",
      }}
    >
      <h1>ModLoader64 Configuration</h1>
      <h2>First Setup</h2>
      <p className="info">
        <b>Pre-Requisites:</b>
        <br />
        <a
          style={{ color: "#caaf76" }}
          href="https://www.microsoft.com/en-us/download/details.aspx?id=40784"
        >
          VC++ 2013 x86 Runtime Libraries
        </a>
        <br />
        <a
          style={{ color: "#caaf76" }}
          href="https://aka.ms/vs/16/release/vc_redist.x86.exe"
        >
          VC++ 2017 x86 Runtime Libraries
        </a>
        <br />
        <a
          style={{ color: "#caaf76" }}
          href="https://nodejs.org/dist/v12.18.0/node-v12.18.0-x86.msi"
        >
          Node.js x86 Libraries
        </a>
        <br />
      </p>
      <h2>
        <u style={{ color: "#c00000" }}>
          <b>
            <i>Yes, you need x86 even if you are on a 64-bit computer.</i>
          </b>
        </u>
        <p></p>
      </h2>
      <p className="info">
        <b>
          1.) Download{" "}
          <a
            style={{ color: "#caaf76" }}
            href="https://github.com/hylian-modding/ModLoader64-GUI/releases"
          >
            ModLoader64
          </a>
        </b>
        <i> exe or zip file.</i>
      </p>
      <p className="info">
        <b>2.) Extract the contents to your Desktop or Downloads folder.</b>
      </p>
      <p className="info">
        <b>
          3.) Run <code style={{ color: "#caaf76" }}>ModLoader64.exe</code> to
          execute first time update and populate folders.
        </b>
      </p>
      <p className="info">
        <b>
          4.) Download{" "}
          <a
            style={{ color: "#caaf76" }}
            href="https://github.com/hylian-modding/OcarinaOfTimeOnline/releases"
          >
            OotOnline.pak
          </a>
        </b>
      </p>
      <p className="info">
        <b>
          5.) Move <code style={{ color: "#caaf76" }}>OotOnline.pak</code> to{" "}
          <code style={{ color: "#caaf76" }}>./ModLoader/mods/</code>
        </b>
      </p>
      <p className="info">
        <b>
          6.) Congrats, you've installed ModLoader64 and Ocarina of Time Online.
        </b>
      </p>
      <h2>Roms</h2>
      <p style={{ color: "#c00000", fontSize: "22px" }}>
        <b>
          <u>WE WILL NOT NOW NOR EVER PROVIDE ANY ROMS.</u>
        </b>
        <br />
      </p>
      <p className="info">
        Place your rom files under{" "}
        <code style={{ color: "#caaf76" }}>./ModLoader/roms</code>
      </p>
      <h2>Mods</h2>
      <p className="info">
        Mods will include gameplay modifications, custom characters, equipment
        packs, etc.
        <br /> Place you <code style={{ color: "#caaf76" }}>.pak</code> files
        under <code style={{ color: "#caaf76" }}>./ModLoader/mods</code>
        <br />
        <a
          style={{ color: "#caaf76" }}
          href="https://github.com/hylian-modding/Z64-CustomPlayerModels/blob/master/oot/README.md"
        >
          Official Player Models
        </a>
      </p>
      <h1>Emulator Configuration</h1>
      <p className="info">
        You can edit the following options by opening{" "}
        <code style={{ color: "#caaf76" }}>
          ./ModLoader/emulator/mupen64plus.cfg
        </code>{" "}
        in a text editor. (Notepad, Wordpad, Notepad++, etc.)
      </p>
      <h2>Video Options</h2>
      <pre>
        <code>AspectRatio = ?</code>
      </pre>
      <details className="options">
        <summary>Options</summary>0 = Stretch to fit
        <br /> 1 = Force 4:3
        <br /> 2 = Force 16:9
        <br /> 3 = Auto-Adjust
        <br />
      </details>
      <pre>
        <code>FXAA = True/False</code>
      </pre>
      <pre>
        <code>MultiSampling = ?</code>
      </pre>
      <details className="options">
        <summary>Options</summary> 0 = Off
        <br /> 2 = 2x
        <br /> 4 = 4x
        <br /> 8 = 8x
        <br /> 16 = 16x
        <br />
      </details>
      <h2>[Video-General]</h2>
      <pre>
        <code>
          Fullscreen = True/False
          <br />
          ScreenWidth = width (e.g. 1920)
          <br />
          ScreenHeight = height (e.g. 1080)
        </code>
      </pre>
      <h2>Texture Packs</h2>
      <a
        className="info"
        style={{ color: "#caaf76" }}
        href="https://emulationking.com/legend-zelda-ocarina-time/"
      >
        The Legend of Zelda: Ocarina of Time Texture Packs
      </a>
      <br />
      <a
        className="info"
        style={{ color: "#caaf76" }}
        href="https://emulationking.com/banjo-kazooie/"
      >
        Banjo Kazooie Texture Packs
      </a>
      <br />
      <p className="info">
        Default Folder Windows (Rice) -{" "}
        <code style={{ color: "#caaf76" }}>
          %AppData%/mupen64plus/hires_texture/
        </code>
      </p>
      <p className="info">
        Default Folder Windows (HTC/HTS) -{" "}
        <code style={{ color: "#caaf76" }}>%AppData%/mupen64plus/cache/</code>
      </p>
      <p className="info">
        Default Folder Linux (Rice) -{" "}
        <code style={{ color: "#caaf76" }}>
          ~/.local/share/mupen64plus/hires_texture/
        </code>
      </p>
      <p className="info">
        Default Folder Linux (HTC/HTS) -{" "}
        <code style={{ color: "#caaf76" }}>
          ~/.cache/share/mupen64plus/cache/
        </code>
      </p>
      <p className="info">
        You can change the directories used for textures in{" "}
        <code style={{ color: "#caaf76" }}>mupen64plus.cfg</code>
      </p>
      <pre>
        <code>
          txPath = Path/To/Textures
          <br />
          txCachePath = Path/To/Texture/Cache
        </code>
      </pre>
      <p className="info">
        <i>
          It is recommended to set{" "}
          <code style={{ color: "#caaf76" }}>txCacheSize</code> to 1000
        </i>
      </p>
      <h3>Rice Folder</h3>
      <pre>
        <code>
          txHiresEnable = True
          <br />
          txHiresFullAlphaChannel = True
        </code>
      </pre>
      <h3>GLideN64 .htc file</h3>
      <pre>
        <code>
          txHiresEnable = True
          <br />
          txHiresFullAlphaChannel = True
          <br />
          txEnhancedTextureFileStorage = False
          <br />
          txHiresTextureFileStorage = False
        </code>
      </pre>
      <h3>GLideN64 .hts files</h3>
      <pre>
        <code>
          txHiresEnable = True
          <br />
          txHiresFullAlphaChannel = True
          <br />
          txEnhancedTextureFileStorage = True
          <br />
          txHiresTextureFileStorage = True
        </code>
      </pre>
      <h2>Emulator Hotkeys</h2>
      <pre>
        <code>
          ESC - Quit
          <br />
          F9 - Reset
          <br />
          Alt-Enter - Toggle Fullscreen
          <br />M - Toggle Mute
          <br />[ - Volume Down
          <br />] - Volume Up
        </code>
      </pre>
    </div>
  </Layout>
)

export default SetupPage
