import Document, {Head, Html, Main, NextScript} from "next/document"

// IF: You do not want to use Bootstrap
// DELETE: Bootstrap Object - Link - Script
// IF: You do not want to use Tailwind CSS
// DELETE: Every Tailwind CSS classes in Body element

const font = [
  "https://fonts.googleapis.com/css",
  [
    ["family", "Poppins:100,200,300,400,500,600,700,800,900"].join("="),
    ["display", "swap"].join("=")
  ].join("&")
].join("?")

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link href={font} rel="stylesheet" />
        </Head>
        <body className="bg-zinc-50 font-poppins">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
