import GalleryItem from './GalleryItem'

export default function Gallery(props) {
    return <div className="gallery">
        {
            props.data.map((result, i) => {
                return <GalleryItem key={`track ${i}`} data={result} />
            })
        }
    </div>
}