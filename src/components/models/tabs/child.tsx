import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import ModelEntry from "../entry"
import { ModelData } from "../modelData"

const ChildModelsTab = () => {
  const data = useStaticQuery(graphql`
    fragment ResizeModelImage on File {
      childImageSharp {
        fixed(height: 150, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    query {
      Child_ChibiRobo: file(relativePath: { eq: "child/Child_ChibiRobo.png" }) {
        ...ResizeModelImage
      }

      Child_FoxMcCloud: file(
        relativePath: { eq: "child/Child_FoxMcCloud.png" }
      ) {
        ...ResizeModelImage
      }

      Child_Hinata: file(relativePath: { eq: "child/Child_Hinata.png" }) {
        ...ResizeModelImage
      }

      Child_JoeyWheeler: file(
        relativePath: { eq: "child/Child_JoeyWheeler.png" }
      ) {
        ...ResizeModelImage
      }

      Child_Kafei: file(relativePath: { eq: "child/Child_Kafei.png" }) {
        ...ResizeModelImage
      }

      Child_Lizalfos: file(relativePath: { eq: "child/Child_Lizalfos.png" }) {
        ...ResizeModelImage
      }

      Child_Lonk: file(relativePath: { eq: "child/Child_Lonk.png" }) {
        ...ResizeModelImage
      }

      Child_MMLink: file(relativePath: { eq: "child/Child_MMLink.png" }) {
        ...ResizeModelImage
      }

      Child_PrincessRuto: file(
        relativePath: { eq: "child/Child_PrincessRuto.png" }
      ) {
        ...ResizeModelImage
      }

      Child_PsiHate: file(relativePath: { eq: "child/Child_Psi-Hate.png" }) {
        ...ResizeModelImage
      }

      Child_Saria: file(relativePath: { eq: "child/Child_Saria.png" }) {
        ...ResizeModelImage
      }

      # Watch the casing on K
      Child_SkullKid: file(relativePath: { eq: "child/Child_SkullKid.png" }) {
        ...ResizeModelImage
      }

      Child_Tetra: file(relativePath: { eq: "child/Child_Tetra.png" }) {
        ...ResizeModelImage
      }

      Child_ToonLink: file(relativePath: { eq: "child/Child_ToonLink.png" }) {
        ...ResizeModelImage
      }
    }
  `)

  const childModels: ModelData[] = [
    {
      modelLink:
        "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_ChibiRobo.pak",
      modelImage: data.Child_ChibiRobo.childImageSharp.fixed,
      modelName: "Chibi Robo",
      authorLink: "https://github.com/Unesag/Z64-CustomPlayerModels",
      author: "Unesag",
    },
    {
      modelLink:
        "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_FoxMcCloud.pak",
      modelImage: data.Child_FoxMcCloud.childImageSharp.fixed,
      modelName: "Fox McCloud",
      authorLink: "https://github.com/Unesag/Z64-CustomPlayerModels",
      author: "Unesag",
    },
    {
      modelLink:
        "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_Hinata.pak",
      modelImage: data.Child_Hinata.childImageSharp.fixed,
      modelName: "Hinata",
      authorLink: "https://github.com/Psi-Hate",
      author: "Psi-Hate",
    },
    {
      modelLink:
        "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_JoeyWheeler.pak",
      modelImage: data.Child_JoeyWheeler.childImageSharp.fixed,
      modelName: "Joey Wheeler",
      authorLink: "https://github.com/Unesag/Z64-CustomPlayerModels",
      author: "Unesag",
    },
    {
      modelLink:
        "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_Kafei.pak",
      modelImage: data.Child_Kafei.childImageSharp.fixed,
      modelName: "Kafei",
      authorLink: "https://github.com/CrookedPoe",
      author: "CrookedPoe",
    },
    {
      modelLink:
        "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_Lizalfos.pak",
      modelImage: data.Child_Lizalfos.childImageSharp.fixed,
      modelName: "Lizalfos",
      authorLink: "https://twitter.com/ONI_3DArts",
      author: "ONI 3D-Arts",
    },
    {
      modelLink:
        "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_Lonk.pak",
      modelImage: data.Child_Lonk.childImageSharp.fixed,
      modelName: "Lonk From Pennsylvania",
      authorLink: undefined,
      author: "Malon's Rose",
    },
    {
      modelLink:
        "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_MMLink.pak",
      modelImage: data.Child_MMLink.childImageSharp.fixed,
      modelName: "Majora's Mask Link",
      authorLink: "https://github.com/Neirn",
      author: "Neirn",
    },
    {
      modelLink:
        "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_PrincessRuto.pak",
      modelImage: data.Child_PrincessRuto.childImageSharp.fixed,
      modelName: "Princess Ruto",
      authorLink: "https://github.com/Unesag/Z64-CustomPlayerModels",
      author: "Unesag",
    },
    {
      modelLink:
        "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_Psi-Hate.pak",
      modelImage: data.Child_PsiHate.childImageSharp.fixed,
      modelName: "Psi-Hate",
      authorLink: "https://github.com/Psi-Hate",
      author: "Psi-Hate",
    },
    {
      modelLink:
        "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_Saria.pak",
      modelImage: data.Child_Saria.childImageSharp.fixed,
      modelName: "Saria",
      authorLink: undefined,
      author: "Malon's Rose",
    },
    {
      modelLink:
        "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_Skullkid.pak",
      modelImage: data.Child_SkullKid.childImageSharp.fixed,
      modelName: "SkullKid",
      authorLink: "https://github.com/Psi-Hate",
      author: "Psi-Hate",
    },
    {
      modelLink:
        "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_Tetra.pak",
      modelImage: data.Child_Tetra.childImageSharp.fixed,
      modelName: "Tetra",
      authorLink: "https://github.com/Psi-Hate",
      author: "Psi-Hate",
    },
    {
      modelLink:
        "https://github.com/hylian-modding/Z64-CustomPlayerModels/raw/master/oot/pak/Child_ToonLink.pak",
      modelImage: data.Child_ToonLink.childImageSharp.fixed,
      modelName: "Toon Link",
      authorLink: "https://github.com/Psi-Hate",
      author: "Psi-Hate",
    },
  ]

  const numberOfColumns = 10
  const numberOfRows = childModels.length / numberOfColumns
  const numberOfEmptyColumns =
    numberOfColumns - (childModels.length % numberOfColumns)

  let modelsByRow = []
  for (let i = 0; i < numberOfRows; i++) {
    const modelsInRow = childModels.slice(
      i * numberOfColumns,
      (i + 1) * numberOfColumns
    )
    modelsByRow.push(modelsInRow)
  }
  modelsByRow.push(childModels.slice(numberOfRows * numberOfColumns))

  return (
    <div id="Child Models" className="tabcontent" style={{ display: "block" }}>
      <table className="tg">
        <tbody>
          {modelsByRow.map((modelsForRow, rowNumber) => {
            return (
              <tr>
                {modelsForRow.map((modelData) => (
                  <ModelEntry key={modelData.modelLink} {...modelData} />
                ))}
                {Array(numberOfEmptyColumns).map(() => (
                  <ModelEntry />
                ))}
              </tr>
            )
          })}
          {/* Add empty rows as placeholders to maintain grid size */}
          {/* {[Array(childModels.length % 10)].map((_, index) => (
          <ModelEntry key={index} />
        ))} */}
        </tbody>
      </table>
    </div>
  )
}

export default ChildModelsTab
