import React from 'react';
import PropTypes from 'utils/propTypes';

import { Table, Progress } from 'reactstrap';

import Avatar from 'components/Avatar';

import withBadge from 'hocs/withBadge';

const AvatarWithBadge = withBadge({
  position: 'bottom-right',
  color: 'success',
})(Avatar);

const UserProgressTable = ({ tableName, headers, usersData, ...restProps }) => {
  return (
    <Table responsive hover {...restProps}>
      <thead>
        <tr className="text-capitalize align-middle text-center">
          {headers.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead>
      <tbody id={tableName}>
        {usersData.map(({ avatar, name, count, price,buy,date, progress }, index) => (
          <tr key={index}>
            {/* <td className="align-middle text-center">
              <AvatarWithBadge src={avatar} />
            </td> */}
            <td id={name} className="align-middle text-center">{name}</td>
            <td id={name+'Count'} className="align-middle text-center">{count}</td>
            <td id={name+'Buy'} className="align-middle text-center">{buy}</td>
            <td id={name+'Price'} className="align-middle text-center">{price}</td>
            <td id={name+'Total'} className="align-middle text-center"></td>
            {/* <td className="align-middle text-center">
              <Progress value={progress} style={{ height: 5 }} />
            </td> */}
            {/* <td className="align-middle text-center">{progress}%</td> */}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

UserProgressTable.propTypes = {
  headers: PropTypes.node,
  usersData: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      date: PropTypes.date,
    })
  ),
};

UserProgressTable.defaultProps = {
  headers: [],
  usersData: [],
};

export default UserProgressTable;
