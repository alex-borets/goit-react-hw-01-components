import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          ></FriendListItem>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
