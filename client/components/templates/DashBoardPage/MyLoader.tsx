import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={313}
    height={320}
    viewBox="0 0 313 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="dark:bg-slate-800 dark:foregroundColor='#4b5563'"
  >
    <rect x="0" y="0" rx="5" ry="5" width="310" height="184" />
    <rect x="0" y="220" rx="5" ry="5" width="310" height="20" />
    <rect x="0" y="260" rx="5" ry="5" width="310" height="20" />
    <rect x="0" y="300" rx="5" ry="5" width="310" height="20" />
  </ContentLoader>
)

export default MyLoader

