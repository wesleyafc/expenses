import { BsTrash } from "react-icons/bs";
import { default as api } from '../store/apiSlice'


export function List() {
    const { data, isFetching, isSuccess, isError, } = api.useGetLabelsQuery()
    const [deleteTransaction] = api.useDeleteTransactionMutation()

    let Transactions;

    const handleClick = (e) => {
        if (!e.target.dataset.id) return 0
        deleteTransaction({ _id: e.target.dataset.id })
    }

    if (isFetching) {
        Transactions = <div>Loading...</div>
    } else if (isSuccess) {
        Transactions = data.map((item, index) => <Transaction key={index} category={item} handler={handleClick} />)
    } else if (isError) {
        Transactions = <div>Error</div>
    }



    return (
        <div className="flex flex-col py-6 gap-3">
            <h1 className="py-4 font-bold text-xl">History</h1>
            {Transactions}
        </div>
    )
}

function Transaction({ category, handler }) {
    if (!category) return null
    return (
        <div
            style={{ border: `2px solid ${category.color ?? "#000"} ` }}
            className="item flex justify-center bg-gray-50 py-2 rounded-lg">
            <button
                className="px-3"
                onClick={handler}>
                <BsTrash
                    data-id={category._id ?? ''}
                    size={20} color={category.color ?? "#000"}>
                </BsTrash>
            </button>

            <span className="block w-full ">{category.name ?? ""} </span>
            <span className="block w-full ">R${category.amount ?? 0} </span>
        </div>
    )
}
