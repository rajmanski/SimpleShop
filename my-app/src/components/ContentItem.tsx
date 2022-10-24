interface Props {
    item: any,
    key: number,
}

const ContentItem: React.FunctionComponent<Props> = ({item, key}) => {
    return (
        <div className="content-item">
            <>
                <h1>{item.title}</h1>
                <img src={item.thumbnail} alt="" />
                <h3>{item.price}</h3>
            </>
        </div>
    )
}

export default ContentItem;