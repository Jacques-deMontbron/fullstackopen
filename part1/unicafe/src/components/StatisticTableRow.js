import '../styles/StatisticTableRow.css'

const StatisticTableRow = ({ text, value }) => (
    <tr>
        <th>{text}</th>
        <th>{value}</th>
    </tr>
)

export default StatisticTableRow