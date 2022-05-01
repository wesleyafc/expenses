

const obj = [
    {
        type: "Savings",
        color: "#10b981",
        percentage: 45
    },
    {
        type: "Investment",
        color: "#0b79cd",
        percentage: 5
    },
    {
        type: "Expenses",
        color: "#ff6385",
        percentage: 50
    }
]


export function Labels() {
    return (
        <>
            {obj.map((item, index) => <LabelComponent key={index} data={item} />)}
        </>
    )
}

function LabelComponent({ data }) {
    if (!data) return <></>
    return (
        <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div className="w-2 h-2 rounded py-3" style={{ background: data.color ?? "0b0f18" }}></div>
                <h3 className="text-md">{data.type ?? ""}</h3>
            </div>

            <h3 className="font-bold">{data.percentage ?? 0}%</h3>
        </div >
    )

}
