import { useRef, useState } from "react";
import { useEffect } from "react";


export default function useHover() {
    const [hover, setHover] = useState(false);
    const hoverRef = useRef(null);

    const handleMouseEnter = () => setHover(true);
    const handleMouseLeave = () => setHover(false);
    useEffect(() => {
        const node = hoverRef.current;
        if (node) {
            node.addEventListener("mouseover", handleMouseEnter);
            node.addEventListener("mouseout", handleMouseLeave);

            return () => {
                node.removeEventListener("mouseover", handleMouseEnter);
                node.removeEventListener("mouseout", handleMouseLeave);
            };
        }
    }, [hoverRef.current]);

    return [hover, hoverRef];
}
