import { Chart, ArcElement } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { Labels } from './Labels';
import { chartData, getTotal, totalMinusExpenses } from '../helper/helper';

import { default as api } from '../store/apiSlice'
Chart.register(ArcElement);

export function Graph() {

    const { data, isFetching, isSuccess, isError } = api.useGetLabelsQuery()
    let graphData;



    if (isFetching) {
        graphData = <div>Fetching</div>;
    } else if (isSuccess) {
        console.log(data)
        graphData = <Doughnut {...chartData(data)}></Doughnut>;
    } else if (isError) {
        graphData = <div>Error</div>
    }

    return (
        <div className="flex justify-content max-w-xs mx-auto">
            <div className="item">
                <div className="chart relative">
                    {graphData}
                    <h3 className='mb-4 font-bold title'>Total
                        <span className='block text-3xl text-emerald-400'>${getTotal(data) ?? 0}</span>

                    </h3>
                </div>

                <div className="flex flex-col py-10 gap-4">
                    <span
                        className='block text-3xl text-red-400 mb-10' >Spent
                        ${totalMinusExpenses(data) ?? 0}
                    </span>
                    {/* Labels */}
                    <Labels></Labels>
                </div>
            </div>
        </div>
    )
}