import './ListItems.css';
import PropTypes from 'prop-types';
const ListItem = ({ items }) => {
    return (
        <ul className="task-list">
            {items.map((item, index) => (
                <li key={index} className={`task-item ${item.priority.toLowerCase()}`}>
                    <span className="task-name">{item.name}</span>
                    <span className="task-priority">{item.priority}</span>
                </li>
            ))}
        </ul>
    );
};
ListItem.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            priority: PropTypes.string.isRequired
        })
    ).isRequired
};
export default ListItem;