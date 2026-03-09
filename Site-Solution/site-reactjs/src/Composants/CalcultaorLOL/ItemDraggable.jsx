import { useDraggable } from "@dnd-kit/core";
import { useRef, useState } from 'react';

function ItemDraggable({ id, item, version, SeeItemDetails }) {
    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: id,
        data: { item, id }
    });

    const pointerStartPos = useRef(null);
    const [hovered, setHovered] = useState(false);

    const style = {
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
        zIndex: isDragging ? 9999 : 1,
        position: "relative",
    };

    const handlePointerDown = (e) => {
        pointerStartPos.current = { x: e.clientX, y: e.clientY };
        listeners?.onPointerDown?.(e);
    };

    const handlePointerUp = (e) => {
        if (!pointerStartPos.current) return;
        const dx = Math.abs(e.clientX - pointerStartPos.current.x);
        const dy = Math.abs(e.clientY - pointerStartPos.current.y);
        if (dx < 5 && dy < 5) {
            SeeItemDetails(item);
        }
        pointerStartPos.current = null;
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className="Item"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${item.image?.full}`} />
            <label>{item.gold?.total}</label>

            {/* Bande nom au hover */}
            {hovered && (
                <div className="Nom-Item-Hover">
                    {item.name}
                </div>
            )}
        </div>
    );
}

export default ItemDraggable;