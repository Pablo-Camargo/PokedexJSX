import React from "react";

interface Props {
    title: string;
    content: string;
    comentsQty: number;
    tags: string[];

    category: Category;
}
export enum Category {
    JS = "JavaScript",
    TS = "TypeScript",
    P = "Python",
}
const Destructuring = ({
    title,
    content,
    comentsQty,
    tags,
    category,
}: Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>{comentsQty}</p>
            <div>
                {tags.map((tag) => (
                    <span>#{tag}</span>
                ))}
                <h5>Categoria: {category}</h5>
            </div>
        </div>
    );
};
export default Destructuring;
