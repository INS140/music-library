import { useContext } from 'react'
import { DataContext } from './DataContext'
import GalleryItem from './GalleryItem'

export default function Gallery() {
    const data = useContext(DataContext)

    return <div className="gallery">
        {
            data.map((result, i) => {
                return <GalleryItem key={`track ${i}`} data={result} />
            })
        }
    </div>
}