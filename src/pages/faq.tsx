import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img, { FluidObject } from "gatsby-image"
import { PageProps, Link, graphql, useStaticQuery } from "gatsby"

interface DataProps {
  eperm: FluidObject
  mupendll: FluidObject
  connectionloop: FluidObject
}

const FaqPage: React.FC<PageProps> = () => {
  // fetch and resize images
  /*
   * For more information, see the docs:
   * - `gatsby-image`: https://gatsby.dev/gatsby-image
   * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
   */
  const data = useStaticQuery(graphql`
    fragment ResizeFaqImage on File {
      childImageSharp {
        fixed(width: 500, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }

    query {
      eperm: file(relativePath: { eq: "eperm.png" }) {
        ...ResizeFaqImage
      }

      mupendll: file(relativePath: { eq: "mupendll.png" }) {
        ...ResizeFaqImage
      }

      connectionloop: file(relativePath: { eq: "connectionloop.jpg" }) {
        ...ResizeFaqImage
      }

      network: file(relativePath: { eq: "network.png" }) {
        ...ResizeFaqImage
      }

      loadrom: file(relativePath: { eq: "loadrom.png" }) {
        ...ResizeFaqImage
      }

      prereqs: file(relativePath: { eq: "prereqs.png" }) {
        ...ResizeFaqImage
      }

      enoent: file(relativePath: { eq: "enoent.png" }) {
        ...ResizeFaqImage
      }

      ogl: file(relativePath: { eq: "ogl.png" }) {
        ...ResizeFaqImage
      }
    }
  `)

  return (
    <Layout>
      <SEO title="ModLoader64 - Setup" />
      <div
        style={{
          paddingLeft: "16px",
        }}
      >
        <h1>Common Problems</h1>
        <table className="tg">
          <tbody>
            <tr>
              <th className="tg-0lax">Screenshots</th>
              <th className="tg-0lax">Problem</th>
              <th className="tg-0lax">Solution</th>
            </tr>
            <tr>
              <td>
                <Img fixed={data.eperm.childImageSharp.fixed} alt="eperm.png" />
              </td>
              <td>
                EPERM Error: You do not have the permissions to modify the file.
              </td>
              <td>
                Make sure the folder is located somewhere you have permissions
                to read/write to such as your Desktop or Downloads folders.
              </td>
            </tr>
            <tr>
              <td>
                <Img
                  fixed={data.mupendll.childImageSharp.fixed}
                  alt="mupendll.png"
                />
              </td>
              <td>Missing pre-requisites.</td>
              <td>
                Make sure you have installed the <b>x86</b> versions of all
                pre-requisites.
              </td>
            </tr>
            <tr>
              <td>
                <Img
                  fixed={data.connectionloop.childImageSharp.fixed}
                  alt="connectionloop.png"
                />
              </td>
              <td>ModLoader64 keeps reconnecting.</td>
              <td>
                You may have internet issues causing the connection to be
                unstable.
              </td>
            </tr>
            <tr>
              <td>
                <Img
                  fixed={data.network.childImageSharp.fixed}
                  alt="network.png"
                />
              </td>
              <td>ModLoader64 doesn't load the emulator.</td>
              <td>
                Verify that you have enabled{" "}
                <code style={{ color: "#caaf76" }}>OotOnline.pak</code> in your
                Mods tab.
              </td>
            </tr>
            <tr>
              <td>
                <Img
                  fixed={data.loadrom.childImageSharp.fixed}
                  alt="loadrom.png"
                />
              </td>
              <td>Mupen was unable to find your ROM file.</td>
              <td>
                You didn't select your ROM in the Games tab or the path to your
                ROM contains non-English characters. (e.g. á, ó, é)
              </td>
            </tr>
            <tr>
              <td>
                <Img
                  fixed={data.prereqs.childImageSharp.fixed}
                  alt="prereqs.png"
                />
              </td>
              <td>Mupen failed to initialize.</td>
              <td>
                Make sure you have installed the <b>x86</b> versions of all
                pre-requisites.
              </td>
            </tr>
            <tr>
              <td>
                <Img
                  fixed={data.enoent.childImageSharp.fixed}
                  alt="enoent.png"
                />
              </td>
              <td>There are multiple instances of ModLoader64 open.</td>
              <td>
                Open your task manager and close all instances of ModLoader64.
              </td>
            </tr>
            <tr>
              <td>
                <Img fixed={data.ogl.childImageSharp.fixed} alt="ogl.png" />
              </td>
              <td>Mupen fails to launch.</td>
              <td>
                Download and install{" "}
                <a
                  style={{ color: "#caaf76" }}
                  href="http://www.realtech-vr.com/support/deeplink.php?SKU=15&amp;target=UrlWin32"
                >
                  this
                </a>
                , if your OpenGL version is not at least 3.3 you won't be able
                to run these mods.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  )
}

export default FaqPage
