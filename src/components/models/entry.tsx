import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { ModelData } from "./modelData"
import { useStaticQuery, graphql } from "gatsby"

const ModelEntry: React.FC<ModelData> = ({
  modelName,
  modelImage,
  modelLink,
  author,
  authorLink,
}) => {
  return (
    <td style={{ width: "10%" }} align="center">
      {modelLink && (
        <a href={modelLink}>
          {modelImage && (
            <Img fixed={modelImage} alt={`Model of ${modelName}`} />
          )}
        </a>
      )}

      <br />
      {modelName}
      <br />

      {(authorLink && (
        <a style={{ color: "#caaf76" }} href={authorLink}>
          {author}
        </a>
      )) || <div style={{ color: "#caaf76" }}>{author}</div>}
    </td>
  )
}

ModelEntry.propTypes = {
  modelName: PropTypes.string,
  modelImage: PropTypes.object,
  modelLink: PropTypes.string,
  author: PropTypes.string,
  authorLink: PropTypes.string,
}

export default ModelEntry
