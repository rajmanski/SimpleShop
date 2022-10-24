interface Props {
    item: any,
    key: number,
}

const ContentItem: React.FunctionComponent<Props> = ({item}) => {
    return (
        <div className="content-item">
            <>
                <h1>{item.title}</h1>
                <img src={item.thumbnail} alt="" />
                <h3>{item.price} $</h3>
                <div className="buttons">
                    <button className="add-tobasket">Add to basket</button>
                    <button className="view-item-details">Item details</button>
                </div>
            </>
        </div>
    )
}

export default ContentItem;