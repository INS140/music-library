import GalleryItem from './GalleryItem'

export default function Gallery(props) {
    return <div className="gallery">
        {
            props.data.map((item, i) => {
                return <GalleryItem key={`track ${i}`} data={item} />
            })
        }
    </div>
}