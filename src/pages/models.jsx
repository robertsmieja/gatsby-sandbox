import React, { useState } from "react"

import Layout from "../components/layout"
import AdultModelsTab from "../components/models/tabs/adult"
import ChildModelsTab from "../components/models/tabs/child"
import CombinedModelsTab from "../components/models/tabs/combined"
import SEO from "../components/seo"

const adultModels = "Adult Models"
const childModels = "Child Models"
const combinedModels = "Combined Models"

const getActiveTab = (activeTab) => {
  switch (activeTab) {
    case adultModels:
      return <AdultModelsTab />
    case childModels:
      return <ChildModelsTab />
    case combinedModels:
      return <CombinedModelsTab />
    default:
      return <></>
  }
}

export const ModelPage = () => {
  const [openTab, setOpenTab] = useState("")

  const getClassName = (tabName) =>
    `tablinks ${openTab === tabName ? "active" : ""}`

  return (
    <Layout>
      <SEO title="ModLoader64" />
      <br />
      <div className="tab" style={{ width: "100%" }}>
        <button
          className={`${getClassName(adultModels)}`}
          onClick={() => setOpenTab(adultModels)}
        >
          Adult Models
        </button>
        <button
          className={`${getClassName(childModels)}`}
          onClick={() => setOpenTab(childModels)}
        >
          Child Models
        </button>
        <button
          className={`${getClassName(combinedModels)}`}
          onClick={() => setOpenTab(combinedModels)}
        >
          Combined Models
        </button>
      </div>
      {getActiveTab(openTab)}
      <br />
      <footer style={{ textAlign: "center", fontSize: "10px" }}>
        <i>
          All model copyrights belong to their original owners, rigging them for
          use was done by the noted authors.
          <br />
          Special thanks to the zzPlayas crew for making custom models a thing.
        </i>
      </footer>
    </Layout>
  )
}

export default ModelPage
