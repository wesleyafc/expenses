import { BsTrash } from "react-icons/bs";

const obj = [
    {
        name: "Savings",
        color: "#10b981",
    },
    {
        name: "Investment",
        color: "#0b79cd",
    },
    {
        name: "Expenses",
        color: "#ff6385",
    }
]


export function List() {
    return (
        <div className="flex flex-col py-6 gap-3">
            <h1 className="py-4 font-bold text-xl">History</h1>
            {obj.map((item, index) => <Transaction category={item} key={index} />)}
        </div>
    )
}

function Transaction({ category }) {
    if (!category) return null
    return (
        <div
            style={{ border: `2px solid ${category.color ?? "#000"} ` }}
            className="item flex justify-center bg-gray-50 py-2 rounded-lg">
            <button className="px-3"> <BsTrash size={20} color={category.color ?? "#000"} ></BsTrash></button>

            <span className="block w-full">{category.name ?? ""} </span>
        </div>
    )
}
