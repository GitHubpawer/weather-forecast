import type { TitleProps } from '../types/Title';

export default function Title({
    text,
    imageSrc,
    imageAlt,
}: TitleProps) {
    return (
        <h1 className="appTitle">
            {imageSrc && <img src={imageSrc} alt={imageAlt} className="titleIcon" />}
            <span>{text}</span>
        </h1>
    );
}
