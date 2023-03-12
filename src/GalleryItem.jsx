export default function GalleryItem({ data }) {
    return <div className="item">
        <h2>{data.artistName}</h2>
        <p>{data.trackId}</p>
    </div>
}