import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="ModLoader64" />
    <div
      style={{
        paddingLeft: "16px",
      }}
    >
      <h1>What is ModLoader64?:</h1>
      <p className="info">
        ModLoader64 is a network capable mod loading system for Nintendo 64
        games.
      </p>
      <h1>What can it do?:</h1>
      <p className="info">
        Its main purpose is creating online multiplayer mods for various games
        like Ocarina of Time.
      </p>
      <h1>What games are currently planned?:</h1>
      <p className="info">
        At this time: Ocarina of Time, Majora's Mask, Banjo Kazooie, Banjo
        Tooie, Super Mario 64, Donkey Kong 64.
      </p>
      <h1>What games are currently available?:</h1>
      <p className="info">Ocarina of Time and Banjo Kazooie.</p>
      <h1>Do I need ROMs to play these mods?:</h1>
      <p className="info">
        Yes, you need your own ROMs. No, we will not provide them.
      </p>
      <h1>What can I do to help?:</h1>
      <p className="info">
        The dev team can always use more people knowledgable about the inner
        workings of any N64 game and someone with web developement skills.
      </p>
    </div>
  </Layout>
)

export default IndexPage
