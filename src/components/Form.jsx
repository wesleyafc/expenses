import { useForm } from 'react-hook-form'
import { List } from './List'
import { default as api } from '../store/apiSlice'


export function Form() {

    const { register, handleSubmit, resetField } = useForm()
    const [addTranslation] = api.useAddTransactionMutation()

    const onSubmit = async (data) => {
        if (!data) return {}
        await addTranslation(data).unwrap()
        resetField('name')
        resetField('amount')


    }

    return (
        <div className="form max-w-sm mx-auto w-96">
            <h3 className="font-bold pb-4 text-xl">Transaction</h3>

            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-4">
                    <div className="input-group">
                        <input
                            {...register('name')}
                            type="text"
                            placeholder="Savings,Expenses"
                            className="form-input"

                        />
                    </div>

                    <select
                        className="form-input"
                        {...register('type')}
                    >
                        <option value="Expense" defaultValue >Expense</option>
                        <option value="Investment" >Investment</option>
                        <option value="Savings" >Savings</option>
                    </select>

                    <div className="input-group">
                        <input
                            {...register('amount')}
                            type="number"
                            step="0.01"
                            placeholder="Amount"
                            className="form-input"
                        />
                    </div>

                    <div className="submit-btn">
                        <button
                            className="border py-2 text-white bg-indigo-500 w-full rounded-lg"
                            type="submit"
                        >
                            Save</button>
                    </div>

                </div>
            </form>

            <List />
        </div>
    )
}
