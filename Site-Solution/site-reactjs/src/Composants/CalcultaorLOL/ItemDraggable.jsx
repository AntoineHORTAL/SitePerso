import { DndContext, useDroppable, useDraggable } from "@dnd-kit/core";

function ItemDraggable({ id, item, version }) {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: id,
        data: { item, id }
    });

    const style = {
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
        zIndex: isDragging ? 9999 : 1,
        position: isDragging ? "relative" : undefined,
    }

    return (
        <div ref={setNodeRef} style={style} {...listeners} {...attributes} className="Item" onClick={() => SeeItemDetails(item)}>
            <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image?.full}`} />
            <label>{item.gold?.total}</label>
        </div>
    );
}

export default ItemDraggable;