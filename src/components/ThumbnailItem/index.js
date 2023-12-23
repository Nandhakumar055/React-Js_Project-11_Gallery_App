import './index.css'

const ThumbnailItem = props => {
  const {imagesList, onClickImage, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imagesList

  const classNameChange = isActive ? 'is-active' : ''

  const onclickThumbnailsImage = () => {
    onClickImage(id)
  }

  return (
    <>
      <li className="thumbnail-image-container">
        <button
          className="button"
          type="button"
          onClick={onclickThumbnailsImage}
        >
          <img
            src={thumbnailUrl}
            alt={thumbnailAltText}
            className={`thumbnail-image ${classNameChange}`}
          />
        </button>
      </li>
    </>
  )
}

export default ThumbnailItem
