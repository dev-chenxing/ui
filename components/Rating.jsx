import { FaStar } from "react-icons/fa";

export default function Rating({ items = 5 }) {
    const ratingValues = Array.from({ length: items }, (_, index) => index + 1);
    function handleStarClick(event, starIndex) {}
    function handleMouseEnter(starIndex) {}
    function handleMouseLeave() {}
    return (
        <div className="flex gap-1">
            {ratingValues.map((value, starIndex) => (
                <FaStar
                    key={value}
                    className="text-black text-2xl"
                    onClick={(event) => handleStarClick(event, starIndex)}
                    onMouseEnter={() => handleMouseEnter(starIndex)}
                    onMouseLeave={handleMouseLeave}
                />
            ))}
        </div>
    );
}
