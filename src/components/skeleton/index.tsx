import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton: React.FC = () => (
  <ContentLoader 
    speed={2}
    width={244}
    height={440.39}
    viewBox="0 0 244 440.39"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="20" ry="20" width="244" height="440.39" />
  </ContentLoader>
)

export default Skeleton