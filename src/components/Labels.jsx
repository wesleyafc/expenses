import { getLabels } from '../helper/helper';
import { default as api } from '../store/apiSlice'



export function Labels() {


    const { data, isFetching, isSuccess, isError, } = api.useGetLabelsQuery()

    let Transactions;

    if (isFetching) {
        Transactions = <div>Loading...</div>
    } else if (isSuccess) {

        Transactions = getLabels(data, 'type').map((item, index) => <LabelComponent key={index} data={item} />)
    } else if (isError) {
        Transactions = <div>Error</div>
    }

    return (
        <>
            {Transactions}
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

            <h3 className="font-bold">{Math.round(data.percent) ?? 0}%</h3>
        </div >
    )

}
