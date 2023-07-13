// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, setThumbnailId, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const thumbnailClassName = isActive ? 'thumbnail active' : 'thumbnail'

  const onClickThumbnail = () => {
    setThumbnailId(id)
  }

  return (
    <li className="list-items">
      {/* <h1>Hi Darling1</h1> */}
      <button type="button" className="btn" onClick={onClickThumbnail}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
