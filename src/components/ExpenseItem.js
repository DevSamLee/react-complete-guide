import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>January 6th 2023</div>
            <div className="expense-item__description">
                <h2>Dell Laptop</h2>
                <div className="expense-item__price">$899.99</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
