import { Card } from 'primereact/card'
import { useState } from 'react'

export const Cardz = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const cardsPerPage = 3
    const totalPages = Math.ceil(props.length / cardsPerPage)
    const startIndex = (currentPage - 1) * cardsPerPage
    const endIndex = startIndex + cardsPerPage
    const visibleCards = props.slice(startIndex, endIndex)
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage)
    }

    return (
        <div>
            {visibleCards.map((item, index) => (
                <Card
                    key={index}
                    title={item.bank_name}
                    subTitle={'Chi nhánh: ' + item.branch}
                    className={`border-top-3 border-orange-500`}
                >
                    <p>
                        <strong>
                            STK: {item.bank_account}
                            <br />
                            Chủ tài khoản: {item.holder_name}
                        </strong>
                    </p>
                </Card>
            ))}
            {props.length > cardsPerPage && (
                <div className="pagination">
                    <ul>
                        {Array.from({ length: totalPages }, (_, index) => (
                            <li key={index} className={index + 1 === currentPage ? 'active' : ''}>
                                <button onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}
